import fightchampImg from "@/assets/case-fightchamp.jpg";
import luminaImg from "@/assets/case-lumina.jpg";
import forjaImg from "@/assets/case-forja.jpg";
import naturafitImg from "@/assets/case-naturafit.jpg";
import brasaImg from "@/assets/case-brasa.jpg";
import codelabImg from "@/assets/case-codelab.jpg";

const WHATSAPP_URL =
  "https://wa.me/5522981484193?text=Ol%C3%A1!%20Vi%20os%20cases%20da%20VELTOR%20e%20gostaria%20de%20um%20diagn%C3%B3stico%20gratuito.";

const featured = {
  company: "FightChamp",
  sector: "Academia de musculação e lutas",
  image: fightchampImg,
  url: "https://figthchamp.com",
  services: [
    "Site institucional",
    "Landing pages",
    "UX/UI design",
    "SEO técnico",
    "Performance",
    "Estrutura para conversão",
    "Integração com WhatsApp",
  ],
  objective:
    "Criar uma presença digital moderna capaz de fortalecer a marca, apresentar a academia com clareza e facilitar a captação de novos alunos.",
  solution:
    "Arquitetura de conteúdo construída em torno da decisão de matrícula: modalidades apresentadas de forma direta, provas visuais do ambiente e do treino, hierarquia tipográfica forte e contato por WhatsApp acessível em qualquer ponto da navegação. Base técnica otimizada — carregamento leve, semântica correta e SEO técnico — com landing pages independentes prontas para receber campanhas.",
  results: [
    "Fortalecimento da presença digital da marca.",
    "Melhor experiência para visitantes em qualquer dispositivo.",
    "Estrutura preparada para campanhas de mídia paga.",
    "Site otimizado para conversão e contato direto.",
  ],
  strategy:
    "Academia se decide por confiança e proximidade. O site foi desenhado para transmitir seriedade de operação e remover qualquer atrito entre o interesse e a primeira conversa — sem promessas infladas, apenas uma estrutura que sustenta o crescimento.",
};

const cases = [
  {
    company: "Studio Lumina",
    sector: "Clínica de estética",
    image: luminaImg,
    url: "#",
    services: ["Site institucional", "Meta Ads"],
    objective:
      "Sair da dependência de indicações e ocupar a agenda com previsibilidade.",
    solution:
      "Site construído em torno do agendamento, com prova visual do trabalho e formulário curto. Campanhas segmentadas por bairro e intenção de tratamento.",
    result: "12 → 87 agendamentos por mês em 45 dias.",
    strategy:
      "O gargalo não era volume de tráfego, era atrito. Reduzimos a decisão a um único passo e alinhamos cada anúncio ao procedimento que a pessoa já procurava.",
    metric: "+625%",
    metricLabel: "Agendamentos mensais",
  },
  {
    company: "Forja Urban",
    sector: "Marca streetwear",
    image: forjaImg,
    url: "#",
    services: ["E-commerce", "Google Ads", "Instagram Ads"],
    objective: "Lançar a operação online com faturamento desde o primeiro mês.",
    solution:
      "Loja com checkout enxuto, fichas de produto orientadas a desejo e estrutura de campanhas separando descoberta, consideração e remarketing.",
    result: "Mais de R$40.000 vendidos no primeiro mês.",
    strategy:
      "Streetwear vende identidade antes de produto. A vitrine foi tratada como editorial e a mídia, como distribuição desse editorial.",
    metric: "R$40k+",
    metricLabel: "Vendas no 1º mês",
  },
  {
    company: "Natura Fit",
    sector: "Consultoria online",
    image: naturafitImg,
    url: "#",
    services: ["Landing page", "Funil de conversão", "Meta Ads"],
    objective: "Reduzir o custo de aquisição sem perder volume de leads.",
    solution:
      "Landing page única por promessa, qualificação em duas etapas e realocação orçamentária diária com base em custo por lead qualificado.",
    result: "CAC 62% menor e taxa de conversão de 11,4%.",
    strategy:
      "Trocamos volume bruto por qualidade de entrada. Menos leads, melhor conversa comercial e custo por cliente muito mais baixo.",
    metric: "-62%",
    metricLabel: "Custo de aquisição",
  },
  {
    company: "Ateliê Brasa",
    sector: "Restaurante contemporâneo",
    image: brasaImg,
    url: "#",
    services: ["Site institucional", "Google Ads Local"],
    objective: "Ocupar os finais de semana e consolidar a marca na região.",
    solution:
      "Site com cardápio, ambientação fotográfica e reserva direta. Campanhas locais acionadas nos horários de decisão do público.",
    result: "Fila de espera e forte crescimento nas redes sociais.",
    strategy:
      "Restaurante se decide em minutos. Trabalhamos raio geográfico curto e janelas de horário — a mídia apareceu no momento exato da escolha.",
    metric: "Casa cheia",
    metricLabel: "Sextas, sábados e domingos",
  },
  {
    company: "CodeLab Academy",
    sector: "Escola de programação",
    image: codelabImg,
    url: "#",
    services: ["Site", "Tráfego pago"],
    objective: "Construir um fluxo constante de matrículas qualificadas.",
    solution:
      "Site com trilha de conteúdo por perfil de aluno, captura progressiva e campanhas divididas por estágio de maturidade.",
    result: "Mais de 300 leads qualificados em 60 dias.",
    strategy:
      "Educação exige confiança antes da compra. A jornada foi desenhada para amadurecer o interesse em vez de forçar a decisão.",
    metric: "300+",
    metricLabel: "Leads em 60 dias",
  },
];

const platforms = [
  {
    t: "Google Ads",
    who: "Empresas cujo serviço já é procurado ativamente na busca.",
    benefit:
      "Captura demanda existente no momento exato da pesquisa, com custo por clique controlado.",
    goal: "Objetivo: gerar contatos e vendas com alta intenção de compra.",
  },
  {
    t: "Meta Ads",
    who: "Negócios locais, serviços e marcas que precisam criar demanda.",
    benefit:
      "Segmentação por comportamento, região e interesse, com criativos que geram desejo.",
    goal: "Objetivo: gerar volume qualificado a custo competitivo.",
  },
  {
    t: "Instagram Ads",
    who: "Marcas visuais: estética, moda, gastronomia, fitness e lifestyle.",
    benefit:
      "Impacto estético em feed, stories e reels, com forte apelo de marca.",
    goal: "Objetivo: desejo, autoridade visual e conversão direta.",
  },
  {
    t: "Facebook Ads",
    who: "Públicos maduros e operações com foco em geração de leads locais.",
    benefit:
      "Alcance amplo, formatos de lead form e remarketing consistente.",
    goal: "Objetivo: leads em volume com custo por contato baixo.",
  },
  {
    t: "YouTube Ads",
    who: "Marcas que precisam explicar valor antes de vender.",
    benefit:
      "Vídeo em escala, construção de memória de marca e públicos de altíssima retenção.",
    goal: "Objetivo: autoridade, alcance e aquecimento de demanda.",
  },
  {
    t: "LinkedIn Ads",
    who: "Operações B2B, serviços corporativos e ticket alto.",
    benefit:
      "Segmentação por cargo, setor e porte de empresa — precisão que nenhum outro canal entrega.",
    goal: "Objetivo: oportunidades comerciais qualificadas.",
  },
  {
    t: "TikTok Ads",
    who: "Marcas jovens, produtos de impulso e lançamentos.",
    benefit:
      "Custo de alcance baixo e potencial de viralização orgânica somada à mídia.",
    goal: "Objetivo: descoberta rápida e crescimento acelerado.",
  },
];

const benefits = [
  {
    t: "Clientes qualificados",
    d: "A entrega é direcionada a quem já demonstra intenção real de compra.",
  },
  {
    t: "Segmentação precisa",
    d: "Região, idade, comportamento, interesse e momento definem quem vê o anúncio.",
  },
  {
    t: "Resultados rápidos",
    d: "Da aprovação à primeira oportunidade, o intervalo é de dias — não de meses.",
  },
  {
    t: "Escalabilidade",
    d: "O que funciona pode ser ampliado sem reconstruir a operação.",
  },
  {
    t: "ROI mensurável",
    d: "Cada real investido tem origem, destino e retorno rastreáveis.",
  },
  {
    t: "Controle do investimento",
    d: "Orçamento diário definido por você, ajustável a qualquer momento.",
  },
  {
    t: "Testes A/B",
    d: "Ofertas, criativos e páginas validados em ciclos curtos, com dado no lugar de achismo.",
  },
  {
    t: "Otimização constante",
    d: "A conta é ajustada continuamente com base em desempenho real.",
  },
  {
    t: "Mensuração em tempo real",
    d: "Painéis vivos: custo por lead, conversões e receita acompanhados dia a dia.",
  },
  {
    t: "Crescimento previsível",
    d: "Com custo por cliente conhecido, crescer deixa de ser aposta e vira planejamento.",
  },
];

const process = [
  {
    n: "01",
    t: "Diagnóstico",
    d: "Entendemos margem, ticket, capacidade de atendimento e o que hoje trava a venda.",
  },
  {
    n: "02",
    t: "Pesquisa",
    d: "Mercado, concorrência, termos de busca e comportamento do seu público antes de qualquer decisão.",
  },
  {
    n: "03",
    t: "Planejamento",
    d: "Metas, orçamento, canais e indicadores definidos por escrito antes do primeiro anúncio ir ao ar.",
  },
  {
    n: "04",
    t: "Estratégia",
    d: "Oferta, mensagem e jornada desenhadas para o tipo de decisão de compra do seu cliente.",
  },
  {
    n: "05",
    t: "Criação",
    d: "Criativos, textos e landing pages produzidos com foco em clareza e conversão.",
  },
  {
    n: "06",
    t: "Implementação",
    d: "Site, rastreamento (Pixel, GA4, GTM) e campanhas entram no ar como um sistema único.",
  },
  {
    n: "07",
    t: "Monitoramento",
    d: "Acompanhamento diário de custo por resultado, qualidade dos leads e comportamento nas páginas.",
  },
  {
    n: "08",
    t: "Otimização",
    d: "Corte do que não performa, reforço do que converte e refinamento contínuo de público e criativo.",
  },
  {
    n: "09",
    t: "Escala",
    d: "Ampliação de investimento apenas sobre o que já provou retorno consistente.",
  },
];

const differentials = [
  {
    t: "Estratégias personalizadas",
    d: "Nenhum projeto herda o plano de outro. O ponto de partida é sempre o seu mercado.",
  },
  {
    t: "SEO técnico",
    d: "Estrutura semântica, indexação limpa e velocidade tratadas como base, não como ajuste final.",
  },
  {
    t: "Pixel Meta",
    d: "Eventos configurados e validados para que o algoritmo aprenda com conversões reais.",
  },
  {
    t: "Google Analytics",
    d: "GA4 implementado com metas claras — dados que respondem perguntas de negócio.",
  },
  {
    t: "Google Tag Manager",
    d: "Rastreamento centralizado e auditável, sem gambiarra espalhada pelo código.",
  },
  {
    t: "CRO",
    d: "Otimização de conversão aplicada onde o dado aponta perda, com hipótese e teste.",
  },
  {
    t: "Landing pages",
    d: "Páginas dedicadas por campanha, construídas para uma única decisão.",
  },
  {
    t: "Remarketing",
    d: "Reencontro estratégico com quem já demonstrou interesse e não concluiu.",
  },
  {
    t: "Relatórios",
    d: "Relatórios diretos, sem métricas decorativas e sem vocabulário inflado.",
  },
  {
    t: "Performance",
    d: "Beleza que carrega devagar é prejuízo. Velocidade é requisito, não bônus.",
  },
  {
    t: "Otimização contínua",
    d: "A entrega marca o início da operação, não o fim da relação.",
  },
  {
    t: "Foco em ROI",
    d: "A pergunta que orienta cada decisão é sempre a mesma: quanto isso devolve?",
  },
];

export function CasesContent() {
  return (
    <>
      {/* ── Hero editorial ── */}
      <section className="bg-veltor-black text-veltor-white pt-40 pb-24 md:pt-56 md:pb-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="veltor-eyebrow text-veltor-white/50 reveal">
            Portfólio · Clientes e cases
          </p>
          <h1 className="veltor-display mt-8 text-5xl md:text-7xl lg:text-8xl max-w-4xl reveal">
            Resultado é a única
            <br />
            <span className="text-veltor-white/50">métrica de reputação.</span>
          </h1>
          <p className="mt-10 text-lg md:text-xl text-veltor-white/60 max-w-2xl leading-relaxed reveal">
            Sites, landing pages, e-commerce, SEO, tráfego pago, performance e
            conversão. Uma seleção de projetos em que design, engenharia e mídia
            foram construídos como um sistema único.
          </p>
        </div>
      </section>

      {/* ── Projetos ── */}
      <section
        id="projetos"
        className="bg-veltor-black text-veltor-white pb-32 md:pb-48"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl reveal">
            <p className="veltor-eyebrow text-veltor-white/50">Projetos</p>
            <h2 className="veltor-display mt-6 text-4xl md:text-6xl">
              Projetos que geram resultados.
            </h2>
            <p className="mt-8 text-lg text-veltor-white/60 leading-relaxed">
              Cada projeto apresentado aqui nasceu de um objetivo comercial
              específico. Nada foi feito para agradar portfólio: as decisões de
              design, a arquitetura técnica e a estratégia de mídia foram
              orientadas por performance, experiência do usuário e geração de
              resultados mensuráveis para o negócio.
            </p>
          </div>

          {/* Projeto em destaque */}
          <article
            className="reveal-blur veltor-glow-cursor mt-20 rounded-3xl border border-veltor-line-dark overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(120,160,255,0.10), transparent 45%)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative order-1 lg:order-2 bg-[oklch(0.14_0_0)]">
                <img
                  src={featured.image}
                  alt="Site da academia FightChamp desenvolvido pela VELTOR"
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="order-2 lg:order-1 p-8 md:p-14">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-veltor-line-dark text-veltor-white/70">
                    Projeto em destaque
                  </span>
                  <span className="veltor-display text-sm text-veltor-white/30">
                    01
                  </span>
                </div>

                <h3 className="veltor-display mt-8 text-4xl md:text-6xl veltor-shimmer-text">
                  {featured.company}
                </h3>
                <p className="mt-3 text-sm text-veltor-white/50">
                  {featured.sector}
                </p>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {featured.services.map((s) => (
                    <li
                      key={s}
                      className="text-[11px] uppercase tracking-[0.16em] text-veltor-white/60 border border-veltor-line-dark rounded-full px-3 py-1.5"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 space-y-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-veltor-white/40">
                      Objetivo
                    </p>
                    <p className="mt-3 text-sm md:text-base text-veltor-white/70 leading-relaxed">
                      {featured.objective}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-veltor-white/40">
                      Solução aplicada
                    </p>
                    <p className="mt-3 text-sm md:text-base text-veltor-white/70 leading-relaxed">
                      {featured.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-veltor-white/40">
                      Resultado
                    </p>
                    <ul className="mt-3 space-y-2">
                      {featured.results.map((r) => (
                        <li
                          key={r}
                          className="text-sm md:text-base text-veltor-white leading-relaxed flex gap-3"
                        >
                          <span className="text-veltor-white/30">—</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="border-t border-veltor-line-dark pt-7 text-base text-veltor-white/60 leading-relaxed">
                    {featured.strategy}
                  </p>
                </div>

                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-magnetic="0.3"
                  className="veltor-btn-premium veltor-magnetic veltor-press mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-veltor-white text-veltor-black text-[14px] font-medium"
                >
                  Acessar Projeto
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                    <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          {/* Demais projetos */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((c, i) => (
              <article
                key={c.company}
                data-tilt="3"
                className="reveal-blur veltor-tilt veltor-glow-cursor veltor-card-hover flex flex-col rounded-3xl border border-veltor-line-dark overflow-hidden bg-veltor-black"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="bg-[oklch(0.14_0_0)]">
                  <img
                    src={c.image}
                    alt={`Projeto ${c.company} desenvolvido pela VELTOR`}
                    width={1536}
                    height={1024}
                    loading="lazy"
                    className="w-full h-56 md:h-64 object-cover"
                  />
                </div>

                <div className="flex flex-col flex-1 p-8 md:p-10">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="veltor-display text-3xl">{c.company}</h3>
                    <span className="veltor-display text-sm text-veltor-white/25">
                      0{i + 2}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-veltor-white/50">{c.sector}</p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {c.services.map((s) => (
                      <li
                        key={s}
                        className="text-[11px] uppercase tracking-[0.16em] text-veltor-white/60 border border-veltor-line-dark rounded-full px-3 py-1.5"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-veltor-white/40">
                        Objetivo
                      </p>
                      <p className="mt-2 text-sm text-veltor-white/70 leading-relaxed">
                        {c.objective}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-veltor-white/40">
                        Solução aplicada
                      </p>
                      <p className="mt-2 text-sm text-veltor-white/70 leading-relaxed">
                        {c.solution}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-veltor-white/40">
                        Resultado
                      </p>
                      <p className="mt-2 text-sm text-veltor-white leading-relaxed">
                        {c.result}
                      </p>
                    </div>
                  </div>

                  <p className="mt-7 border-t border-veltor-line-dark pt-6 text-sm text-veltor-white/55 leading-relaxed">
                    {c.strategy}
                  </p>

                  <div className="mt-8 pt-6 border-t border-veltor-line-dark flex items-end justify-between gap-6">
                    <div>
                      <p className="veltor-display text-3xl">{c.metric}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-veltor-white/45">
                        {c.metricLabel}
                      </p>
                    </div>
                    <a
                      href={c.url}
                      data-magnetic="0.25"
                      className="veltor-magnetic veltor-press inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-veltor-line-dark text-[13px] font-medium text-veltor-white hover:bg-veltor-white hover:text-veltor-black transition-colors"
                    >
                      Acessar Projeto
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
                        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero tráfego pago ── */}
      <section className="relative bg-veltor-black text-veltor-white py-32 md:py-48 border-t border-veltor-line-dark overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 50% 20%, rgba(120,160,255,0.14), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <p className="veltor-eyebrow text-veltor-white/50 reveal">
            Tráfego pago
          </p>
          <h2 className="veltor-display mt-6 text-5xl md:text-7xl max-w-4xl reveal">
            Seu próximo cliente
            <br />
            <span className="veltor-shimmer-text">já está procurando.</span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-veltor-white/70 max-w-3xl leading-relaxed reveal">
            A diferença entre ser encontrado e ser escolhido é distribuição.
          </p>
          <p className="mt-8 text-base md:text-lg text-veltor-white/55 max-w-3xl leading-relaxed reveal">
            Gerimos investimento em mídia como se fosse nosso: com meta definida,
            leitura diária de desempenho e decisões baseadas em custo por cliente
            conquistado. Nada de impressões bonitas em relatório — o que interessa
            é quanto entrou no caixa.
          </p>
          <div className="mt-12 reveal">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic="0.35"
              className="veltor-btn-premium veltor-magnetic veltor-press inline-flex items-center px-8 py-4 rounded-full bg-veltor-white text-veltor-black text-[15px] font-medium"
            >
              Quero atrair clientes qualificados
            </a>
          </div>
        </div>
      </section>

      {/* ── O que é tráfego pago ── */}
      <section className="bg-veltor-white text-veltor-gray py-32 md:py-48">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5 reveal">
            <p className="veltor-eyebrow">Fundamentos</p>
            <h2 className="veltor-display mt-6 text-4xl md:text-6xl">
              O que é tráfego pago,
              <br />
              <span className="text-veltor-muted">sem rodeios.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-10 reveal">
            <div>
              <h3 className="text-lg font-semibold tracking-veltor-tight">
                O conceito
              </h3>
              <p className="mt-3 text-base md:text-lg text-veltor-muted leading-relaxed">
                É a compra de atenção qualificada. Em vez de esperar ser
                encontrado, sua empresa aparece exatamente para quem está
                procurando o que você vende — ou para quem tem o perfil de quem
                compra.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-veltor-tight">
                Como funciona
              </h3>
              <p className="mt-3 text-base md:text-lg text-veltor-muted leading-relaxed">
                Plataformas como Google e Meta organizam intenção e
                comportamento em leilões. Definimos quem deve ver, com qual
                mensagem e em que momento; você paga pela entrega e mede o
                retorno por cliente conquistado. O algoritmo aprende com cada
                conversão registrada e passa a buscar mais pessoas parecidas com
                quem já comprou.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-veltor-tight">
                Tráfego pago x tráfego orgânico
              </h3>
              <p className="mt-3 text-base md:text-lg text-veltor-muted leading-relaxed">
                O orgânico é patrimônio: SEO e conteúdo constroem autoridade que
                se acumula, mas exigem meses de consistência. O pago é
                distribuição imediata: liga hoje, gera oportunidade amanhã, e
                para no momento em que o investimento para. Um não substitui o
                outro — o orgânico reduz o custo do pago ao longo do tempo, e o
                pago sustenta o caixa enquanto o orgânico amadurece.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-veltor-tight">
                Quando faz sentido investir
              </h3>
              <p className="mt-3 text-base md:text-lg text-veltor-muted leading-relaxed">
                Quando existe uma oferta clara, margem que suporte aquisição e
                capacidade real de atender mais clientes. Sem esses três pontos,
                o investimento antecipa um problema em vez de resolver um.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-veltor-tight">
                Por que acelera resultados
              </h3>
              <p className="mt-3 text-base md:text-lg text-veltor-muted leading-relaxed">
                Porque substitui expectativa por previsibilidade. É o único
                canal em que se pode decidir, no mesmo dia, quantas
                oportunidades a operação vai receber — e conhecer o custo exato
                de cada uma delas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Plataformas ── */}
      <section className="bg-veltor-black text-veltor-white py-32 md:py-48 border-t border-veltor-line-dark">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl reveal">
            <p className="veltor-eyebrow text-veltor-white/50">Plataformas</p>
            <h2 className="veltor-display mt-6 text-4xl md:text-6xl">
              O canal certo
              <br />
              <span className="text-veltor-white/50">para o seu negócio.</span>
            </h2>
            <p className="mt-8 text-lg text-veltor-white/60 leading-relaxed">
              Não existe plataforma melhor: existe a plataforma adequada ao seu
              tipo de decisão de compra, ao seu ticket e ao momento da sua
              marca.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-veltor-line-dark border border-veltor-line-dark">
            {platforms.map((p, i) => (
              <div
                key={p.t}
                data-tilt="5"
                className="reveal-blur veltor-tilt veltor-glow-cursor veltor-card-hover bg-veltor-black p-9 md:p-10"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <h3 className="veltor-display text-2xl">{p.t}</h3>
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-veltor-white/40">
                    Para quem serve
                  </p>
                  <p className="mt-2 text-sm text-veltor-white/65 leading-relaxed">
                    {p.who}
                  </p>
                </div>
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-veltor-white/40">
                    Principais benefícios
                  </p>
                  <p className="mt-2 text-sm text-veltor-white/65 leading-relaxed">
                    {p.benefit}
                  </p>
                </div>
                <p className="mt-6 pt-5 border-t border-veltor-line-dark text-sm text-veltor-white/80">
                  {p.goal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefícios ── */}
      <section className="bg-veltor-white text-veltor-gray py-32 md:py-48">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl reveal">
            <p className="veltor-eyebrow">Benefícios</p>
            <h2 className="veltor-display mt-6 text-4xl md:text-6xl">
              O que muda na
              <br />
              <span className="text-veltor-muted">sua operação.</span>
            </h2>
          </div>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.t}
                data-tilt="5"
                className="reveal-blur veltor-tilt veltor-glow-cursor veltor-glow-cursor-light veltor-card-hover bg-[oklch(0.985_0_0)] border border-veltor-line rounded-2xl p-7"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <h3 className="text-base font-semibold tracking-veltor-tight">
                  {b.t}
                </h3>
                <p className="mt-3 text-sm text-veltor-muted leading-relaxed">
                  {b.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Site + tráfego ── */}
      <section className="bg-veltor-black text-veltor-white py-32 md:py-48 border-t border-veltor-line-dark">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl reveal">
            <p className="veltor-eyebrow text-veltor-white/50">
              Site + tráfego pago
            </p>
            <h2 className="veltor-display mt-6 text-4xl md:text-6xl">
              Infraestrutura e combustível
              <br />
              <span className="text-veltor-white/50">funcionam juntos.</span>
            </h2>
            <p className="mt-8 text-lg text-veltor-white/60 leading-relaxed">
              Um site sem tráfego é uma loja impecável aberta em uma rua sem
              movimento. Tráfego sem estrutura é audiência levada até uma porta
              fechada.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-veltor-line-dark">
            {[
              {
                t: "O site converte",
                d: "Ele sustenta a decisão: explica, prova, organiza e recebe. É onde o interesse vira contato.",
              },
              {
                t: "O tráfego leva visitantes",
                d: "Ele coloca as pessoas certas diante da oferta, no momento em que a decisão está sendo tomada.",
              },
              {
                t: "A estratégia transforma",
                d: "Quando os dois nascem do mesmo plano, cada real de mídia rende mais e cada visita tem para onde ir.",
              },
            ].map((b, i) => (
              <div
                key={b.t}
                data-tilt="5"
                className="reveal-blur veltor-tilt veltor-glow-cursor veltor-card-hover bg-veltor-black p-10"
                style={{ transitionDelay: `${i * 110}ms` }}
              >
                <h3 className="text-xl font-semibold tracking-veltor-tight">
                  {b.t}
                </h3>
                <p className="mt-4 text-sm text-veltor-white/55 leading-relaxed">
                  {b.d}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-14 text-lg md:text-xl text-veltor-white/60 max-w-3xl leading-relaxed reveal">
            Contratar as duas frentes separadamente costuma custar mais caro:
            uma parte otimiza cliques, a outra otimiza layout, e ninguém responde
            pela venda.
          </p>
        </div>
      </section>

      {/* ── Processo ── */}
      <section className="bg-veltor-black text-veltor-white pb-32 md:pb-48">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl reveal">
            <p className="veltor-eyebrow text-veltor-white/50">
              Como a VELTOR trabalha
            </p>
            <h2 className="veltor-display mt-6 text-4xl md:text-6xl">
              Nove etapas,
              <br />
              <span className="text-veltor-white/50">nenhuma improvisada.</span>
            </h2>
          </div>
          <ol className="mt-20 border-t border-veltor-line-dark">
            {process.map((s, i) => (
              <li
                key={s.n}
                className="reveal-blur veltor-glow-cursor border-b border-veltor-line-dark py-9 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-baseline"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="md:col-span-1 veltor-display text-2xl text-veltor-white/30">
                  {s.n}
                </span>
                <h3 className="md:col-span-4 text-xl md:text-2xl font-semibold tracking-veltor-tight">
                  {s.t}
                </h3>
                <p className="md:col-span-7 text-sm md:text-base text-veltor-white/55 leading-relaxed">
                  {s.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Diferenciais ── */}
      <section className="bg-veltor-black text-veltor-white pb-32 md:pb-48">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl reveal">
            <p className="veltor-eyebrow text-veltor-white/50">Diferenciais</p>
            <h2 className="veltor-display mt-6 text-4xl md:text-6xl">
              Por que a VELTOR.
            </h2>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-veltor-line-dark border border-veltor-line-dark">
            {differentials.map((d, i) => (
              <div
                key={d.t}
                data-tilt="6"
                className="reveal-blur veltor-tilt veltor-glow-cursor veltor-card-hover bg-veltor-black p-9"
                style={{ transitionDelay: `${i * 55}ms` }}
              >
                <h3 className="text-base font-semibold tracking-veltor-tight">
                  {d.t}
                </h3>
                <p className="mt-3 text-sm text-veltor-white/55 leading-relaxed">
                  {d.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chamada final ── */}
      <section className="relative bg-veltor-black text-veltor-white py-32 md:py-48 border-t border-veltor-line-dark overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(120,160,255,0.15), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center">
          <p className="veltor-eyebrow text-veltor-white/50 reveal">
            Próximo passo
          </p>
          <h2 className="veltor-display mt-6 text-4xl md:text-6xl lg:text-7xl reveal">
            Um site guarda a marca.
            <br />
            <span className="veltor-shimmer-text">
              Um sistema gera oportunidade.
            </span>
          </h2>
          <p className="mt-10 text-lg md:text-xl text-veltor-white/60 max-w-2xl mx-auto leading-relaxed reveal">
            Trabalhamos com um número reduzido de projetos por vez, porque
            desempenho exige acompanhamento próximo. Se faz sentido para o seu
            momento, a conversa começa por um diagnóstico — sem compromisso e
            sem apresentação genérica.
          </p>
          <div className="mt-12 reveal">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic="0.4"
              className="veltor-btn-premium veltor-magnetic veltor-press inline-flex items-center justify-center px-9 py-4 rounded-full bg-veltor-white text-veltor-black text-[15px] font-medium"
            >
              Solicitar Diagnóstico Gratuito
            </a>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-veltor-white/40">
              Resposta em até 24 horas · Atendimento consultivo
            </p>
          </div>
        </div>
      </section>
    </>
  );
}