import {useState} from 'react';
import '../estilos/DetalleProducto.css';


const DetalleProducto = ({item}) => {
    const [cant, setCant] = useState(1);

    return (
        <article className='row'>
            <h1>{item.nombre}</h1>
            <div className='col-md'>
                <img src={item.foto} alt=""/>
            </div>
            <div className='col-md'>
                <p>{item.descripcion}</p>
                <p>${item.precio}</p>
                <div className="row">
                    <button disabled={cant === 1 ? 'disabled' : null } onClick={() => setCant(cant -1 )} className="col-1 btn btn-outline-primary">-</button>
                    <input className="col" type="text" value={cant} readOnly/>
                    <button onClick={() => setCant(cant + 1)} className="col-1 btn btn-outline-primary">+</button>
                    <button className="agregarCarrito col btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
        </article>
    )
}

export default DetalleProducto;