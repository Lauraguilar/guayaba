import '../estilos/Contacto.css';
import gabi from '../assets/nosotras/gabi.jpg'; 
import lau from '../assets/nosotras/lau.jpg'; 

const Contacto = () => {
    return (
        <>
        <section className="nosotras container">
            <h2>Nosotras</h2>
            <div className="row">
                <div className="col nos">
                    <a href="https://www.linkedin.com/in/maria-gabriela-cendoya-016429146/" target="blank"><img className="boxFoto" src={gabi} alt="Gabriela_Cendoya"/></a>
                    <h6 className="nombres">Maria Gabriela Cendoya</h6>
                    <p>Lic. en psicologia y lectora empedernida. Es la encargada del stock</p>
                </div>
                <div className="col nos">
                    <a href="https://www.linkedin.com/in/maria-laura-aguilar-9a2a9651/" target="blank"><img className="boxFoto" src={lau} alt="Laura_Aguilar"/></a>
                    <h6 className="nombres">Maria Laura Aguilar</h6>
                    <p>Ing. en Sistemas de Informacion, autora de esta pagina y encargada de la logistica</p>
                </div>
            </div>
        </section>

        <section className="pedidos">

            <form id="formulario" className="d-flex justify-content-center">
                <div className="borde">
                    <div className="form-group separador">
                        <label for="formGroupExampleInput">Nombre</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Nombre completo"/>
                    </div>
                    <div className="form-group separador">
                        <label for="formGroupExampleInput2">Mail</label>
                        <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="tumail@ejemplo.com"/>
                    </div>
                    <div className="form-group separador">
                        <label for="exampleFormControlTextarea1">Tu mensaje</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>   
                    <div className="boton">
                        <button className="btn btn-primary separador" type="submit">ENVIAR MENSAJE</button>
                    </div>
                </div>
            </form>         
        </section>
        </>
    )
}

export default Contacto;