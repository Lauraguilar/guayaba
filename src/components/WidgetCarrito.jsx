import '../estilos/WidgetCarrito.css';
import {useContext, useEffect} from 'react';
import {Store} from '../store';
import {CgClose} from 'react-icons/cg';
import {Link} from 'react-router-dom';

const WidgetCarrito = ({mostrar, action}) => {

    const [data, setData] = useContext(Store);

    const vaciarCarrito = () => {
        setData ({
            items: [],
            cantidad: 0,
            precioTotal: 0,
        })
    }
    
    return (
        <div className={`widgetCarrito ${mostrar ? 'open' : 'close'}`}>
            <div className='contenido container'>
                <button className='btn btn-link'><CgClose onClick={action}/></button>
                <h4 className='d-flex justify-content-center'>Tu Carrito</h4>
                <ul>
                    {
                        data.cantidad !== 0 ?
                            data.items.map((item, index) => (
                                <li className='row' key={index}>
                                    <div className='col-6'>
                                        <p className='d-inline-block'>{item.item.titulo}</p>
                                    </div>
                                    <div className='col-3'>
                                        <p className='d-inline-block'>(x{item.cantidad})</p>
                                    </div>
                                    <div className='col-3'>
                                        <p className='d-inline-block'>${item.cantidad*item.item.valor}</p>
                                    </div>
                                </li>
                            ))
                        :
                        <p>No hay productos en tu carrito</p>
                    }
                </ul>
                <h6>Total: ${data.precioTotal}</h6>
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                <div className='row ver'>
                    <Link className='btn btn-primary' to='/carrito'>Ver</Link>
                </div>
            </div>
        </div>
    )
}

export default WidgetCarrito;