function Hero() {
  return (
    <section>
      <div className="grid grid-cols-2 pt-5 border-2 justify-center">
        <div id="info" className="border-2   p-4">
          <div>
            <span>Hola,soy</span>
            <h2 className="text-4xl pb-1 pt-2 font-semibold">
              Giorgio <span className="text-amber-500">Guerrero</span>
            </h2>
            <h1 className="text-2xl pb-2">Desarrollador Frontend</h1>
            <p>
              Me apasiona crear interfaces web modernas y accesibles. Siempre
              aprendiendo y en busqueda de oportunidades.
            </p>
          </div>
          <div className="justify-between px-6 py-4">
            <a
              className="btns mr-2"
              target="_blank"
              href="https://github.com/Angioh"
            >
              Mis proyectos
            </a>
            <a
              href="/src/assets/GiorgioCañenguez_DesarrolladorJunior.pdf"
              target="_blank"
              className="btn-cv"
            >
              Descargar CV
            </a>
          </div>
          <div></div>
        </div>
        <div id="imagen" className="border-2 flex justify-center p-4">
          <img
            src="/src/assets/Profile.jpeg"
            alt=""
            className="w-52 h-52 rounded-full shadow-amber-600 shadow-md mt-7 saturate-90 object-cover "
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
