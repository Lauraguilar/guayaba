import "../estilos/VistaCarrito.css";
import {Link} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import {Store} from '../store';

const VistaCarrito = () => {
    const [data, setData] = useContext(Store);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        if(data.items.length) {
            const productos = JSON.stringify(data.items);
            localStorage.setItem('productos', productos);
        }

        if(localStorage.getItem('productos')) {
            setProductos(JSON.parse(localStorage.getItem('productos')));
        } else {
            setProductos(data.items);   
        } 

    }, [data.items])

    console.log(data)
    console.log(productos)

    return (
        <div className='vistaCarrito container'>
            <h1>Tu Carrito</h1>
            {
                data.cantidad !==0 ? 
                    <>
                    <ul>
                        {
                            productos.map((item, index) => (
                                <li className='row item' key={index}>
                                    <img src={item.item.foto} alt="" className='col'/>
                                    <div className='col'>
                                        <h2>{item.item.titulo}</h2>
                                        <p>Cantidad: {item.cantidad}</p>
                                        <p>Precio por unidad: <strong>${item.item.valor}</strong></p>
                                        <p>Precio total: <strong>${item.item.valor * item.cantidad}</strong></p>
                                    </div>
                                </li>
                                ))
                        }
                    </ul>
                    <div className='d-flex justify-content-center'>    
                        <Link className='btn btn-primary' to='/checkout'>Finalizar Compra</Link>
                    </div>
                    </>
                :
                <p>Tienes que agregar productos a tu carrito</p>
            }


        </div>
    )
}

export default VistaCarrito;