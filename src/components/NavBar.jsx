import logo from '../assets/Logo.png'; 

function NavBar () {
  return (
    <>
    <nav>
      <a href="#"><img src={logo} alt="logo"/></a>
      <ul>
        <li>
          <a href="#inicio">INICIO</a>
        </li>
        <li>
          <a href="#compras">LIBROS</a>
        </li>
        <li>
          <a href="#pedidos">PEDIDOS</a>
        </li>
        <li>
          <a href="#nosotras">NOSOTRAS</a>
        </li>
        <li>
          <a href="#contacto">CONTACTO</a>
        </li>
      </ul>
    </nav>  
    </>
  )
}

export default NavBar;