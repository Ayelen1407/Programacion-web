import './App.css'
import Pepito from './components/usuario/Usuario' // Export default/no nombrado
import { Proovedor } from './components/proovedor/Proovedor'; // Export común
import { useEffect, useState} from 'react'; //useState es para guardar datos en una variable, y tiene una funcion actualizador
function App() {
  const[characters, setCharacters] = useState([])

  //useEffect va a ejecutar el codigo que se encuentra dentro, tantas veces como
  //se actualicen sus dependencias.
  //Si no hay dependencias se ejecuta solo antes del primer renderizado
  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then((data) => data.json()) //.then Se usa para esperar la respuesta
    .then((response) => setCharacters(response.results));
  }, [])

  return (
  <>
  {characters ? (
    characters.map((item, index) => <p>{item.name}</p>)
  ) : (
    <> cargando... </>
  )}

  hola mundo
  <button>hola soy un boton</button>
  <Pepito />
  <Proovedor name={"Ayelen"}/>
  </>
  );

}

export default App
