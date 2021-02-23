import '../estilos/WidgetCarrito.css';
import {useContext} from 'react';
import {Store} from '../store';

const WidgetCarrito = ({mostrar, action}) => {

    const [data, setData] = useContext(Store);

    return (
        <div className={`widgetCarrito ${mostrar ? 'open' : 'close'}`}>
            <div className='contenido'>
                {
                    data.items.map(item => <p key={item.id}>{item.item.titulo}</p>)
                }
                <button onClick={action}>Cerrar widget</button>
            </div>
        </div>
    )
}

export default WidgetCarrito;