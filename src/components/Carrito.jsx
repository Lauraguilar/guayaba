import {GrCart} from 'react-icons/gr';
import '../estilos/Carrito.css'

const Carrito = (accion) => {
    return (
        <div className="Carrito" onClick={accion}>
            <GrCart/>   
            <span>0</span>
        </div>
    )
}

export default Carrito;