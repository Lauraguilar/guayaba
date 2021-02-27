import NavWidgetCarrito from './components/Nav&WidgetCarrito';
import Destacados from './components/Destacados';
import Categoria from './components/Categoria';
import Contacto from './components/Contacto';
import Detalle from './components/Detalle';
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Store} from './store';
import {useState} from 'react';
import Autora from "./components/Autora";
import VistaCarrito from "./components/VistaCarrito";
import Checkout from "./components/Checkout";


function App() {

  const [data, setData] = useState({
    items: [],
    cantidad: 0,
    precioTotal: 0,
  })

  return (
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <NavWidgetCarrito/>
        <Switch>
          <Route exact path="/">
            <Destacados/>
          </Route>
          <Route path="/carrito">
            <VistaCarrito/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route exact path="/:categoria">
            <Categoria/>
          </Route>
          <Route exact path="/:categoria/:id">
            <Detalle/>
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
        <Footer/>
        <Autora/>
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
