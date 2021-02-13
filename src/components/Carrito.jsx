import {GrCart} from 'react-icons/gr';
import '../estilos/Carrito.css';
import {useContext} from 'react';
import {Store} from '../store';

const Carrito = ({action}) => {
    const [data, setData] = useContext(Store);

    return (
        <div className="Carrito" onClick={action}>
            <GrCart/>   
            <span>{data.cantidad}</span>
        </div>
    )
}

export default Carrito;