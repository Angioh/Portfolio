import miPdf from '../assets/GiorgioCanenguez_DesarrolladorJunior.pdf';
import profileImg from '../assets/Profile.jpeg';
function Hero() {
  return (
    <section className="px-4 py-12">
      <div
        className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 xl:grid-cols-2"
        id="hero"
      >
        <div
          id="info"
          className="flex flex-col justify-between gap-6 rounded-2xl p-5 shadow-lg md:p-8"
        >
          <div>
            <span>Hola,soy</span>
            <h2 className="pb-2 pt-2 text-3xl font-semibold sm:text-4xl">
             <p className="">Giorgio <span className="text-amber-500">Guerrero</span></p>
            </h2>
            <h1 className="pb-2 text-2xl sm:text-2xl">Desarrollador Frontend</h1>
            <p className="leading-relaxed">
              Me apasiona crear interfaces web modernas y accesibles. Siempre
              aprendiendo y en busca de nuevas oportunidades.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="btns"
              target="_blank"
              href="https://github.com/Angioh"
            >
              Mis proyectos
            </a>
            <a
              href={miPdf}
              target="_blank"
              className="btn-cv"
            >
              Descargar CV
            </a>
          </div>
        </div>
        <div
          id="imagen"
          className="flex items-center justify-center rounded-2xl p-5"
        >
          <img
            src={profileImg}
            alt=""
            className="mt-4 aspect-square w-48 rounded-full object-cover shadow-md sm:w-60 md:mt-0 md:w-64 "
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
