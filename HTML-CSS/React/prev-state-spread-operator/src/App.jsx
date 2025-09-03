import { useState } from 'react'
import './App.css'


function App() {
 const [num, setNum] = useState([1,2,3,4])
 const [persona, setPersona] = useState({nombre: "Pepito", edad: 30})
//Spread Operator -> se agregan tres puntos antes de la variable que incluye
//todos los objetos ya existentes y despues de la coma se pone lo que queremos agregar

//TAREA1: Hacer que el setNum agregue numeros consecutivos -> 3p
function myFunction (){
 setNum([...num, num.length+1])
}

//TAREA2: Agregar una propiedad al objeto persona usando spread operator -> 4p
function nuevaPropiedad (){
  const datoP = ({...persona, apellido: "Diaz"})
  setPersona(datoP)
  console.log(datoP)
}

//TAREA3  partiendo de {nombre: "pepito", edad: 30} cambia solo el nombre a "Luis" usando spread ->3p
 const cambioNombre = () => {
   setPersona ({...persona, nombre: "Luis"})
 }

return (
   <>
   <div>
     <p>nombre: {persona.nombre}</p>
     <p>edad: {persona.edad}</p>
     <button onClick={cambioNombre}>Cambiar a Luis</button>

     {num.map((item, index) => (
       <p>{item}</p>
     ))}
     
     <button onClick={myFunction}>Agregar numero</button>
     <button onClick={nuevaPropiedad}>Agregar propiedad</button>
    </div>

   </>
 )
}

export default App