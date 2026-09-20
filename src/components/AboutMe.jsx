function AboutMe() {
  return (
    <div className="grid grid-cols-2   pt-4">
      <div id="box1" className="pr-5  basis-50 p-4">
        <h2 className="font-bold text-lg">Sobre mí</h2>
        <p>
          Desarrollo de Aplicaciones Web, con experiencia previa en roles de
          cara al público donde aprendí a resolver problemas bajo presión — algo
          que hoy traslado directamente a depurar código y priorizar tareas.
        </p>
      </div>
<div id="box2" className="max-w-md   p-5 shadow-sm">

  <div className="divide-y">

    <div className="grid grid-cols-4 py-4 first:pt-0">
      <div className="col-span-1 flex justify-center items-start pt-1">
        <svg
          className="size-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M224 0L0 128l224 128 192-110v194h32V128L224 0zm160 256.7l-160 91.4-160-91.4V384c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V256.7z"
          />
        </svg>
      </div>
      <div className="col-span-3">
        <p className="font-bold text-base">Formación</p>
        <p className="text-sm ">FP Desarrollo de Aplicaciones Web (DAW)</p>
      </div>
    </div>

    <div className="grid grid-cols-4 py-4">
      <div className="col-span-1 flex justify-center items-start pt-1">
        <svg
          className="size-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"
          />
        </svg>
      </div>
      <div className="col-span-3">
        <p className="font-bold text-base">Ubicación</p>
        <p className="text-sm  mt-0.5">Madrid, España</p>
      </div>
    </div>

    <div className="grid grid-cols-4 py-4 last:pb-0">
      <div className="col-span-1 flex justify-center items-start pt-1">
        <svg
          className="size-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M176 56h160V24c0-13.3-10.7-24-24-24H200c-13.3 0-24 10.7-24 24v32zm-48 40V56c0-39.8 32.2-72 72-72h112c39.8 0 72 32.2 72 72v40h48c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H48c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h48zm0 48H48c-8.8 0-16 7.2-16 16v80h448v-80c0-8.8-7.2-16-16-16H128z"
          />
        </svg>
      </div>
      <div className="col-span-3">
        <p className="font-bold text-base">Experiencia</p>
        <p className="text-sm  mt-0.5">Proyectos personales y académicos</p>
      </div>
    </div>

  </div>
</div>

    </div>
  );
}
export default AboutMe;
