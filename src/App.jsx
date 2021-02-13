import NavWidgetCarrito from './components/Nav&WidgetCarrito';
import Destacados from './components/Destacados';
import Categoria from './components/Categoria';
import Contacto from './components/Contacto';
import DetalleProducto from './components/DetalleProducto';
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Store} from './store';
import {useState} from 'react';


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
          <Route exact path="/contacto">
            <Contacto/>
          </Route>
          <Route exact path="/:categoria">
            <Categoria/>
          </Route>
          <Route exact path="/:categoria/:id">
            <DetalleProducto/>
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
