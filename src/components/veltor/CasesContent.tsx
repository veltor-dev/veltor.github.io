const WHATSAPP_URL =
  "https://wa.me/5522981484193?text=Ol%C3%A1!%20Vi%20os%20cases%20da%20VELTOR%20e%20gostaria%20de%20uma%20an%C3%A1lise%20estrat%C3%A9gica.";

const cases = [
  {
    company: "Studio Lumina",
    sector: "Clínica de estética — São Paulo",
    services: ["Site institucional", "Meta Ads"],
    objective:
      "Sair da dependência de indicações e ocupar a agenda com previsibilidade.",
    solution:
      "Site construído em torno do agendamento, com prova visual do trabalho e formulário curto. Campanhas segmentadas por bairro e intenção de tratamento.",
    result: "12 → 87 agendamentos mensais em 45 dias.",
    strategy:
      "O gargalo não era volume de tráfego, era atrito. Reduzimos a decisão a um único passo e alinhamos cada anúncio ao procedimento que a pessoa já procurava.",
    metric: "+625%",
    metricLabel: "Agendamentos mensais",
  },
  {
    company: "Forja Urban",
    sector: "Marca de streetwear",
    services: ["E-commerce", "Google Ads", "Instagram Ads"],
    objective: "Lançar a operação online com faturamento desde o primeiro mês.",
    solution:
      "Loja com checkout enxuto, fichas de produto orientadas a desejo e estrutura de campanhas separando descoberta, consideração e remarketing.",
    result: "Mais de R$40.000 em vendas no primeiro mês.",
    strategy:
      "Streetwear vende identidade antes de produto. A vitrine foi tratada como editorial e a mídia, como distribuição desse editorial.",
    metric: "R$40k+",
    metricLabel: "Vendas no 1º mês",
  },
  {
    company: "Natura Fit",
    sector: "Consultoria de emagrecimento",
    services: ["Landing page", "Funil de conversão", "Meta Ads"],
    objective: "Reduzir o custo de aquisição sem perder volume de leads.",
    solution:
      "Landing page única por promessa, qualificação em duas etapas e realocação orçamentária diária com base em custo por lead qualificado.",
    result: "CAC reduzido em 62% e conversão de 11,4%.",
    strategy:
      "Trocamos o volume bruto pela qualidade da entrada. Menos leads, melhor conversa comercial, custo por cliente muito menor.",
    metric: "-62%",
    metricLabel: "Custo de aquisição",
  },
  {
    company: "Ateliê Brasa",
    sector: "Restaurante contemporâneo",
    services: ["Site institucional", "Google Ads Local"],
    objective: "Ocupar os finais de semana e consolidar a marca na região.",
    solution:
      "Site com cardápio, ambientação fotográfica e reserva direta. Campanhas locais acionadas nos horários de decisão do público.",
    result: "Fila de espera nos finais de semana e forte crescimento no Instagram.",
    strategy:
      "Restaurante se decide em minutos. Trabalhamos raio geográfico curto e janelas de horário — a mídia apareceu no momento exato da escolha.",
    metric: "Casa cheia",
    metricLabel: "Sextas, sábados e domingos",
  },
  {
    company: "CodeLab Academy",
    sector: "Escola de programação",
    services: ["Site", "Tráfego pago"],
    objective: "Construir um fluxo constante de matrículas qualificadas.",
    solution:
      "Site com trilha de conteúdo por perfil de aluno, captura progressiva e campanhas divididas por estágio de maturidade.",
    result: "Mais de 300 leads qualificados em 60 dias.",
    strategy:
      "Educação exige confiança antes da compra. A jornada foi desenhada para amadurecer o interesse em vez de forçar a decisão.",
    metric: "300+",
    metricLabel: "Leads qualificados em 60 dias",
  },
];

const benefits = [
  {
    t: "Clientes qualificados",
    d: "A entrega é direcionada a quem já demonstra intenção real de compra.",
  },
  {
    t: "Resultados mensuráveis",
    d: "Cada real investido tem origem, destino e retorno rastreáveis.",
  },
  {
    t: "Escalabilidade",
    d: "O que funciona pode ser ampliado sem reconstruir a operação.",
  },
  {
    t: "Velocidade",
    d: "Da aprovação à primeira oportunidade, o intervalo é de dias.",
  },
  {
    t: "Testes rápidos",
    d: "Hipóteses de oferta e mensagem são validadas em ciclos curtos.",
  },
  {
    t: "Otimização constante",
    d: "A conta é ajustada continuamente com base em desempenho real.",
  },
  {
    t: "Maior retorno",
    d: "Orçamento concentrado onde o custo por cliente é mais baixo.",
  },
  {
    t: "Alcance segmentado",
    d: "Região, comportamento, momento e interesse definem quem vê.",
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
    t: "Planejamento",
    d: "Metas, orçamento e indicadores definidos antes de qualquer criativo ir ao ar.",
  },
  {
    n: "03",
    t: "Estratégia",
    d: "Oferta, mensagem, canais e jornada desenhados para o seu tipo de decisão de compra.",
  },
  {
    n: "04",
    t: "Implementação",
    d: "Site, rastreamento e campanhas entram no ar como um sistema único.",
  },
  {
    n: "05",
    t: "Otimização",
    d: "Leitura semanal de dados, corte do que não performa, reforço do que converte.",
  },
  {
    n: "06",
    t: "Escala",
    d: "Ampliação de investimento apenas sobre o que já provou retorno.",
  },
];

const differentials = [
  {
    t: "Estratégias personalizadas",
    d: "Nenhum projeto herda o plano de outro. O ponto de partida é sempre o seu mercado.",
  },
  {
    t: "Desenvolvimento focado em conversão",
    d: "Cada bloco da página existe para reduzir dúvida e encurtar a decisão.",
  },
  {
    t: "Performance antes de estética",
    d: "Beleza que carrega devagar é prejuízo. Velocidade é requisito, não bônus.",
  },
  {
    t: "Decisões orientadas por dados",
    d: "Opinião abre a discussão. Número encerra.",
  },
  {
    t: "Comunicação transparente",
    d: "Relatórios diretos, sem métricas decorativas e sem vocabulário inflado.",
  },
  {
    t: "Suporte contínuo",
    d: "A entrega marca o início da operação, não o fim da relação.",
  },
  {
    t: "Integração entre site e marketing",
    d: "Mesma equipe, mesma estratégia — sem responsabilidade dividida entre fornecedores.",
  },
  {
    t: "Escalabilidade",
    d: "Estrutura preparada para suportar crescimento sem retrabalho.",
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
            Uma seleção de projetos em que design, engenharia e mídia foram
            construídos como um sistema único — e os números vieram como
            consequência.
          </p>
        </div>
      </section>

      {/* ── Cases ── */}
      <section className="bg-veltor-black text-veltor-white pb-32 md:pb-48">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-px bg-veltor-line-dark border-y border-veltor-line-dark">
            {cases.map((c, i) => (
              <article
                key={c.company}
                data-tilt="3"
                className="reveal-blur veltor-tilt veltor-glow-cursor bg-veltor-black p-8 md:p-14"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                  <div className="lg:col-span-4">
                    <h2 className="veltor-display text-3xl md:text-4xl">
                      {c.company}
                    </h2>
                    <p className="mt-3 text-sm text-veltor-white/50">{c.sector}</p>
                    <ul className="mt-7 flex flex-wrap gap-2">
                      {c.services.map((s) => (
                        <li
                          key={s}
                          className="text-[11px] uppercase tracking-[0.16em] text-veltor-white/60 border border-veltor-line-dark rounded-full px-3 py-1.5"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10 border-t border-veltor-line-dark pt-7">
                      <p className="veltor-display text-4xl md:text-5xl veltor-shimmer-text">
                        {c.metric}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-veltor-white/45">
                        {c.metricLabel}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-veltor-white/40">
                        Objetivo
                      </p>
                      <p className="mt-3 text-sm text-veltor-white/70 leading-relaxed">
                        {c.objective}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-veltor-white/40">
                        Solução
                      </p>
                      <p className="mt-3 text-sm text-veltor-white/70 leading-relaxed">
                        {c.solution}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-veltor-white/40">
                        Resultado
                      </p>
                      <p className="mt-3 text-sm text-veltor-white leading-relaxed">
                        {c.result}
                      </p>
                    </div>
                    <p className="md:col-span-3 border-t border-veltor-line-dark pt-7 text-base md:text-lg text-veltor-white/60 leading-relaxed max-w-3xl">
                      {c.strategy}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── O que é tráfego pago ── */}
      <section className="bg-veltor-white text-veltor-gray py-32 md:py-48">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5 reveal">
            <p className="veltor-eyebrow">Fundamentos</p>
            <h2 className="veltor-display mt-6 text-4xl md:text-6xl">
              Tráfego pago,
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
                procurando o que você vende.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-veltor-tight">
                Como funciona
              </h3>
              <p className="mt-3 text-base md:text-lg text-veltor-muted leading-relaxed">
                Plataformas como Google e Meta organizam intenção e
                comportamento. Definimos quem deve ver, com que mensagem e em
                qual momento; você paga pela entrega e mede o retorno por
                cliente conquistado.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-veltor-tight">
                Por que empresas usam
              </h3>
              <p className="mt-3 text-base md:text-lg text-veltor-muted leading-relaxed">
                Porque substitui expectativa por previsibilidade. É o único
                canal em que se pode decidir, no mesmo dia, quantas
                oportunidades a operação vai receber.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-veltor-tight">
                Quando faz sentido investir
              </h3>
              <p className="mt-3 text-base md:text-lg text-veltor-muted leading-relaxed">
                Quando existe uma oferta clara, margem que suporte aquisição e
                capacidade de atender mais clientes. Sem esses três pontos, o
                investimento antecipa um problema em vez de resolver um.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Site + tráfego ── */}
      <section className="bg-veltor-black text-veltor-white py-32 md:py-48 border-t border-veltor-line-dark">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl reveal">
            <p className="veltor-eyebrow text-veltor-white/50">Integração</p>
            <h2 className="veltor-display mt-6 text-4xl md:text-6xl">
              Infraestrutura e combustível
              <br />
              <span className="text-veltor-white/50">funcionam juntos.</span>
            </h2>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-veltor-line-dark">
            {[
              {
                t: "O site é infraestrutura",
                d: "Ele sustenta a decisão: explica, prova, organiza e recebe. Sem visitantes, é uma sede impecável em uma rua sem movimento.",
              },
              {
                t: "O tráfego é combustível",
                d: "Ele coloca pessoas certas diante da oferta. Sem uma estrutura preparada, é audiência entregue a uma porta fechada.",
              },
              {
                t: "O resultado é a combinação",
                d: "Quando os dois nascem da mesma estratégia, cada real investido em mídia rende mais — e cada visita tem para onde ir.",
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
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.t}
                data-tilt="5"
                className="reveal-blur veltor-tilt veltor-glow-cursor veltor-glow-cursor-light veltor-card-hover bg-[oklch(0.985_0_0)] border border-veltor-line rounded-2xl p-8"
                style={{ transitionDelay: `${i * 70}ms` }}
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

      {/* ── Processo ── */}
      <section className="bg-veltor-black text-veltor-white py-32 md:py-48 border-t border-veltor-line-dark">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl reveal">
            <p className="veltor-eyebrow text-veltor-white/50">Processo</p>
            <h2 className="veltor-display mt-6 text-4xl md:text-6xl">
              Seis etapas,
              <br />
              <span className="text-veltor-white/50">nenhuma improvisada.</span>
            </h2>
          </div>
          <ol className="mt-20 border-t border-veltor-line-dark">
            {process.map((s, i) => (
              <li
                key={s.n}
                className="reveal-blur veltor-glow-cursor border-b border-veltor-line-dark py-9 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-baseline"
                style={{ transitionDelay: `${i * 80}ms` }}
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
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-veltor-line-dark">
            {differentials.map((d, i) => (
              <div
                key={d.t}
                data-tilt="6"
                className="reveal-blur veltor-tilt veltor-glow-cursor veltor-card-hover bg-veltor-black p-9"
                style={{ transitionDelay: `${i * 70}ms` }}
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
              Solicitar diagnóstico estratégico
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
