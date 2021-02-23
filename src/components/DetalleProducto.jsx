import {useState} from 'react';
import '../estilos/DetalleProducto.css';


const DetalleProducto = ({item}) => {
    const [cant, setCant] = useState(1);

    console.log(item)

    return (
        <article className='row'>
            <h1>{item.data.titulo}</h1>
            <h5>{item.data.autor}</h5>
            <div className='col-md'>
                <img src={item.data.foto} alt=""/>
            </div>
            <div className='col-md'>
                <p>{item.data.cantidad}</p>
                <p>${item.data.valor}</p>
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