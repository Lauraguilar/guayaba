import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../db';
import DetalleProducto from './DetalleProducto';
import '../estilos/Detalle.css'

const Detalle = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState(null);
    const db = getFirestore();

    useEffect(() => {
        db.collection('productos').doc(id).get()
        .then(doc => {
            if(doc.exists) {
                setProducto({id: doc.id, data: doc.data()});
            }
        })
        .catch(e => console.log(e));
    }, []);

    console.log(producto);

    return (
        <>
            {
                producto ?
                <div className="container detalle">
                    <DetalleProducto item={producto} />
                </div> : 
                <p>Cargando producto...</p>
            }
        </>
    )
}

export default Detalle;
