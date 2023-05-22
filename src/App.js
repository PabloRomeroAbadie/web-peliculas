import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import Listado from "./components/Listado";

function App() {
  return (
    <div className='layout'>
        {/*Cabecera*/}
        <header className='header'>
            <div className="logo">
                <div className="play"></div>
            </div>

            <h1>MisPelis</h1>
        </header>
        
        {/*Barra de navegacion*/}
        <nav className="nav">
            <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Peliculas</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>
        </nav>
        
        {/*Contenido principal*/}
        <section className="content">
            {/*Aqui va el listado de las peliculas*/}
            <Listado />
        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
            <Buscador />

            <Crear />
        </aside>

        {/*Pie de pagina*/}
        <footer className="footer">
            &copy; Master en React - Pablo Romero Abadie
        </footer>

    </div>
  );
}

export default App;
