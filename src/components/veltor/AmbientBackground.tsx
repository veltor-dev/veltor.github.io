/**
 * Animated mesh-gradient + film-grain ambient layer.
 * Sits behind all content (z-0) without intercepting clicks.
 */
export function AmbientBackground() {
  return (
    <>
      <div className="veltor-mesh-bg" aria-hidden>
        <span />
      </div>
      <div className="veltor-noise" aria-hidden />
    </>
  );
}