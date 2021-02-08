import NavWidgetCarrito from './components/Nav&WidgetCarrito';
import Destacados from './components/Destacados';
import Contacto from './components/Contacto';
import Psicologia from './components/Psicologia';
import Novelas from './components/Novelas';
import Clasicos from './components/Clasicos';
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavWidgetCarrito/>
        <Switch>
          <Route exact path="/">
            <Destacados/>
          </Route>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route path="/psicologia">
            <Psicologia/>
          </Route>
          <Route path="/novelas">
            <Novelas/>
          </Route>
          <Route path="/clasicos">
            <Clasicos/>
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>  
  );
}

export default App;
