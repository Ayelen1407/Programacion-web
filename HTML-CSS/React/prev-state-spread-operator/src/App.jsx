
import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState([1,2,3,4])
  const [persona, setPersona] = useState({nombre: "Pepito", edad: 30})
//Spread Operator -> se agregan tres puntos antes de la variable que incluye
//todos los objetos ya existentes y despues de la coma se pone lo que queremos agregar
function myFunction (){
  setNum([...num, num.length+1])
}

function personaFunction (){
  setPersona([...persona, {apellido: "Diaz"}])
  console.log(persona) //terminar
}
//TAREA1: Hacer que el setNum agregue numeros consecutivos -> 3p OK
//TAREA2: Agregar una propiedad al objeto persona usando spread operator -> 4p
//TAREA3  partiendo de {nombre: "pepito", edad: 30} cambia solo el nombre a "Luis" usando spread ->3p
return (
    <>
     <div>
      {num.map((item, index) => (
        <p>{item}</p>
      ))}
      <button onClick={myFunction}>Agregar numero</button>
     </div>
     <div>
      <button onClick={personaFunction}>Agregar propiedad</button>
     </div>

    </>
  )
}

export default App
