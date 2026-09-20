function Navbar(){
    return(
        <header className=" sticky top-0 z-50 bg-[#161717] border-b border-red/10">
            <nav className="max-w-7xl mx-auto flex items-center  justify-between px-6 py-4">
                <div className="flex pr-10 text-2xl">
                    <p className="font-bold">Gio</p><p className="font-semibold text-amber-500 gap-50">.dev</p>
                    
                </div>
                <a href="">Inicio</a>
                <a href="">Sobre mí</a>
                <a href="" >Habilidades</a>
                <a href="" >Contacto</a>
            </nav>
        </header>
    )
}

export default Navbar;