/* Header component */

function Header() {
    return (
        <header>
            <div className="header-container">
                <h3>Alexis Melendez</h3>
                <nav>
                    <a href="./">Inicio</a>
                    <a href="./">Sobre mi</a>
                    <a href="./">Proyectos</a>
                    <a href="./">Habilidades</a>
                    <a href="./">Contacto</a>
                </nav>
                <a href="./" className="download-cv">Descargar CV</a>
            </div>
        </header>
    );
}

export default Header;