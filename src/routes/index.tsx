import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import heroGrapes from "@/assets/hero-grapes.jpg";
import historyVineyard from "@/assets/history-vineyard.jpg";
import tableSetting from "@/assets/table-setting.jpg";
import glassRed from "@/assets/glass-red.jpg";
import glassWhite from "@/assets/glass-white.jpg";
import glassRose from "@/assets/glass-rose.jpg";
import glassOrange from "@/assets/glass-orange.jpg";
import careHands from "@/assets/care-hands.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plataforma da Marca — Vem Viver" },
      {
        name: "description",
        content:
          "Uma história construída desde 1992, agora em uma nova fase com sucos integrais de alta qualidade.",
      },
      { property: "og:title", content: "Plataforma da Marca — Vem Viver" },
      {
        property: "og:description",
        content:
          "Princípios, posicionamento e linha inicial da Vem Viver — um documento de marca editorial.",
      },
    ],
  }),
  component: BrandPlatform,
});

/* ---------- Helpers ---------- */

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 1.1s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 1.1s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function SectionHeader({
  number,
  eyebrow,
  title,
}: {
  number: string;
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-6 md:gap-10">
      <span className="chapter-number text-2xl md:text-3xl shrink-0">{number}</span>
      <div className="min-w-0">
        {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
        <h2 className="font-display text-3xl leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <div className="rule-thin" />
    </div>
  );
}

/* ---------- Page ---------- */

const sections = [
  { id: "abertura", num: "I", label: "Abertura" },
  { id: "introducao", num: "II", label: "Introdução" },
  { id: "historia", num: "III", label: "A História" },
  { id: "movimento", num: "IV", label: "O que move" },
  { id: "qualidade", num: "V", label: "Qualidade" },
  { id: "linha", num: "VI", label: "Linha inicial" },
  { id: "proposito", num: "VII", label: "Propósito" },
  { id: "e", num: "VIII", label: "O que é" },
  { id: "nao-e", num: "IX", label: "O que não é" },
  { id: "personalidade", num: "X", label: "Personalidade" },
  { id: "comunicacao", num: "XI", label: "Comunicação" },
  { id: "publico", num: "XII", label: "Para quem" },
  { id: "posicionamento", num: "XIII", label: "Posicionamento" },
  { id: "promessa", num: "XIV", label: "Promessa" },
  { id: "consideracoes", num: "XV", label: "Considerações" },
];

function BrandPlatform() {
  return (
    <div className="bg-background text-foreground antialiased">
      <TopBar />

      {/* ============== HERO ============== */}
      <section
        id="abertura"
        className="relative min-h-[100svh] overflow-hidden border-b border-rule"
      >
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex min-h-[100svh] flex-col justify-between px-6 pt-28 pb-12 md:px-12 lg:px-16 lg:pt-32">
            <Reveal>
              <div className="eyebrow">Plataforma da Marca · 2026</div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-16 lg:mt-0">
                <h1 className="font-display text-[14vw] leading-[0.92] tracking-[-0.02em] text-foreground sm:text-[88px] md:text-[120px] lg:text-[140px]">
                  Vem
                  <br />
                  <span className="italic text-forest-deep">Viver</span>
                </h1>
                <p className="mt-8 max-w-md font-display text-xl italic leading-snug text-mute md:text-2xl">
                  Uma história construída desde 1992, agora em uma nova fase com
                  sucos integrais de alta qualidade.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-16 grid grid-cols-[auto_minmax(0,1fr)] items-end gap-8 border-t border-rule pt-6">
                <div>
                  <div className="eyebrow mb-2">Desde</div>
                  <div className="font-display text-5xl text-forest-deep md:text-6xl">
                    1992
                  </div>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-mute md:text-[15px]">
                  Este documento organiza os princípios que orientam a Vem Viver,
                  sua forma de comunicar, seu posicionamento e os critérios que
                  deverão acompanhar suas decisões daqui para frente.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="relative min-h-[60svh] lg:min-h-[100svh]">
            <img
              src={heroGrapes}
              alt="Composição editorial com uvas e copo de suco de uva tinto"
              width={1600}
              height={1104}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 right-6 text-right">
              <div className="eyebrow text-cream/80">Brand Platform</div>
              <div className="font-display italic text-cream/90">vol. 01</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== INTRODUÇÃO ============== */}
      <section id="introducao" className="py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <SectionHeader number="I" eyebrow="Documento" title="Introdução" />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-16">
            <Reveal delay={100}>
              <p className="font-display text-2xl italic leading-snug text-forest-deep md:col-span-5 md:text-3xl">
                Toda marca nasce de uma história.
              </p>
            </Reveal>

            <div className="space-y-6 text-[16px] leading-[1.75] text-graphite md:col-span-7 md:text-[17px]">
              <Reveal delay={160}>
                <p>
                  Algumas são criadas para atender uma oportunidade de mercado.
                  Outras surgem da continuidade de um trabalho construído ao
                  longo dos anos.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>A Vem Viver faz parte desse segundo grupo.</p>
              </Reveal>
              <Reveal delay={240}>
                <p>
                  Este documento reúne os princípios que orientam a marca, sua
                  forma de comunicar, seu posicionamento e os critérios que
                  deverão acompanhar todas as decisões daqui para frente.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <p>
                  Mais do que definir uma identidade, este material busca
                  preservar um jeito de fazer as coisas. Um jeito construído ao
                  longo de mais de três décadas, baseado em escolhas
                  cuidadosas, respeito pelo produto e compromisso com a
                  confiança de quem leva a marca para casa.
                </p>
              </Reveal>
              <Reveal delay={320}>
                <p>
                  A Vem Viver chega a esta nova fase para oferecer sucos
                  integrais de alta qualidade. Mas, acima de tudo, segue
                  preservando um padrão de cuidado que acompanha sua história
                  desde 1992.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ============== HISTÓRIA ============== */}
      <section id="historia" className="py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <SectionHeader number="II" eyebrow="Capítulo um" title="A História" />
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14 overflow-hidden md:mt-20">
              <img
                src={historyVineyard}
                alt="Vinhedo iluminado por luz dourada do fim de tarde"
                width={1600}
                height={1008}
                loading="lazy"
                className="h-[44svh] w-full object-cover md:h-[60svh]"
              />
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-14 md:mt-20 md:grid-cols-12 md:gap-20">
            <div className="space-y-6 text-[16px] leading-[1.8] text-graphite md:col-span-7 md:text-[17px]">
              <Reveal>
                <p className="font-display text-2xl italic leading-snug text-forest-deep md:text-3xl">
                  A história da Vem Viver começou em 1992.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p>
                  Naquele ano, Luther decidiu deixar a segurança de um emprego
                  para abrir uma pequena casa de sucos naturais em Americana.
                  Muito antes de alimentação saudável se tornar tendência, a
                  proposta já era simples: preparar sucos com frutas de verdade,
                  sem concentrados, valorizando ingredientes naturais e o
                  cuidado em cada preparo.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p>
                  Durante cinco anos, a Vem Viver fez parte da rotina de muitas
                  pessoas. Mais do que um lugar para tomar um suco, tornou-se
                  um espaço conhecido pela qualidade dos produtos, pelo
                  atendimento próximo e pela forma como recebia cada cliente.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p>
                  Com o tempo, novos caminhos surgiram. A casa de sucos deu
                  lugar ao restaurante, que manteve o mesmo nome e a mesma
                  forma de trabalhar: servir bem, utilizar bons ingredientes e
                  reconhecer que qualidade nunca é um detalhe.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  Os anos passaram. Novos negócios foram construídos e Luther
                  passou a atuar também no universo dos vinhos, desenvolvendo
                  um olhar ainda mais apurado para a escolha de produtos e para
                  a importância da confiança em cada relação comercial.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p>
                  Mais de três décadas depois, a Vem Viver inicia um novo
                  capítulo da sua história. O nome permanece o mesmo. O cuidado
                  também. Agora, ele chega ao mercado por meio de uma linha de
                  sucos integrais de alta qualidade, criada para levar às
                  pessoas um produto que represente o mesmo compromisso
                  presente desde o primeiro dia.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <p className="font-display text-xl italic leading-snug text-forest-deep md:text-2xl">
                  A Vem Viver não resgata uma lembrança do passado. Ela dá
                  continuidade a uma história construída ao longo de 34 anos.
                </p>
              </Reveal>
            </div>

            <aside className="md:col-span-5">
              <Reveal delay={100}>
                <div className="eyebrow mb-8">Linha do tempo</div>
                <ol className="space-y-7">
                  {[
                    {
                      year: "1992",
                      title: "Início em Americana",
                      text: "Luther abre uma pequena casa de sucos naturais.",
                    },
                    {
                      year: "5 anos",
                      title: "Casa de sucos",
                      text: "Frutas de verdade, sem concentrados, atendimento próximo.",
                    },
                    {
                      year: "Novo ciclo",
                      title: "Restaurante",
                      text: "Mesmo nome, mesmo padrão de cuidado em outro formato.",
                    },
                    {
                      year: "Anos seguintes",
                      title: "Universo dos vinhos",
                      text: "Um olhar mais apurado para seleção, origem e confiança.",
                    },
                    {
                      year: "Hoje",
                      title: "Sucos integrais",
                      text: "Uma nova fase, com uma linha enxuta e de alta qualidade.",
                    },
                  ].map((row, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[110px_minmax(0,1fr)] gap-6 border-t border-rule pt-5"
                    >
                      <div className="font-display text-lg italic text-olive">
                        {row.year}
                      </div>
                      <div className="min-w-0">
                        <div className="font-display text-xl text-forest-deep">
                          {row.title}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-mute">
                          {row.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <Divider />

      {/* ============== O QUE MOVE ============== */}
      <section id="movimento" className="py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <SectionHeader
              number="III"
              eyebrow="Razão de existir"
              title="O que move a Vem Viver"
            />
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-16 max-w-4xl font-display text-3xl leading-[1.18] text-forest-deep md:mt-24 md:text-5xl">
              A Vem Viver existe para levar à mesa{" "}
              <span className="italic">sucos integrais de alta qualidade,</span>{" "}
              escolhidos com cuidado para fazer parte dos bons momentos da vida.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-12 md:gap-16">
            <Reveal delay={80}>
              <div className="md:col-span-5 md:col-start-2">
                <div className="eyebrow mb-4">Critério</div>
                <p className="text-[16px] leading-[1.8] text-graphite md:text-[17px]">
                  Essa frase resume o motivo pelo qual a marca existe hoje. Ela
                  orienta decisões, define prioridades e estabelece o padrão que
                  deverá acompanhar cada novo passo da Vem Viver.
                </p>
                <p className="mt-6 text-[16px] leading-[1.8] text-graphite md:text-[17px]">
                  Mais do que colocar um produto no mercado, a marca busca
                  oferecer uma escolha segura, construída com critério e
                  respeito por quem está do outro lado.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="md:col-span-5">
                <div className="eyebrow mb-4">Confiança</div>
                <p className="text-[16px] leading-[1.8] text-graphite md:text-[17px]">
                  Cada suco leva o nome Vem Viver porque atende ao padrão de
                  qualidade que a marca decidiu construir. Esse compromisso não
                  termina quando o produto chega à prateleira.
                </p>
                <p className="mt-6 text-[16px] leading-[1.8] text-graphite md:text-[17px]">
                  Ele acompanha toda a relação da marca com seus clientes,
                  parceiros e consumidores. A confiança que a Vem Viver pretende
                  conquistar começa muito antes da primeira compra. Ela nasce na
                  forma como cada escolha é feita.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== PRINCÍPIO DE QUALIDADE (dark) ============== */}
      <section
        id="qualidade"
        className="relative overflow-hidden bg-forest-deep py-32 text-cream md:py-48"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-screen"
          style={{
            backgroundImage: `url(${careHands})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep via-forest-deep/95 to-forest-deep" aria-hidden />

        <div className="relative mx-auto max-w-5xl px-6 md:px-10">
          <Reveal>
            <div
              className="eyebrow"
              style={{ color: "color-mix(in oklch, var(--cream) 60%, transparent)" }}
            >
              · IV · Princípio de Qualidade
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h2 className="mt-12 font-display text-4xl leading-[1.05] text-cream md:mt-16 md:text-7xl lg:text-[88px]">
              O suco que temos{" "}
              <span className="italic text-amber-vv">prazer em servir.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-2 md:gap-16">
            <Reveal delay={120}>
              <p className="text-[16px] leading-[1.85] text-cream/85 md:text-[17px]">
                Esse é um dos princípios que orientam a marca. Mais do que
                escolher um fornecedor ou definir um portfólio, a Vem Viver
                escolhe colocar seu nome apenas em produtos que representam o
                padrão de qualidade que deseja construir.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-[16px] leading-[1.85] text-cream/85 md:text-[17px]">
                Cada novo sabor, cada nova parceria e cada nova decisão devem
                respeitar esse mesmo critério. Porque qualidade não se comunica
                apenas com palavras — ela começa naquilo que a marca decide
                oferecer.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== LINHA INICIAL ============== */}
      <section id="linha" className="py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <SectionHeader
              number="V"
              eyebrow="Curadoria inicial"
              title="O ponto de partida da linha"
            />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-16">
            <Reveal delay={80}>
              <p className="font-display text-2xl italic leading-snug text-forest-deep md:col-span-5 md:text-[28px]">
                Uma linha enxuta, escolhida com critério e coerente com a
                história que sustenta a marca.
              </p>
            </Reveal>
            <div className="space-y-6 text-[16px] leading-[1.8] text-graphite md:col-span-7 md:text-[17px]">
              <Reveal delay={140}>
                <p>
                  A Vem Viver inicia esta nova fase com uma escolha que não é
                  aleatória. A uva ocupa um lugar importante no início da linha
                  porque se conecta diretamente ao repertório construído por
                  Luther ao longo dos anos no universo dos vinhos.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p>
                  Seu olhar para produtos bem escolhidos, sua relação com
                  fornecedores e sua compreensão sobre qualidade, origem e
                  confiança ajudam a orientar a forma como a marca chega ao
                  mercado. Por isso, os sucos de uva não devem ser tratados
                  apenas como sabores dentro de um portfólio. Eles representam
                  o eixo inicial da marca.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p>
                  A laranja complementa essa entrada com um produto familiar,
                  presente na rotina do consumidor brasileiro e capaz de
                  ampliar a presença da Vem Viver em diferentes momentos de
                  consumo.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Produtos */}
          <div className="mt-20 md:mt-28">
            <Reveal>
              <div className="mb-10 flex items-end justify-between border-b border-rule pb-4">
                <div className="eyebrow">O eixo · Uva</div>
                <div className="font-display text-sm italic text-mute">
                  três expressões
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              <ProductCard
                index="01"
                img={glassRed}
                family="Uva"
                name="Tinto Integral"
                note="Estrutura, profundidade e presença à mesa."
                swatch="var(--wine)"
              />
              <ProductCard
                index="02"
                img={glassWhite}
                family="Uva"
                name="Branco Integral"
                note="Frescor delicado, leitura clara, equilíbrio."
                swatch="var(--amber-vv)"
              />
              <ProductCard
                index="03"
                img={glassRose}
                family="Uva"
                name="Rosé Integral"
                note="Suavidade entre o tinto e o branco. Um meio termo elegante."
                swatch="var(--rose-vv)"
              />
            </div>

            {/* Laranja — apresentada como complementar */}
            <Reveal delay={120}>
              <div className="mt-16 grid grid-cols-1 gap-10 border-t border-rule pt-12 md:grid-cols-12 md:gap-14">
                <div className="md:col-span-4">
                  <div className="overflow-hidden">
                    <img
                      src={glassOrange}
                      alt="Copo de suco de laranja integral sobre linho cru"
                      width={1008}
                      height={1312}
                      loading="lazy"
                      className="h-[52svh] w-full object-cover md:h-[60svh]"
                    />
                  </div>
                </div>
                <div className="md:col-span-7 md:col-start-6">
                  <div className="eyebrow mb-3">04 · Complemento</div>
                  <h3 className="font-display text-3xl leading-tight text-forest-deep md:text-5xl">
                    Suco de Laranja Integral
                  </h3>
                  <p className="mt-6 max-w-xl text-[16px] leading-[1.8] text-graphite md:text-[17px]">
                    Familiar, presente na rotina brasileira, a laranja amplia a
                    presença da marca em diferentes momentos de consumo — sem
                    disputar protagonismo com o eixo da uva.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-12 md:gap-16">
                <p className="font-display text-2xl italic leading-snug text-forest-deep md:col-span-6 md:text-3xl">
                  Antes de crescer em quantidade, a marca precisa crescer em
                  confiança.
                </p>
                <p className="text-[16px] leading-[1.8] text-graphite md:col-span-6 md:text-[17px]">
                  A linha inicial traduz a postura da marca: começar com poucos
                  produtos, bem escolhidos, consistentes e capazes de
                  representar o padrão de qualidade que a Vem Viver deseja
                  construir. Cada novo sabor deverá respeitar essa mesma lógica
                  — fazer sentido para a história da marca, atender ao padrão
                  de qualidade esperado e ser um produto que ela tenha prazer
                  em servir.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Divider />

      {/* ============== PROPÓSITO ============== */}
      <section id="proposito" className="py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <SectionHeader number="VI" eyebrow="Direção" title="Propósito" />
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-16 max-w-5xl font-display text-3xl leading-[1.15] text-forest-deep md:mt-20 md:text-5xl">
              Oferecer sucos integrais de alta qualidade que{" "}
              <span className="italic">mereçam fazer parte</span> da rotina, da
              mesa e dos bons momentos das pessoas.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-16">
            <div className="space-y-6 text-[16px] leading-[1.8] text-graphite md:col-span-6 md:col-start-7 md:text-[17px]">
              <Reveal>
                <p>
                  Bons produtos conquistam espaço na vida das pessoas pela
                  constância, e não pelo exagero. Por isso, a Vem Viver não
                  busca ser a marca que mais chama atenção, mas a marca que as
                  pessoas escolhem novamente.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p>
                  Cada decisão deve reforçar esse compromisso. Do
                  desenvolvimento dos produtos à comunicação, da escolha dos
                  parceiros à forma de atender, tudo deve contribuir para
                  construir uma marca reconhecida pela confiança que transmite.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p className="font-display text-xl italic text-forest-deep md:text-2xl">
                  Esse propósito não determina apenas o que a Vem Viver faz.
                  Ele orienta como a marca escolhe fazer.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============== O QUE É / NÃO É ============== */}
      <section id="e" className="border-y border-rule bg-bone py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <SectionHeader number="VII" eyebrow="Identidade" title="O que a Vem Viver é" />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-14 md:mt-20 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <div className="space-y-6 text-[16px] leading-[1.8] text-graphite md:text-[17px]">
                <Reveal>
                  <p className="font-display text-2xl italic text-forest-deep md:text-3xl">
                    Uma marca construída sobre uma história real.
                  </p>
                </Reveal>
                <Reveal delay={80}>
                  <p>
                    É uma marca que entende que confiança não se conquista com
                    uma única compra, mas com a repetição de boas escolhas ao
                    longo do tempo. Valoriza produtos bem feitos, relações
                    duradouras e a responsabilidade de colocar seu nome em tudo
                    aquilo que oferece.
                  </p>
                </Reveal>
                <Reveal delay={140}>
                  <p>
                    Não procura impressionar pelo excesso. Prefere transmitir
                    segurança pela consistência. Seu compromisso é fazer com
                    que cada consumidor encontre exatamente aquilo que espera
                    encontrar ao escolher a marca.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <p>
                    A qualidade não precisa ser anunciada o tempo todo. Ela
                    deve ser percebida no produto, na embalagem, na comunicação
                    e em cada ponto de contato com a marca. Mais do que vender
                    sucos integrais, a Vem Viver deseja construir uma relação
                    de confiança com quem escolhe levá-la para casa.
                  </p>
                </Reveal>
              </div>
            </div>

            <Reveal delay={120}>
              <div className="md:col-span-5">
                <div className="overflow-hidden">
                  <img
                    src={tableSetting}
                    alt="Mesa posta com taças de suco de uva tinto, branco, rosé e laranja"
                    width={1600}
                    height={1104}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <p className="mt-4 font-display text-sm italic text-mute">
                  Mesa. Cuidado. Escolha. Os elementos que sustentam a marca.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="nao-e" className="py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <SectionHeader
              number="VIII"
              eyebrow="Limites claros"
              title="O que a Vem Viver não é"
            />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule md:mt-20 md:grid-cols-2">
            {[
              "Não faz promessas que não possam ser percebidas na prática.",
              "Não utiliza saúde como argumento para vender.",
              "Não transforma simplicidade em discurso.",
              "Não procura chamar atenção pelo excesso.",
              "Não acompanha tendências apenas porque estão em evidência.",
              "Não busca ser a opção mais barata da prateleira.",
              "Também não pretende parecer inacessível.",
              "Não confunde cuidado com excesso de palavras.",
            ].map((line, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="flex h-full items-start gap-5 bg-background p-8 md:p-10">
                  <span className="chapter-number shrink-0 text-base md:text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="min-w-0 font-display text-xl leading-snug text-forest-deep md:text-2xl">
                    {line}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
              <p className="text-[16px] leading-[1.8] text-graphite md:col-span-7 md:col-start-3 md:text-[17px]">
                Seu compromisso é oferecer um produto que represente qualidade,
                equilíbrio e confiança. Toda decisão deve fortalecer esses
                princípios. Sempre que uma escolha colocar essa coerência em
                risco, ela deixa de fazer sentido para a marca.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* ============== PERSONALIDADE ============== */}
      <section id="personalidade" className="py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <SectionHeader
              number="IX"
              eyebrow="Tom e presença"
              title="Personalidade da Marca"
            />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <div className="space-y-6 text-[16px] leading-[1.8] text-graphite md:text-[17px]">
                <Reveal>
                  <p className="font-display text-2xl italic text-forest-deep md:text-3xl">
                    Segura, próxima e criteriosa.
                  </p>
                </Reveal>
                <Reveal delay={80}>
                  <p>
                    Sua presença deve transmitir tranquilidade, sem perder
                    força. A marca não precisa exagerar para ser percebida, nem
                    recorrer a discursos grandiosos para comunicar qualidade.
                    A confiança deve ser construída pela consistência: na
                    escolha dos produtos, na apresentação da marca, na forma de
                    comunicar e na relação com consumidores e parceiros.
                  </p>
                </Reveal>
                <Reveal delay={140}>
                  <p>
                    A marca prefere mostrar a prometer. Por isso, sua
                    comunicação deve ser clara, respeitosa e objetiva, evitando
                    exageros, frases promocionais, modismos e argumentos que
                    não possam ser percebidos na prática.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <p>
                    A personalidade da Vem Viver deve reforçar uma percepção
                    central: esta é uma marca bem conduzida, que sabe o que
                    oferece, escolhe com critério e respeita a confiança de
                    quem compra, revende ou serve seus produtos. Mais do que
                    chamar atenção rapidamente, deve construir familiaridade,
                    preferência e recorrência ao longo do tempo.
                  </p>
                </Reveal>
              </div>
            </div>

            <aside className="md:col-span-5">
              <Reveal delay={100}>
                <div className="eyebrow mb-6">Equilíbrios</div>
                <ul className="divide-y divide-rule border-y border-rule">
                  {[
                    ["Próxima,", "nunca informal em excesso."],
                    ["Segura,", "sem parecer distante."],
                    ["Elegante,", "sem parecer sofisticada demais."],
                    ["Simples,", "sem parecer comum."],
                    ["Cuidadosa,", "sem transformar cuidado em discurso."],
                  ].map(([a, b], i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-4 py-5"
                    >
                      <span className="font-display text-xl italic text-forest-deep md:text-2xl">
                        {a}
                      </span>
                      <span className="text-sm text-mute md:text-[15px]">{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* ============== COMUNICAÇÃO ============== */}
      <section id="comunicacao" className="bg-bone py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <SectionHeader
              number="X"
              eyebrow="Forma de falar"
              title="Como a Vem Viver se comunica"
            />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-16">
            <div className="space-y-6 text-[16px] leading-[1.8] text-graphite md:col-span-7 md:text-[17px]">
              <Reveal>
                <p>
                  A forma de comunicar deve refletir o mesmo cuidado presente
                  no produto. A Vem Viver fala de maneira simples, clara e
                  respeitosa. Não utiliza exageros, promessas ou expressões que
                  criem expectativas irreais.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p>
                  Sua comunicação valoriza informações objetivas, histórias
                  verdadeiras e conteúdos que ajudem as pessoas a conhecer
                  melhor a marca e seus produtos. O tom de voz é próximo, mas
                  equilibrado.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p>
                  A marca conversa com consumidores, mercados, empórios,
                  restaurantes e parceiros comerciais da mesma forma: com
                  transparência, cordialidade e segurança. Cada mensagem deve
                  reforçar a confiança construída pela marca.
                </p>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="md:col-span-5">
                <div className="border border-rule bg-background p-8 md:p-10">
                  <div className="eyebrow mb-6">Antes de publicar</div>
                  <ul className="space-y-6">
                    {[
                      "Este conteúdo fortalece a confiança na marca?",
                      "Essa comunicação representa a forma como a Vem Viver gostaria de ser lembrada?",
                    ].map((q, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="mt-2 h-px w-6 shrink-0 bg-forest-deep" />
                        <p className="font-display text-lg italic text-forest-deep md:text-xl">
                          {q}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 border-t border-rule pt-6 text-sm leading-relaxed text-mute">
                    Se a resposta for negativa, o conteúdo deve ser revisto.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== PÚBLICO ============== */}
      <section id="publico" className="py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <SectionHeader
              number="XI"
              eyebrow="Relações"
              title="Para quem fazemos isso"
            />
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-12 max-w-3xl text-[16px] leading-[1.8] text-graphite md:text-[17px]">
              A Vem Viver foi construída para atender pessoas e empresas que
              valorizam produtos bem escolhidos.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
            <Reveal>
              <article className="flex h-full flex-col bg-background p-10 md:p-14">
                <div className="eyebrow mb-6">01 · Consumidor Final</div>
                <h3 className="font-display text-3xl leading-tight text-forest-deep md:text-4xl">
                  Quem leva para casa.
                </h3>
                <p className="mt-8 text-[16px] leading-[1.8] text-graphite md:text-[17px]">
                  A marca conversa com quem procura um suco integral de alta
                  qualidade para fazer parte da rotina, compartilhar à mesa ou
                  servir em momentos especiais. São pessoas que valorizam
                  sabor, qualidade e a confiança de saber exatamente o que
                  estão levando para casa.
                </p>
              </article>
            </Reveal>
            <Reveal delay={120}>
              <article className="flex h-full flex-col bg-background p-10 md:p-14">
                <div className="eyebrow mb-6">02 · Parceiros Comerciais</div>
                <h3 className="font-display text-3xl leading-tight text-forest-deep md:text-4xl">
                  Quem escolhe servir.
                </h3>
                <p className="mt-8 text-[16px] leading-[1.8] text-graphite md:text-[17px]">
                  Mercados, empórios, restaurantes, cafés, hotéis, buffets e
                  outros estabelecimentos encontram na Vem Viver um produto
                  desenvolvido para representar bem seus próprios negócios.
                  Quando um parceiro decide oferecer a marca, também coloca sua
                  reputação em jogo — por isso, conquistar essa confiança é tão
                  importante quanto conquistar a do consumidor final.
                </p>
              </article>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <p className="mx-auto mt-16 max-w-3xl text-center font-display text-2xl italic leading-snug text-forest-deep md:mt-20 md:text-3xl">
              Independentemente do canal, o compromisso permanece o mesmo:
              oferecer um produto que mereça ser escolhido e servido com
              tranquilidade.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============== POSICIONAMENTO ============== */}
      <section
        id="posicionamento"
        className="relative overflow-hidden bg-forest-deep py-32 text-cream md:py-44"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <div
              className="eyebrow"
              style={{ color: "color-mix(in oklch, var(--cream) 60%, transparent)" }}
            >
              · XII · Posicionamento
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-16 md:mt-20 md:grid-cols-12 md:gap-16">
            <Reveal delay={100}>
              <h2 className="font-display text-4xl leading-[1.05] text-cream md:col-span-7 md:text-6xl lg:text-7xl">
                Entre o popular e o exclusivo, a Vem Viver constrói{" "}
                <span className="italic text-amber-vv">um espaço próprio.</span>
              </h2>
            </Reveal>

            <div className="space-y-6 text-[16px] leading-[1.85] text-cream/85 md:col-span-5 md:text-[17px]">
              <Reveal delay={140}>
                <p>
                  Não busca competir pelo menor preço, nem construir uma
                  percepção de exclusividade. Seu posicionamento está na
                  confiança que transmite e na qualidade que entrega de forma
                  consistente.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p>
                  É uma marca feita para quem entende que bons produtos não
                  precisam exagerar para demonstrar seu valor. Enquanto muitas
                  marcas procuram chamar atenção pela comunicação ou pela
                  embalagem, a Vem Viver prefere construir reconhecimento pela
                  constância.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="font-display text-xl italic text-amber-vv md:text-2xl">
                  Seu objetivo não é ser a escolha impulsiva da prateleira. É
                  ser a escolha segura, escolhida com critério.
                </p>
              </Reveal>
            </div>
          </div>

          {/* eixo visual */}
          <Reveal delay={200}>
            <div className="mt-20 border-t border-cream/15 pt-10 md:mt-28">
              <div className="grid grid-cols-3 items-end gap-4">
                <div>
                  <div className="eyebrow text-cream/60">Popular</div>
                  <div className="mt-3 h-px bg-cream/25" />
                </div>
                <div className="text-center">
                  <div className="eyebrow text-amber-vv">Vem Viver</div>
                  <div className="mt-3 h-[3px] bg-amber-vv" />
                  <div className="mt-3 font-display text-sm italic text-cream/70">
                    confiança, qualidade, constância
                  </div>
                </div>
                <div className="text-right">
                  <div className="eyebrow text-cream/60">Alto valor</div>
                  <div className="mt-3 h-px bg-cream/25" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== PROMESSA ============== */}
      <section id="promessa" className="py-28 md:py-44">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <SectionHeader
              number="XIII"
              eyebrow="O compromisso"
              title="Promessa da Marca"
            />
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-16 max-w-5xl font-display text-3xl leading-[1.15] text-forest-deep md:mt-20 md:text-5xl lg:text-[56px]">
              Entregar sucos integrais de alta qualidade, escolhidos com
              critério e preparados para serem{" "}
              <span className="italic">servidos com confiança.</span>
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-16">
            <div className="space-y-6 text-[16px] leading-[1.8] text-graphite md:col-span-7 md:col-start-6 md:text-[17px]">
              <Reveal>
                <p>
                  Essa promessa começa na escolha dos produtos. Cada sabor que
                  leva o nome Vem Viver precisa representar o padrão de
                  qualidade que a marca deseja construir. Não basta fazer parte
                  de uma categoria. Não basta parecer natural. Não basta ocupar
                  espaço na prateleira. Precisa ser um produto que a marca
                  tenha prazer em servir.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p>
                  A Vem Viver sabe que confiança não se conquista apenas com
                  uma boa apresentação. Ela se constrói na experiência: no
                  sabor, na consistência, na forma como o produto chega à mesa
                  e na segurança de quem decide comprá-lo, revendê-lo ou
                  oferecê-lo a alguém.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p>
                  Por isso, a promessa da marca não está em dizer mais do que o
                  produto entrega. Está em entregar, com constância, aquilo que
                  a marca escolheu colocar em seu nome: qualidade, cuidado e
                  respeito por quem consome e por quem serve.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="font-display text-xl italic text-forest-deep md:text-2xl">
                  Mais do que conquistar uma venda, a Vem Viver busca construir
                  uma relação de confiança.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ============== CONSIDERAÇÕES ============== */}
      <section id="consideracoes" className="py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <SectionHeader
              number="XIV"
              eyebrow="Encerramento do documento"
              title="Considerações Finais"
            />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-16">
            <div className="space-y-6 text-[16px] leading-[1.8] text-graphite md:col-span-7 md:text-[17px]">
              <Reveal>
                <p>
                  A Vem Viver inicia um novo capítulo da sua história levando
                  consigo os princípios que sempre fizeram parte da sua
                  trajetória. Mais do que lançar uma linha de sucos integrais,
                  a marca estabelece um compromisso com a forma como pretende
                  crescer nos próximos anos.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p>
                  Cada novo produto, cada parceria e cada decisão deverão
                  fortalecer a confiança construída desde o início dessa
                  história. Este documento não encerra a construção da marca.
                  Ele estabelece os princípios que deverão orientar sua
                  evolução.
                </p>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <ul className="space-y-4 border-l border-rule pl-8 md:col-span-5">
                {[
                  "As ferramentas visuais poderão evoluir.",
                  "Os produtos poderão crescer.",
                  "Novos canais poderão surgir.",
                ].map((t, i) => (
                  <li
                    key={i}
                    className="font-display text-xl italic text-forest-deep md:text-2xl"
                  >
                    {t}
                  </li>
                ))}
                <li className="pt-4 text-sm leading-relaxed text-mute">
                  O que não muda é a responsabilidade de manter o mesmo cuidado
                  em cada escolha. Porque a confiança que a Vem Viver deseja
                  construir começa muito antes da primeira compra. Ela começa
                  na decisão de colocar seu nome apenas naquilo que realmente
                  merece fazer parte da vida das pessoas.
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== ENCERRAMENTO ============== */}
      <section className="relative overflow-hidden bg-forest-deep text-cream">
        <div className="mx-auto flex min-h-[80svh] max-w-6xl flex-col items-center justify-center px-6 py-32 text-center md:px-10 md:py-48">
          <Reveal>
            <div
              className="eyebrow"
              style={{ color: "color-mix(in oklch, var(--cream) 55%, transparent)" }}
            >
              Plataforma da Marca · 1992 — 2026
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-10 font-display text-[20vw] leading-[0.9] tracking-[-0.02em] text-cream sm:text-[140px] md:text-[200px]">
              Vem <span className="italic text-amber-vv">Viver</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-10 max-w-xl font-display text-xl italic leading-snug text-cream/80 md:text-2xl">
              Uma história de cuidado, agora em uma nova fase.
            </p>
          </Reveal>
        </div>
        <div className="border-t border-cream/15">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 text-xs text-cream/60 md:flex-row md:items-center md:px-10">
            <span className="tracking-[0.18em] uppercase">
              Vem Viver · Plataforma da Marca
            </span>
            <span className="font-display italic">
              Americana · Brasil · desde 1992
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Sub-components ---------- */

function TopBar() {
  const [active, setActive] = useState("abertura");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const current = sections.find((s) => s.id === active) ?? sections[0];

  return (
    <header className="sticky top-0 z-50 border-b border-rule/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 py-4 md:px-10">
        <a
          href="#abertura"
          className="flex min-w-0 items-baseline gap-3 no-underline"
        >
          <span className="font-display text-xl text-forest-deep md:text-2xl">
            Vem <span className="italic">Viver</span>
          </span>
          <span className="hidden text-xs tracking-[0.22em] text-mute uppercase sm:inline">
            · Plataforma da Marca
          </span>
        </a>
        <div className="flex items-center gap-4 text-xs">
          <span className="hidden font-display italic text-mute md:inline">
            {current.num}
          </span>
          <span className="tracking-[0.22em] uppercase text-graphite">
            {current.label}
          </span>
        </div>
      </div>
    </header>
  );
}

function ProductCard({
  index,
  img,
  family,
  name,
  note,
  swatch,
}: {
  index: string;
  img: string;
  family: string;
  name: string;
  note: string;
  swatch: string;
}) {
  return (
    <Reveal>
      <article className="group flex h-full flex-col">
        <div className="relative overflow-hidden">
          <img
            src={img}
            alt={`${family} ${name}`}
            width={1008}
            height={1312}
            loading="lazy"
            className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute left-4 top-4 flex items-center gap-3">
            <span
              className="h-2.5 w-2.5 rounded-full ring-1 ring-cream/60"
              style={{ background: swatch }}
              aria-hidden
            />
            <span className="eyebrow text-cream/90">{index}</span>
          </div>
        </div>
        <div className="mt-6 border-t border-rule pt-5">
          <div className="eyebrow mb-2">{family} · Integral</div>
          <h3 className="font-display text-2xl leading-tight text-forest-deep md:text-3xl">
            {name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-mute">{note}</p>
        </div>
      </article>
    </Reveal>
  );
}
