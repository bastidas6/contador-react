 
import './App.css';
import imagen from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador';
import { useState } from 'react'

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejar_clic = () => {
    setNumClics(numClics +1);
  };

  const reiniciar_contador = () => {
    setNumClics(0);
  };


  return (

    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo' src={imagen} alt="Logo"/>
      </div>
      <div className='contenedor-principal'>
        <Contador numero_de_clics={numClics} />
        <Boton
          texto="Clic"
          es_boton_de_clic= {true}
          manejar_clic={manejar_clic}/>
        <Boton
          texto="Reiniciar"
          es_boton_de_clic={false}
          manejar_clic={reiniciar_contador}/>
      </div>
    </div>
  );
}

export default App;
