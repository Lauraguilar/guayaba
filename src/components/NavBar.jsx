import logo from '../assets/Logo.png'; 
import Carrito from './Carrito';

function NavBar () {
  return (
    <>
          <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <a class="navbar-brand" href="#"><img src={logo} alt="logo"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
              <ul class="navbar-nav justify-content-around">
                <li class="nav-item">
                  <a class="nav-link" href="#inicio">INICIO</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link dropdown-toggle" href="#compras" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  LIBROS
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Tema1</a></li>
                    <li><a class="dropdown-item" href="#">Tema2</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Toodos</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#pedidos">PEDIDOS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#nosotras">NOSOTRAS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contacto">CONTACTO</a>
                </li>
                <li class="nav-item">
                  <Carrito/>
                </li>
              </ul>
            </div>
          </nav> 
    </>
  )
}

export default NavBar;