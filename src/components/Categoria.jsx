import {useParams} from 'react-router-dom';
import '../estilos/Categoria.css';
import ListaProductos from './ListaProductos';
import {useState, useEffect} from 'react';
import {getFirestore} from '../db';




const Categoria = () => {
    const {categoria} = useParams();
    const [productos, setProductos] = useState([]);
    const [cat, setCat] = useState('');
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

            const nombre = categoria.split('-').join(' ')
            setCat(nombre.charAt(0).toUpperCase() + nombre.slice(1))
        }
    }, [categoria])

    return (
        <section className='categoria container'>
            <h2>{cat}</h2>
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