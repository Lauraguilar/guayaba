import logo from '../assets/Logo.png'; 
import Carrito from './Carrito';
import {Link} from 'react-router-dom';

const NavBar = (accion) => {
  const menuItems = [
    {
        texto: 'PSICOLOGÍA',
        ruta: '/psicologia',
    },
    {
        texto: 'NOVELAS',
        ruta: '/novelas',
    },
    {
        texto: 'CLASICOS',
        ruta: '/clasicos',
    },
    {
        texto: 'CONTACTO',
        ruta: '/contacto',
    },
]
  return (
    <>
          <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <a className="navbar-brand" href="#"><Link to='/' className="nav-link"><img src={logo} alt="logo"/></Link></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
              <ul className="navbar-nav justify-content-around">
                {
                  menuItems.map(categoria => 
                    <li className="nav-item">
                      <Link to={categoria.ruta} className="nav-link">{categoria.texto}</Link>
                    </li>
                  )
                }
                <li className="nav-item">
                  <Carrito  className="nav-link" accion={accion}/>  
                </li>
              </ul>
            </div>
          </nav> 
    </>
  )
}

export default NavBar;