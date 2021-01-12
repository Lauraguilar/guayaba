import {useEffect, useState} from "react";
import DetalleProducto from './DetalleProducto';

const Producto = () => {
    const [producto, setProducto] = useState(null);

    const getProducto = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1, 
                nombre: "Producto de prueba",
                foto: "http://placehold.it/350x400",
                descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam laboriosam deleniti neque! Explicabo aspernatur accusantium ex provident natus, nam neque nesciunt eaque iure dolore, architecto maiores corrupti deserunt totam. Veniam.",
                precio: 400
            })
        }, 3000);
    });

    useEffect(() => {
        getProducto
        .then(response => setProducto(response))
        .catch(error => console.log(error));
    }, []);

    return (
        <>
            {
                producto ? 
                <DetalleProducto item={producto}/>
                : <p>Cargando producto...</p>
            }
            <section>
                <h2>Productos recomendados</h2>
            </section>
        </>
    )
}

export default Producto;