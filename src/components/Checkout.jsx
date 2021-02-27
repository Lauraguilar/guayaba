import "../estilos/Checkout.css";
import {useState, useContext} from 'react';
import {Store} from '../store';
import {getFirestore} from '../db';
import firebase from 'firebase/app';

const Checkout = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [venta, completoVenta] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: '',
        tarjeta: '',
        nombreTarjeta: '',
        fechExp: '',
        codigo: ''
    })
    const [idCompra, setIdCompra] = useState('');

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const compra = {
        user: formData,
        items: data.items,
        totalPrice: data.precioTotal,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        db.collection('ventas').add(compra)
        .then(({id}) => {
            completoVenta(true);
            setIdCompra(id);
        })
        .catch(e => console.log(e));
    }

    return (
        <div className='checkout container'>
            <h1>Checkout!</h1>
            {
                !venta ?
                <form onSubmit={handleSubmitForm}>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Tus datos</label>
                        <input className="form-control mb-2 mr-sm-2" type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" />
                        <input className="form-control mb-2 mr-sm-2" type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido" />
                        <input className="form-control mb-2 mr-sm-2" type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail" />
                        <input className="form-control mb-2 mr-sm-2" type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono" />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Tu Tarjeta</label>
                        <input className="form-control mb-2 mr-sm-2" type="text" value={formData.tarjeta} onChange={handleChangeInput} name="tarjeta" placeholder="Nro. Tarjeta" />
                        <input className="form-control mb-2 mr-sm-2" type="text" value={formData.nombreTarjeta} onChange={handleChangeInput} name="nombreTarjeta" placeholder="Nombre Tarjeta" />
                        <input className="form-control mb-2 mr-sm-2" type="text" value={formData.fechExp} onChange={handleChangeInput} name="fechExp" placeholder="Fecha expiración" />
                        <input className="form-control mb-2 mr-sm-2" type="text" value={formData.codigo} onChange={handleChangeInput} name="codigo" placeholder="Codigo de Seguridad" />
                    </div>
                    <button className="btn btn-primary">Pagar</button>
                </form> 
                :
                <p>La compra se realizó correctamente, tu número de seguimiento es: <b>{idCompra}</b></p>
            }
        </div>
    )
}

export default Checkout;