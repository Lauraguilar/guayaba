import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../db';
import {Link} from 'react-router-dom';
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

    return (
        <>
            {
                producto ?
                <div className="container detalle">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to={`/${producto.data.categoria}`}>/{producto.data.categoria.split('-').join(' ')}</Link>
                            </li>
                            <li className="breadcrumb-item active">
                                {producto.data.titulo}
                            </li>
                        </ol>
                    </nav>

                    <DetalleProducto item={producto} />
                </div> : 
                <p>Cargando producto...</p>
            }
        </>
    )
}

export default Detalle;
