import { createFileRoute } from "@tanstack/react-router";
import { usePremiumFx } from "@/hooks/use-premium-fx";
import { AmbientBackground } from "@/components/veltor/AmbientBackground";
import { Nav } from "@/components/veltor/Nav";
import { Footer } from "@/components/veltor/Footer";
import { CasesContent } from "@/components/veltor/CasesContent";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Cases e Tráfego Pago | VELTOR" },
      {
        name: "description",
        content:
          "Portfólio VELTOR: cases reais com indicadores, metodologia de tráfego pago e a integração entre site e mídia paga que gera oportunidades qualificadas.",
      },
      { property: "og:title", content: "Cases e Tráfego Pago | VELTOR" },
      {
        property: "og:description",
        content:
          "Resultados documentados, método de trabalho e diferenciais da VELTOR na construção de sistemas digitais que geram demanda.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cases e Tráfego Pago | VELTOR" },
      {
        name: "twitter:description",
        content:
          "Cases com indicadores reais e o método VELTOR para transformar presença digital em receita.",
      },
    ],
  }),
  component: CasesPage,
});

function CasesPage() {
  usePremiumFx();
  return (
    <main className="relative bg-veltor-black overflow-hidden">
      <AmbientBackground />
      <div className="relative z-10">
        <Nav />
        <CasesContent />
        <Footer />
      </div>
    </main>
  );
}
