import {useState, useContext} from 'react';
import '../estilos/DetalleProducto.css';
import {Store} from '../store';



const DetalleProducto = ({item}) => {
    const [cant, setCant] = useState(1);
    const [data, setData] = useContext(Store);

    const onAdd = () => {
        setData({
            ...data, 
            cantidad: data.cantidad + cant,
            items: [...data.items, {item: item.data, cantidad: cant}],
            precioTotal: data.precioTotal + (item.data.valor * cant)
        });
    }

    return (
        <article className='row detalleProducto'>
            <h1>{item.data.titulo}</h1>
            <h5>{item.data.autor}</h5>
            <div className='col-md'>
                <img src={item.data.foto} alt=""/>
            </div>
            <div className='col-md'>
                <p>Cantidad disponible: {item.data.cantidad}</p>
                <p>Precio: ${item.data.valor}</p>
                <div className="row">
                    <button disabled={cant === 1 ? 'disabled' : null } onClick={() => setCant(cant -1 )} className="col-1 btn btn-outline-primary">-</button>
                    <input className="col" type="text" value={cant} readOnly/>
                    <button onClick={() => setCant(cant + 1)} className="col-1 btn btn-outline-primary">+</button>
                    <button onClick={onAdd} className="agregarCarrito col btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
        </article>
    )
}

export default DetalleProducto;