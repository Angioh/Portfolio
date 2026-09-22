import { useState } from "react";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#161717]">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-4 sm:px-6"
      >
        <a
          href="#hero"
          onClick={cerrarMenu}
          className="flex items-center text-2xl"
        >
          <span className="font-bold text-white">Gio</span>
          <span className="font-semibold text-amber-500">.dev</span>
        </a>

        {/* Botón para móvil */}
        <button
          type="button"
          className="rounded-md p-2 text-white hover:bg-white/10 md:hidden"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? "✕" : "☰"}
        </button>

        {/* Enlaces de escritorio */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            className="text-gray-300 transition hover:text-amber-500"
            href="#hero"
          >
            Inicio
          </a>
          <a
            className="text-gray-300 transition hover:text-amber-500"
            href="#aboutme"
          >
            Sobre mí
          </a>
          <a
            className="text-gray-300 transition hover:text-amber-500"
            href="#habilidades"
          >
            Habilidades
          </a>
          <a
            className="text-gray-300 transition hover:text-amber-500"
            href="#contacto"
          >
            Contacto
          </a>
        </div>

        {/* Menú desplegable móvil */}
        {menuAbierto && (
          <div className="flex w-full flex-col gap-4 pt-5 md:hidden">
            <a
              className="text-gray-300 transition hover:text-amber-500"
              href="#hero"
              onClick={cerrarMenu}
            >
              Inicio
            </a>
            <a
              className="text-gray-300 transition hover:text-amber-500"
              href="#aboutme"
              onClick={cerrarMenu}
            >
              Sobre mí
            </a>
            <a
              className="text-gray-300 transition hover:text-amber-500"
              href="#habilidades"
              onClick={cerrarMenu}
            >
              Habilidades
            </a>
            <a
              className="text-gray-300 transition hover:text-amber-500"
              href="#contacto"
              onClick={cerrarMenu}
            >
              Contacto
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
