import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import '../estilos/Categoria.css';


const Categoria = () => {
    const {categoria} = useParams();

    const queCategoria = (cat) => {
        switch (cat) {
            case 'psicologia': <Link to='/psicologia'/>
                break;
            case 'novelas': <Link to='/novelas'/>
                break;
            case 'clasicos': <Link to='/clasicos'/>
                break;
            case 'contacto': <Link to='/contacto'/>
                break;
            default: <Link to='*'/>
                break;
        }
    }

    return (
        <section className='categoria'>

                <h2>Estas en {categoria}</h2>
                {
                    queCategoria(categoria)
                }
        </section>
    )
}

export default Categoria;