import { useState } from "react";
function Contact() {
  const email = "anthonyguerrero0727@gmail.com";
  const [copied, setCopied] = useState(false);
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("No se pudo copiar el email:", error);
    }
  }
  return (
    <section id="contacto" className="px-4 py-12">
      <div
        id="container"
        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2"
      >
        <div id="izq" className="rounded-2xl p-5 shadow-lg md:p-8">
          <h2 className="text-2xl font-semibold">¿Hablamos?</h2>
          <p>
            Si te interesa mi perfil o quieres saber más sobre mis proyectos, no
            dudes en contactarme.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-5">
            <svg
              className="mr-2 size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 180V400c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64V180L291.6 333.5c-20.8 15.6-49.5 15.6-70.3 0L0 180z"
              />
            </svg>
            <p className="break-all">{email}</p>
            <button
              id="copy"
              className="btn-cv"
              onClick={handleCopy}
            >
              {copied ? "✓" : "📋"}
            </button>
          </div>
        </div>
        <div
          id="der"
          className="flex min-h-40 flex-col justify-center rounded-2xl p-5 md:min-h-full"
        >
          <h2 className="text-2xl font-semibold">Encuéntrame</h2>
          <div className="pt-5">
            <a href="https://github.com/Angioh" target="_blank" rel="noopener noreferrer">
              <h3>GitHub</h3> <p>Mis proyectos y código</p>
            </a>
          </div>
          <div className="pt-5">
            <a href="https://www.linkedin.com/in/giorgiocr" target="_blank" rel="noopener noreferrer">
              <h3>LinkedIn</h3> <p>Mi perfil profesional</p>
            </a>
          </div>
          <div className="pt-5">
            <p>📍 Madrid, España</p>
            <p>💼 Disponible para oportunidades</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
