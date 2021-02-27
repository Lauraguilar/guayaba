import {ImWhatsapp, ImTelegram, ImInstagram, ImMail2} from "react-icons/im";
import "../estilos/Footer.css";

const Footer = () => {
    return(
        <>
            <section className="footer container d-flex justify-content-center">
                <a  href="https://api.whatsapp.com/send?phone=543794793574" target="blank"><ImWhatsapp/></a>
                <a  href="https://t.me/gabrielacendoya" target="blank"><ImTelegram/></a>
                <a  href="mailto:psicolibros@gmail.com"><ImMail2/></a>
                <a  href="https://www.instagram.com/estudio_psi/" target="blank"><ImInstagram/></a>
            </section>
        </>
  )
}

export default Footer;