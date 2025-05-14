// Manipulacion del DOM
//Nos permite interactuar con un documento, modificar su estructura, estilo y contenido

//Seleccionar elementos del DOM:
//es por ID
//estamos obteniendo por id la etiqueta titulo. Esto nos permite acceder a todas sus propiedades
let titulo = document.getElementById('titulo');
console.log(titulo);
console.log(titulo.textContent, titulo.innerText); //podemos usar cualquiera de los dos para agarrar texto(lo que tenga la etiqueta)

titulo.textContent = "este es el nuevo titulo";

//Eventos (addEventListener, onClick, onChange)
let boton = document.getElementById('boton')

boton.addEventListener('click', function() {
    alert('Este boton ha sido clickeado');

    let container = document.getElementById('container');
    let parrafo = document.createElement('p');
    parrafo.textContent = "este es el parrafo creado";
    container.append(parrafo);
})

