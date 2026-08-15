import Image from "next/image";

const instagramUrl = "https://www.instagram.com/mikiiwigs";

const portfolio = [
  {
    src: "/portfolio/pink-waves.jpeg",
    alt: "Peluca rosa con ondas y capas estilizada por MikiiWigs",
    label: "Ondas + volumen",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/portfolio/teal-ears.jpeg",
    alt: "Peluca verde azulado con orejas y fleco estilizada por MikiiWigs",
    label: "Detalles de personaje",
    className: "",
  },
  {
    src: "/portfolio/purple-short.jpeg",
    alt: "Peluca morada corta con capas estilizada por MikiiWigs",
    label: "Capas definidas",
    className: "",
  },
  {
    src: "/portfolio/blonde-curls.jpeg",
    alt: "Peluca rubia corta con rizos decorativos estilizada por MikiiWigs",
    label: "Formas especiales",
    className: "md:col-span-2",
  },
  {
    src: "/portfolio/coral-layers.jpeg",
    alt: "Peluca coral larga con capas frontales estilizada por MikiiWigs",
    label: "Face framing",
    className: "",
  },
  {
    src: "/portfolio/auburn-long.jpeg",
    alt: "Peluca castaña rojiza larga estilizada por MikiiWigs",
    label: "Silueta y caída",
    className: "",
  },
  {
    src: "/portfolio/blonde-twin-tails.jpeg",
    alt: "Peluca rubia con coletas largas estilizada por MikiiWigs",
    label: "Coletas",
    className: "md:col-span-2",
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0a10] text-[#f5f1e9]">
      <a
        href="#contenido"
        className="sr-only z-[100] rounded-full bg-white px-5 py-3 text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Ir al contenido
      </a>

      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="MikiiWigs, inicio">
            <span className="grid size-10 place-items-center rounded-full border border-white/20 bg-white/[0.06] font-mono text-sm text-[#c9b9ff] transition group-hover:border-[#c9b9ff]">
              MW
            </span>
            <span className="text-sm font-bold tracking-[0.18em]">MIKIIWIGS</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex" aria-label="Navegación principal">
            <a className="transition hover:text-white" href="#servicios">Servicios</a>
            <a className="transition hover:text-white" href="#trabajos">Trabajos</a>
            <a className="transition hover:text-white" href="#proceso">Proceso</a>
          </nav>

          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition hover:border-[#c9b9ff] hover:bg-[#c9b9ff] hover:text-[#15111d]"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Instagram <Arrow />
          </a>
        </div>
      </header>

      <section id="inicio" className="hero-grid relative flex min-h-[880px] items-center pt-28 lg:min-h-screen">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />

        <div id="contenido" className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-8 lg:px-12 lg:pb-24 lg:pt-28">
          <div className="max-w-2xl">
            <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[#c9b9ff] sm:text-sm">
              <span className="h-px w-10 bg-[#c9b9ff]" />
              Wig styling · Mérida, Yucatán
            </p>

            <h1 className="text-balance text-[clamp(4.3rem,9.5vw,9.4rem)] font-black leading-[0.78] tracking-[-0.085em]">
              Tu personaje.
              <span className="mt-4 block font-serif font-normal italic tracking-[-0.06em] text-[#c9b9ff]">Tu estilo.</span>
            </h1>

            <p className="mt-9 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl">
              Estilado de pelucas para cosplay, sesiones y looks inspirados en tus personajes favoritos. Cada comisión se trabaja a partir de tu referencia.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#f5f1e9] px-7 font-bold text-[#0b0a10] transition hover:-translate-y-0.5 hover:bg-[#c9b9ff]"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Cotiza por Instagram <Arrow />
              </a>
              <a
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-7 font-semibold transition hover:border-white/60 hover:bg-white/[0.05]"
                href="#trabajos"
              >
                Ver trabajos
              </a>
            </div>

            <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-white/40">
              Cotización sin compromiso · Atención por DM
            </p>
          </div>

          <div className="relative mx-auto h-[540px] w-full max-w-[680px] sm:h-[680px] lg:h-[720px]">
            <div className="absolute left-[2%] top-[17%] h-[54%] w-[38%] -rotate-6 overflow-hidden rounded-[2.2rem] border border-white/15 bg-white/5 shadow-2xl shadow-black/50 sm:left-[4%]">
              <Image
                src="/portfolio/pink-waves.jpeg"
                alt="Peluca rosa ondulada trabajada por MikiiWigs"
                fill
                priority
                sizes="(max-width: 768px) 38vw, 280px"
                className="object-cover"
              />
            </div>
            <div className="absolute right-[4%] top-0 h-[69%] w-[56%] rotate-3 overflow-hidden rounded-[2.8rem] border border-white/15 bg-white/5 shadow-2xl shadow-black/50">
              <Image
                src="/portfolio/blonde-long.jpeg"
                alt="Peluca rubia larga con estilizado frontal trabajada por MikiiWigs"
                fill
                priority
                sizes="(max-width: 768px) 56vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-[2%] left-[27%] h-[42%] w-[44%] -rotate-2 overflow-hidden rounded-[2.2rem] border border-white/15 bg-white/5 shadow-2xl shadow-black/50">
              <Image
                src="/portfolio/teal-ears.jpeg"
                alt="Peluca verde azulado con detalles de personaje trabajada por MikiiWigs"
                fill
                sizes="(max-width: 768px) 44vw, 310px"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-[11%] right-[3%] rounded-full bg-[#c9b9ff] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.13em] text-[#15111d] shadow-xl shadow-black/30 sm:right-[6%]">
              hecho a mano ✦
            </div>
            <div className="absolute right-[2%] top-[7%] grid size-20 place-items-center rounded-full border border-dashed border-white/35 font-serif text-4xl text-[#f5d08a] sm:-right-[2%] sm:size-24">
              み
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="relative bg-[#f2eee7] px-5 py-24 text-[#17131d] sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-8 border-b border-black/15 pb-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="section-kicker text-[#6851c8]">Servicios / サービス</p>
              <h2 className="mt-4 max-w-3xl text-balance text-5xl font-black leading-[0.93] tracking-[-0.055em] sm:text-7xl">
                De peluca base a look de personaje.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-black/60 lg:justify-self-end">
              Trabajo cada pieza de acuerdo con su complejidad, material y referencia. Si todavía no tienes todos los detalles, también podemos aterrizar la idea por DM.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 lg:grid-cols-3">
            {[
              ["01", "Estilado completo", "Corte, capas, fleco, forma, volumen y acabados para acercar la peluca a tu referencia."],
              ["02", "Detalles de personaje", "Coletas, mechones, rizos, ahoges y siluetas especiales que hacen reconocible el look."],
              ["03", "Reestilado", "Ajustes y una nueva dirección para pelucas que ya tienes, dependiendo de su estado y material."],
            ].map(([number, title, copy]) => (
              <article key={number} className="group min-h-[350px] bg-[#f2eee7] p-8 transition hover:bg-[#e9e1ff] sm:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-black/40">[{number}]</span>
                  <span className="grid size-11 place-items-center rounded-full border border-black/15 text-xl transition group-hover:rotate-45 group-hover:bg-[#17131d] group-hover:text-white">✦</span>
                </div>
                <h3 className="mt-20 text-3xl font-bold tracking-[-0.035em]">{title}</h3>
                <p className="mt-4 max-w-sm leading-relaxed text-black/55">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trabajos" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker text-[#c9b9ff]">Portafolio / Selected work</p>
              <h2 className="mt-4 max-w-4xl text-balance text-5xl font-black leading-[0.93] tracking-[-0.055em] sm:text-7xl">
                Cada mechón cuenta una historia.
              </h2>
            </div>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 border-b border-[#c9b9ff] pb-2 font-semibold text-[#c9b9ff]"
            >
              Más trabajos en Instagram <Arrow />
            </a>
          </div>

          <div className="mt-14 grid auto-rows-[330px] gap-4 md:grid-cols-4 md:auto-rows-[290px]">
            {portfolio.map((item) => (
              <figure key={item.src} className={`group relative overflow-hidden rounded-[1.6rem] bg-white/5 ${item.className}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/25 to-transparent p-5 pt-20">
                  <figcaption className="font-mono text-xs uppercase tracking-[0.14em] text-white/85">{item.label}</figcaption>
                  <span className="text-[#c9b9ff]" aria-hidden="true">✦</span>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="bg-[#c9b9ff] px-5 py-24 text-[#17131d] sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="section-kicker text-[#4c348f]">Cómo funciona / 3 pasos</p>
              <h2 className="mt-4 text-balance text-5xl font-black leading-[0.93] tracking-[-0.055em] sm:text-7xl">
                De la referencia a la realidad.
              </h2>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-black/60">
                Una cotización clara empieza con una buena referencia. Entre más información compartas, más precisa puede ser la propuesta.
              </p>
            </div>

            <ol className="border-t border-black/20">
              {[
                ["01", "Manda tu idea", "Escribe por Instagram con el personaje, imágenes de referencia, fecha en la que lo necesitas y fotos de la peluca si ya la tienes."],
                ["02", "Recibe tu cotización", "Se revisan la complejidad, los detalles y los materiales para darte una cotización sin compromiso."],
                ["03", "Comienza la transformación", "Al confirmar tu comisión se coordinan tiempos, avances y la entrega en Mérida, Yucatán."],
              ].map(([number, title, copy]) => (
                <li key={number} className="grid gap-4 border-b border-black/20 py-8 sm:grid-cols-[70px_1fr] sm:gap-8">
                  <span className="font-mono text-sm text-black/45">{number}</span>
                  <div>
                    <h3 className="text-2xl font-bold tracking-[-0.03em] sm:text-3xl">{title}</h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-black/60">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="relative isolate px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="cta-noise absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#f5d08a] sm:text-sm">Comisiones abiertas según disponibilidad</p>
          <h2 className="mx-auto mt-7 max-w-5xl text-balance text-[clamp(3.4rem,8vw,7.7rem)] font-black leading-[0.85] tracking-[-0.07em]">
            ¿Listx para darle vida a tu personaje?
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/60">
            Cuéntame tu idea por DM. Las cotizaciones son sin compromiso y se realizan de forma personalizada.
          </p>
          <a
            className="mx-auto mt-10 inline-flex min-h-16 items-center justify-center gap-3 rounded-full bg-[#f5f1e9] px-9 text-lg font-bold text-[#0b0a10] transition hover:-translate-y-1 hover:bg-[#c9b9ff]"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Escribir a @mikiiwigs <Arrow />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MikiiWigs · Wig styling</p>
          <p>Mérida, Yucatán · México</p>
          <a className="font-semibold text-white transition hover:text-[#c9b9ff]" href={instagramUrl} target="_blank" rel="noreferrer">
            @mikiiwigs ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
