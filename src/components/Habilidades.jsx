const iconos = {
  HTML: { slug: "html5", color: "E34F26" },
  CSS: { slug: "css", color: "1572B6" },
  React: { slug: "react", color: "61DAFB" },
  "Tailwind CSS": { slug: "tailwindcss", color: "38BDF8" },
  SQL: { slug: "mysql", color: "4479A1" },
  JavaScript: { slug: "javascript", color: "F7DF1E" },
  Java: { slug: "openjdk", color: "ED8B00" },
  Python: { slug: "python", color: "3776AB" },
  Git: { slug: "git", color: "F05032" },
  GitHub: { slug: "github", color: "FFFFFF" },
};

function Habilidades() {
  const categorias = [
    { titulo: "Desarrollo web", habilidades: ["HTML", "CSS", "React", "Tailwind CSS"] },
    { titulo: "Base de datos", habilidades: ["SQL"] },
    { titulo: "Lenguajes", habilidades: ["JavaScript", "Java", "Python"] },
    { titulo: "Herramientas", habilidades: ["Git", "GitHub"] },
  ];

  return (
    <section id="habilidades" className="px-4 py-12">
      <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
        Habilidades
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categorias.map((categoria) => (
          <article
            key={categoria.titulo}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-md transition-colors hover:border-orange-500/40"
          >
            <h3 className="mb-4 text-lg font-semibold">{categoria.titulo}</h3>

            <ul className="space-y-1">
              {categoria.habilidades.map((habilidad) => {
                const data = iconos[habilidad];

                return (
                  <li
                    key={habilidad}
                    className="group flex items-center justify-between gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-white/5"
                  >
                    <span className="min-w-0 wrap-break-words text-sm sm:text-base">
                      {habilidad}
                    </span>

                    <span className="flex size-6 shrink-0 items-center justify-center transition-transform group-hover:scale-110">
                      {data && (
                        <img
                          src={`https://cdn.simpleicons.org/${data.slug}/${data.color}`}
                          alt={habilidad}
                          className="size-5"
                          loading="lazy"
                        />
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Habilidades;