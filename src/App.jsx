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
    </main>
    </>
  );
}

export default App;