import NavBar from './components/NavBar';
import Catalogo from './components/Catalogo';
import Producto from './components/Producto';


function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main class='container'>
        <Catalogo/>
        <Producto/>
      </main>
    </>  
  );
}

export default App;
