import '../estilos/WidgetCarrito.css';
import {useContext} from 'react';
import {Store} from '../store';
import {CgClose} from 'react-icons/cg';
import {Link} from 'react-router-dom';

const WidgetCarrito = ({mostrar, action}) => {

    const [data, setData] = useContext(Store);

    return (
        <div className={`widgetCarrito ${mostrar ? 'open' : 'close'}`}>
            <div className='contenido container'>
                <button className='btn btn-link'><CgClose onClick={action}/></button>
                <h4 className='d-flex justify-content-center'>Tu Carrito</h4>
                
                {
                    data.cantidad !== 0 ?
                        data.items.map((item, index) => 
                        <div key={index}>
                            <div className='row'>
                                <div className='col'>
                                    <p>{item.item.titulo}</p>
                                </div>
                                <div className='col'>
                                    <p className='d-inline-block'>x{item.cantidad}</p>
                                </div>
                            </div>
                        </div>)
                    :
                    <p>No hay productos en tu carrito</p>
                }
                <h6>Total: ${data.precioTotal}</h6>
                <Link className='btn btn-outline-primary' to='/carrito'>Ver</Link>
            </div>
        </div>
    )
}

export default WidgetCarrito;