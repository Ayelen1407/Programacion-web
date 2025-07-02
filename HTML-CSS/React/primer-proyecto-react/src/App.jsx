import { useState } from 'react';
import './App.css'
import {SumaOresta} from './components/ejercicio/Ejercicio1'
import {CapturarInput} from './components/ejercicio/Ejercicio2'
import {SoloMontaje} from './components/ejercicio/Ejercicio3'
function App() {
  const [nombre, setNombre]= useState("")

  const handleClick = () => {
    console.log(nombre)
  };

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  }
  return (
    <>
    <input type="text" placeholder="Escribi tu nombre" onChange={handleInputChange} value={nombre}/>
    <button onClick={handleClick}>Mostrar</button>
    {nombre && <h2>{nombre}</h2>} 
    <div>
    <SumaOresta/>
    </div>
    <div>
    <CapturarInput/>
    </div>
    <SoloMontaje/>
    </>
  //"&&" = "if"
  );

}

export default App
