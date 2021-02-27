import {Link} from 'react-router-dom';
import '../estilos/ListaProductos.css'

const ListaProductos = ({productos, categoria}) => {

    return (
        <section className='container'>
            <div className='row justify-content-center'>
            {               
                    productos.map(item => (
                        <div className="card col-4 col-sm-3" key={item.id}>
                            <div className="card-body">
                                <h5 className="card-title">{item.data.titulo}</h5>                        
                                <p className="card-text">{item.data.autor}</p>
                                <img src={item.data.foto} className="card-img-top" alt="TapaLibro"/>
                                <h6 className='card-subtitle mb-2 text-muted'>${item.data.valor}</h6>
                                <Link className="btn btn-primary" to={`/${categoria}/${item.id}`}>Ver detalle</Link>
                            </div>
                        </div>
                    ))
            }
            </div>
        </section>
    )
}

export default ListaProductos;