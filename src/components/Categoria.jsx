import {useParams} from 'react-router-dom';
import '../estilos/Categoria.css';
import ListaProductos from './ListaProductos';
import {useState, useEffect} from 'react';
import {getFirestore} from '../db';




const Categoria = () => {
    const {categoria} = useParams();
    const [productos, setProductos] = useState([]);
    const db = getFirestore();

    useEffect(() => {
        if(categoria) {
            db.collection('productos').where('categoria', '==', categoria).get()
            .then(response => {
                let arr = [];
                response.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                })
                setProductos(arr);
            })
        }
    }, [categoria])

    return (
        <section className='categoria container'>
            <h2>{categoria.split('-').join(' ')}</h2>
            {
                productos.length ? 
                <ListaProductos productos={productos} categoria={categoria}/>
                :
                <p>Cargando productos...</p>
            }
        </section>
    )
}

export default Categoria;