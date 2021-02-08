import libro1 from '../assets/tapasLibros/Libro1.jpg';
import libro2 from '../assets/tapasLibros/Libro2.jpeg';
import libro3 from '../assets/tapasLibros/Libro3.jpg';
import libro4 from '../assets/tapasLibros/Libro4.jpg';
import libro5 from '../assets/tapasLibros/Libro5.jpg';
import libro6 from '../assets/tapasLibros/Libro6.jpg';
import libro7 from '../assets/tapasLibros/Libro7.jpg';
import libro8 from '../assets/tapasLibros/Libro8.jpg';
import libro9 from '../assets/tapasLibros/Libro9.jpg';
import libro10 from '../assets/tapasLibros/Libro10.jpg';


import '../estilos/Destacados.css';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Destacados () {
    const libros = [{
                        id:1,
                        titulo:'Algo es posible',
                        autor:'Elida Fernández',
                        editorial: libro1,
                        valor:754.54,
                        cantidad:22
                    },
                    {
                        id:2,
                        titulo:'Clinica de las neurosis',
                        autor:'Monica Torres',
                        editorial: libro2,
                        valor:1982.04,
                        cantidad:23
                    },
                    {
                        id:3,
                        titulo:'Seminario 5 Las formaciones del Inconsciente',
                        autor:'Jacques Lacan',
                        editorial: libro3,
                        valor:885.41,
                        cantidad:43
                    },
                    {
                        id:4,
                        titulo:'Seminario 11 Los cuatro conceptos fundamentales',
                        autor:'Leland Minucci',
                        editorial: libro4,
                        valor:1659.91,
                        cantidad:33
                    },
                    {
                        id:5,
                        titulo:'Desadultorizaciones',
                        autor:'Ricardo Rodulfo',
                        editorial: libro5,
                        valor:1883.71,
                        cantidad:55
                    },
                    {
                        id:6,
                        titulo:'La diferencia desquiciada ',
                        autor:'Ana María Fernández',
                        editorial: libro6,
                        valor:1396.86,
                        cantidad:73
                    },
                    {
                        id:7,
                        titulo:'Piezas sueltas',
                        autor:'Jacques-Alain Miller',
                        editorial: libro7,
                        valor:1462.7,
                        cantidad:75
                    },
                    {
                        id:8,
                        titulo:'Lecciones de introducción al psicoanálisis',
                        autor:'Oscar Masotta',
                        editorial: libro8,
                        valor:671.33,
                        cantidad:77
                    },
                    {
                        id:9,
                        titulo:'Estudios sobre la psicosis',
                        autor:'Colette Soler',
                        editorial: libro9,
                        valor:59.59,
                        cantidad:28
                    },
                    {
                        id:10,
                        titulo:'Género, psicoanálisis, subjetividad',
                        autor:'Mabel Burin, Emilce Dio Bleichmar',
                        editorial: libro10,
                        valor:1244.02,"cantidad":7
                    }]

    const getLibros = new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve(libros);
            }, 3000);
        }else {
            reject('ocurrio un error en la solicitud de Libros');
        }
    })

    const getLibrosDB = async() => {
        try {
            const resultado = await getLibros; 
            setItems(resultado);
        }catch(error) {
            console.log(error);
        }
    }

    useEffect (() => {
        getLibrosDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } , []);


    const [items, setItems] = useState([]);

    return (
        <section id='recomendados' className='container'>
            <h3 className='row'>Productos Destacados</h3>
            <div className='row justify-content-center'>
            {
                items.length ?                
                    items.map((item, index) => (
                        <div className="card col-4 col-sm-3" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{item.titulo}</h5>                        
                                <p className="card-text">{item.autor}</p>
                                <img src={item.editorial} className="card-img-top" alt="TapaLibro"/>
                                <h6 className='card-subtitle mb-2 text-muted'>{item.valor}</h6>
                                <Link className="btn btn-primary" to="/Producto">Detalle</Link>
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