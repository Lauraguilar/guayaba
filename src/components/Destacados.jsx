import '../estilos/Destacados.css';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {getFirestore} from '../db';

function Destacados () {
    const [items, setItems] = useState([]);
    const db = getFirestore();

    const getLibrosDB = () => {
        db.collection('productos').where("recomendado", "==", true).get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            })

            setItems(arr);
        })
        .catch(e => console.log(e));
    }

    useEffect (() => {
        getLibrosDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } , []);

    return (
        <section id='recomendados' className='container'>
            <h3 className='row'>Productos Destacados</h3>
            <div className='row justify-content-center'>
            {
                items.length ?                
                    items.map((item, index) => (
                        <div className="card col-4 col-sm-3" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{item.data.titulo}</h5>                        
                                <p className="card-text">{item.data.autor}</p>
                                <img src={item.data.foto} className="card-img-top" alt="TapaLibro"/>
                                <h6 className='card-subtitle mb-2 text-muted'>${item.data.valor}</h6>
                                <Link className='btn btn-primary' to={`/${item.data.categoria}/${item.id}`}>Ver detalle</Link>
                            </div>
                        </div>
                    ))
                :
                <p>Cargando items...</p>
            }
            </div>
        </section>
    )
}

export default Destacados;