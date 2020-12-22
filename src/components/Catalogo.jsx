import {libro1} from '../assets/tapasLibros/Libro1.jpg';
//<img src={libro1} class="card-img-top" alt="Libro1"/>
import '../estilos/Catalogo.css';
import {useState} from 'react';

function Catalogo () {
    const [cant, setCant] = useState(1);

    return (
        <section id='compras' class='row'>
                <div class="card col-3">
                    <div class="card-body">
                        <h5 class="card-title">Titulo1</h5>                        
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="row">
                            <button disabled={cant === 1 ? 'disabled' : null } onClick={() => setCant(cant -1 )} class="col-2">-</button>
                            <input class="col-8" type="text" value={cant} readOnly/>
                            <button onClick={() => setCant(cant + 1)} class="col-2">+</button>
                        </div>
                        <a href="#" class="btn btn-primary d-flex justify-content-center">Agregar Carrito</a>
                    </div>
                </div>
        </section>
    )
}

export default Catalogo;