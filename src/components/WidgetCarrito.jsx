import '../estilos/WidgetCarrito.css';

const WidgetCarrito = ({mostrar, action}) => {
    return (
        <div className={`widgetCarrito ${mostrar ? 'open' : 'close'}`}>
            <div className='contenido'>
                <button onClick={action}>Cerrar widget</button>
            </div>
        </div>
    )
}

export default WidgetCarrito;