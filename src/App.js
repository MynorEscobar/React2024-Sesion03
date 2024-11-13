import Tarjeta from "./Components/Tarjeta";
import TarjetaBootstrap from "./Components/TarjetaBootstrap";
import TarjetaPerfil from "./Components/TarjetaPerfil/TarjetaPerfil";

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Tarjeta></Tarjeta>
        <TarjetaPerfil></TarjetaPerfil>        
        <TarjetaBootstrap></TarjetaBootstrap>
      </header>
    </div>
    
  );
}

export default App;
