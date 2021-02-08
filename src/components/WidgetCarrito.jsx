import '../estilos/WidgetCarrito.css';

const WidgetCarrito = (mostrar, accion) => {

    return (
        <div className={`widgetCarrito ${mostrar ? 'open' : 'close'}`}>
            <button onClick={accion}>Cerrar widget</button>
        </div>
    )
}

export default WidgetCarrito;