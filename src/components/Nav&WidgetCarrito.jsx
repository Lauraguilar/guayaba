import {useState} from 'react';
import NavBar from './NavBar';
import WidgetCarrito from './WidgetCarrito';

const NavWidgetCarrito = () => {
    const [mostrarWidget, setMostrarWidget] = useState(false);

    const abrirWidget = () => {
        setMostrarWidget(!mostrarWidget);
    }

    return (
        <>
            <NavBar action={abrirWidget} />
            <WidgetCarrito mostrar={mostrarWidget} action={abrirWidget} />
        </>
    )
}

export default NavWidgetCarrito;