import NavBar from './components/NavBar';
import Catalogo from './components/Catalogo';


function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main class='container'>
        <Catalogo/>
      </main>
    </>  
  );
}

export default App;
