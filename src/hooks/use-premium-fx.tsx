import { useEffect } from "react";

/**
 * Unified premium FX runtime:
 *  - Reveal animations (.reveal / .reveal-mask / .reveal-blur / .reveal-line)
 *  - Parallax (data-parallax="0.2")
 *  - 3D tilt cards (data-tilt)
 *  - Magnetic buttons (data-magnetic="0.25")
 *  - Cursor light tracking on .veltor-glow-cursor (auto-attached)
 *
 * Disabled on mobile + prefers-reduced-motion for performance.
 */
export function usePremiumFx() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // ---- Reveal observer (always-on, GPU friendly) ----
    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".reveal, .reveal-mask, .reveal-blur, .reveal-line",
      ),
    );
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io!.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
      );
      reveals.forEach((el) => io!.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("is-visible"));
    }

    if (reduce || isMobile) {
      return () => io?.disconnect();
    }

    // ---- Parallax ----
    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    let ticking = false;
    const updateParallax = () => {
      const vh = window.innerHeight;
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.15");
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const offset = (center - vh / 2) * -speed;
        el.style.setProperty("--py", `${offset.toFixed(1)}px`);
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    updateParallax();

    // ---- Tilt 3D ----
    const tiltCleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
      const max = parseFloat(el.dataset.tilt || "8");
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--rx", `${(-y * max).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${(x * max).toFixed(2)}deg`);
        el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
        el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
      };
      const onLeave = () => {
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      tiltCleanups.push(() => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    });

    // ---- Magnetic buttons ----
    const magCleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
      const strength = parseFloat(el.dataset.magnetic || "0.3");
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        el.style.setProperty("--mx-px", `${x.toFixed(1)}px`);
        el.style.setProperty("--my-px", `${y.toFixed(1)}px`);
        el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
        el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
      };
      const onLeave = () => {
        el.style.setProperty("--mx-px", "0px");
        el.style.setProperty("--my-px", "0px");
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      magCleanups.push(() => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    });

    // ---- Cursor light tracking on glow surfaces ----
    const glowCleanups: Array<() => void> = [];
    document
      .querySelectorAll<HTMLElement>(".veltor-glow-cursor:not([data-tilt]):not([data-magnetic])")
      .forEach((el) => {
        const onMove = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
          el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
        };
        el.addEventListener("mousemove", onMove);
        glowCleanups.push(() => el.removeEventListener("mousemove", onMove));
      });

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      tiltCleanups.forEach((fn) => fn());
      magCleanups.forEach((fn) => fn());
      glowCleanups.forEach((fn) => fn());
    };
  }, []);
}