const button = document.getElementById("boton");
let contador = 0;
//setTimeout
//Es una funcion que recibe por parametrosdos valores
//recibe una funcion y recibe el tiempo que va a tardar en ejecutarse

button.addEventListener('click', () => {
    setTimeout(function() {
        alert("hola fui clickeado hace 2 segundos");
    }, 2000);//milisegundos

//setInterval()
//ejecutar el codigo cada n cantidad de tiempo
/*    setInterval(() => {
        contador++;
        console.log(contador);
    }, 1000);
*/
});

//Asincronia
//peticion a una api
//metodos: gwt, post, put, delete

//fetch
fetch('https://rickandmortyapi.com/api/character')
    .then((data) => data.json())
    .then((response) => console.log("response", response.results)); //ponemos corchetes para traer un array en especifico

//async await
//funcion flecha asincrona
const asyncFunction = async () => {
    //try catch
    try{
        const response = await fetch ("https://rickandmortyapi.com/api/character/2")
        const data = await response.json();
        console.log("data", data);
    }catch(error) {
        console.log("error", error);
    }
};
asyncFunction(); //para ejecutar una funcion, tenemos que llamarla. Poner parentesis y ; al final
// funcion regular asincrona
async function asyncFunc() {}; //una manera mas corta de hacerlo