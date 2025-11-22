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
              <a href="./" className='like-button'>Contactar</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export default App;