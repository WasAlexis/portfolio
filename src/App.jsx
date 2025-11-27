import Header from './components/Header.jsx';

function App() {
  return (
    <>
    <Header />
    <main>
      <section className='hero'>
        <div className='gradient'>
          <div className='container'>
            <div className='status'>
              <span className='label'>Disponible para proyectos</span>
              <div className='signal'></div>
            </div>
            <h1>Diseño que <span>inspira.</span></h1>
            <p>
              Desarrollador Full Stack & Diseñador UI/UX. 
              Creo experiencias digitales extraordinarias que combinan tecnología con diseño.
            </p>
            <div className='action-buttons'>
              <a href="./" className='like-button fill'>Ver proyectos</a>
              <a href="./" className='like-button outline'>Contactar</a>
            </div>
          </div>
        </div>
      </section>
      <section id='about-me' className='template'>
        <div className='container'>
          <h3>Sobre mi</h3>
          <div className='slide'>
            <div className='side'>
              <h2>Construyendo un futuro digital, un pixel a la vez.</h2>
              <p>
                Soy un desarrollador <strong>Full Stack</strong> apasionado por crear interfaces que no solo funcionan perfectamente, 
                sino que también deleitan a los usuarios. Mi enfoque combina tecnología de vanguardia con 
                principios de diseño cuidadosamente considerados.
              </p>
              <p>
                Con experiencia en React, TypeScript, Node.js y diseño UI/UX, 
                puedo llevar un producto desde la idea inicial hasta el lanzamiento, 
                asegurando que cada detalle esté perfectamente ejecutado.
              </p>
            </div>
            <div className='side'>
              <div className='gallery'>
                <div className='card'>
                  <span className='value'>5+</span>
                  <span className='key'>Años de experiencia</span>
                </div>
                <div className='card'>
                  <span className='value'>10+</span>
                  <span className='key'>Proyectos participados</span>
                </div>
                <div className='card'>
                  <span className='value'>3+</span>
                  <span className='key'>Años en diseño</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='projects' className='template dark'>
        <div className='container'>
          <h3>Proyectos</h3>
          <h2>Algunos de mis trabajos recientes</h2>
          <div className='gallery'>
            <div className='item'>
              <div className='photo filecast'></div>
              <div className='details'>
                <span className='category'>Transferencia de archivos · WebRTC</span>
                <span className='name'>Filecast</span>
                <p>Aplicacion web basado en Apple Airdrop para transferencia de archivos 
                  indepentientemente de la plataforma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='skills' className='template'>
        <div className='container'>
          <h3>Habilidades</h3>
          <h2>Tecnologias que domino</h2>
          <div className='gallery'>
            <div className='card blue'>
              <div className='icon frontend'></div>
              <h4>Frontend</h4>
              <p>React, Media Query, WebRTC</p>
            </div>
            <div className='card dark'>
              <div className='icon backend'></div>
              <h4>Backend</h4>
              <p>Python, Express.js, Javascript, Flask</p>
            </div>
            <div className='card long'>
              <div className='icon design'></div>
              <h4>Diseño</h4>
              <p>Figma, Responsive Design, Animaciones</p>
            </div>
            <div className='card long'>
              <div className='icon practices'></div>
              <h4>Buenas prácticas</h4>
              <p>Metodologías ágiles, Control de versiones, Test Driven Development</p>
            </div>
            <div className='card dark'>
              <div className='icon database'></div>
              <h4>Bases de datos</h4>
              <p>SQL Server, PostgreSQL, Supabase</p>
            </div>
            <div className='card purple'>
              <div className='icon devops'></div>
              <h4>DevOps</h4>
              <p>CI/CD, Docker, GitHub Actions, AWS, Linux</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export default App;