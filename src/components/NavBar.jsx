import logo from '../assets/Logo.png'; 
import Carrito from './Carrito';
import {Link} from 'react-router-dom';

const NavBar = ({action}) => {
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
            <Link to='/' className="nav-link navbar-brand"><img src={logo} alt="logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
              <ul className="navbar-nav justify-content-around">
                {
                  menuItems.map((categoria, index) => 
                    <li key={index} className="nav-item">
                      <Link to={categoria.ruta} className="nav-link">{categoria.texto}</Link>
                    </li>
                  )
                }
                <li className="nav-item">
                  <Carrito className="btn btn-link" action={action}/>  
                </li>
              </ul>
            </div>
          </nav> 
    </>
  )
}

export default NavBar;