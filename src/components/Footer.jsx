import {ImWhatsapp, ImTelegram, ImInstagram, ImMail2} from "react-icons/im";
import "../estilos/Footer.css"

const Footer = () => {
    return(
        <section className="container" id="contacto">
            <h2 className="d-flex justify-content-center">Contacto</h2>
            <div className="row ">
                <div className="col d-flex justify-content-center">
                    <nav className="nav flex-column">
                        <a className="nav-link" href="https://api.whatsapp.com/send?phone=543794793574" target="blank"><ImWhatsapp/></a>
                        <a className="nav-link" href="https://t.me/gabrielacendoya" target="blank"><ImTelegram/></a>
                    </nav>
                </div>
                <div className="col d-flex justify-content-center">
                    <nav className="nav flex-column">
                        <a className="nav-link" href="mailto:psicolibros@gmail.com"><ImMail2/></a>
                        <a className="nav-link" href="https://www.instagram.com/estudio_psi/" target="blank"><ImInstagram/></a>
                    </nav>
                </div>
            </div>
            <div class="row" id="autor">
                <div class="col d-flex justify-content-center">
                    <p>Maria Laura Aguilar - 2020</p>
                </div>
            </div>
        </section>
  )
}

export default Footer;