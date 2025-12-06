/* Header component */

function Header() {
    return (
        <header>
            <div className="header-container">
                <h3>Alexis Melendez</h3>
                <nav>
                    <a href="#home">Inicio</a>
                    <a href="#about-me">Sobre mi</a>
                    <a href="#projects">Proyectos</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#contact">Contacto</a>
                </nav>
                <a href="/Alexis_Melendez_CV.pdf" download className="download-cv">Descargar CV</a>
            </div>
        </header>
    );
}

export default Header;