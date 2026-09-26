const projects = [
  {
    number: "01",
    name: "MyAlodo",
    category: "Plateforme digitale",
    services: "Design • Développement",
    url: "https://www.myalodo.com/",
  },
  {
    number: "02",
    name: "Pure Raw Hair",
    category: "E-commerce",
    services: "Design • Développement",
    url: "https://purerawhair.fr/",
  },
  {
    number: "03",
    name: "Derou",
    category: "Site institutionnel",
    services: "Design • Développement",
    url: "https://www.derou.tg/",
  },
  {
    number: "04",
    name: "Confortis",
    category: "Site institutionnel",
    services: "Design • Développement",
    url: "https://www.confortis.tg/",
  },
  {
    number: "05",
    name: "Ibiza Club",
    category: "Événementiel",
    services: "Design • Développement",
    url: "https://ibizaclub.fr/",
  },
  {
    number: "06",
    name: "Independant Studio",
    category: "Portfolio créatif",
    services: "Design • Développement",
    url: "https://independantstudio.fr/",
  },
  {
    number: "07",
    name: "The Watch Box Co.",
    category: "E-commerce",
    services: "Design • Développement",
    url: "https://thewatchboxco.com.au/",
  },
  {
    number: "08",
    name: "Kazart",
    category: "Portfolio",
    services: "Design • Développement",
    url: "https://kazart.vercel.app/",
  },
  {
    number: "09",
    name: "DevOp360",
    category: "Site professionnel",
    services: "Design • Développement",
    url: "https://devop360-neon.vercel.app/",
  },
  {
    number: "10",
    name: "Prolab Afrik",
    category: "Plateforme digitale",
    services: "Design • Développement",
    url: "https://prolabafrik.com/",
  },
];

function ProjectVisual({
  number,
}: {
  number: string;
}) {
  return (
    <div className="group/visual relative h-full min-h-[220px] overflow-hidden rounded-sm bg-[#F1F1EE]">

      {/* Glow orange principal */}
      <div
        className="
          absolute
          -right-20
          -top-20
          h-72
          w-72
          rounded-full
          bg-[#F4512A]
          opacity-15
          blur-[80px]
          transition-all
          duration-700
          group-hover/visual:scale-125
          group-hover/visual:opacity-25
        "
      />

      {/* Deuxième glow */}
      <div
        className="
          absolute
          -bottom-32
          -left-20
          h-64
          w-64
          rounded-full
          bg-[#F4512A]
          opacity-10
          blur-[90px]
          transition-all
          duration-700
          group-hover/visual:translate-x-10
        "
      />

      {/* Grille */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,.7) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(0,0,0,.7) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Cercle extérieur */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-32
          w-32
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#F4512A]/40
          transition-all
          duration-700
          group-hover/visual:h-44
          group-hover/visual:w-44
        "
      />

      {/* Cercle intérieur */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-20
          w-20
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#F4512A]/20
        "
      />

      {/* Petit point central */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-2
          w-2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#F4512A]
          transition-all
          duration-500
          group-hover/visual:h-3
          group-hover/visual:w-3
        "
      />

      {/* Numéro géant */}
      <div className="absolute bottom-4 left-6">
        <span
          className="
            text-7xl
            font-light
            tracking-[-0.08em]
            text-[#F4512A]/20
            transition-all
            duration-500
            group-hover/visual:tracking-[-0.02em]
          "
        >
          {number}
        </span>
      </div>

      {/* Label central */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.4em]
            text-[#F4512A]/70
          "
        >
          Digital experience
        </span>
      </div>

    </div>
  );
}

export default function Projects() {
  return (
    <section className="w-full px-6 py-32 md:px-10 lg:px-16">

      {/* ========================================= */}
      {/* HEADER */}
      {/* ========================================= */}

      <div className="mx-auto mb-24 max-w-7xl">

        {/* Petit label */}
        <div className="mb-6 flex items-center gap-4">

          <span className="h-px w-10 bg-[#F4512A]" />

          <span
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#F4512A]
            "
          >
            Réalisations
          </span>

        </div>

        {/* Titre + description */}
        <div
          className="
            flex
            flex-col
            justify-between
            gap-8
            md:flex-row
            md:items-end
          "
        >

          {/* TITRE */}
          <h2
            className="
              max-w-3xl
              text-4xl
              font-semibold
              leading-[1.05]
              tracking-tight
              text-[#171717]
              md:text-6xl
              lg:text-7xl
            "
          >
            Des expériences
            <br />

            <span className="text-[#F4512A]">
              digitales remarquables.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              max-w-sm
              text-sm
              leading-7
              text-[#737373]
            "
          >
            Une sélection de projets imaginés et développés avec une attention
            particulière portée au design, à l&apos;expérience et aux détails.
          </p>

        </div>
      </div>


      {/* ========================================= */}
      {/* PROJECTS */}
      {/* ========================================= */}

      <div className="mx-auto max-w-7xl">

        {projects.map((project) => (

          <a
            key={project.number}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              block
              border-t
              border-black/10
              py-10
              transition-colors
              duration-300
              hover:border-[#F4512A]/30
              md:py-14
            "
          >

            <div
              className="
                grid
                gap-8
                md:grid-cols-[70px_260px_1fr_120px]
                md:items-center
              "
            >

              {/* ================================= */}
              {/* NUMERO */}
              {/* ================================= */}

              <div>

                <span
                  className="
                    text-sm
                    text-black/30
                    transition-colors
                    duration-300
                    group-hover:text-[#F4512A]
                  "
                >
                  {project.number}
                </span>

              </div>


              {/* ================================= */}
              {/* NOM DU PROJET */}
              {/* ================================= */}

              <div>

                <h3
                  className="
                    text-2xl
                    font-medium
                    tracking-tight
                    text-[#171717]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    md:text-3xl
                  "
                >
                  {project.name}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-[#737373]
                  "
                >
                  {project.category}
                </p>

              </div>


              {/* ================================= */}
              {/* VISUEL */}
              {/* ================================= */}

              <ProjectVisual
                number={project.number}
              />


              {/* ================================= */}
              {/* LIEN */}
              {/* ================================= */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-black/40
                  transition-all
                  duration-300
                  group-hover:gap-5
                  group-hover:text-[#F4512A]
                "
              >

                <span className="hidden md:block">
                  Voir
                </span>

                <span
                  className="
                    text-xl
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>

              </div>

            </div>


            {/* ================================= */}
            {/* SERVICES */}
            {/* ================================= */}

            <div className="mt-6 md:ml-[330px]">

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-black/30
                  transition-colors
                  duration-300
                  group-hover:text-black/50
                "
              >
                {project.services}
              </span>

            </div>

          </a>

        ))}

      </div>


      {/* ========================================= */}
      {/* CTA */}
      {/* ========================================= */}

      <div
        className="
          mx-auto
          mt-24
          flex
          max-w-7xl
          justify-center
        "
      >

        <a
          href="#contact"
          className="
            group
            flex
            items-center
            gap-5
            border
            border-[#F4512A]/40
            px-8
            py-4
            text-sm
            text-[#171717]
            transition-all
            duration-300
            hover:border-[#F4512A]
            hover:bg-[#F4512A]
            hover:text-white
          "
        >

          <span>
            Parlons de votre projet
          </span>

          <span
            className="
              text-lg
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>

        </a>

      </div>

    </section>
  );
}