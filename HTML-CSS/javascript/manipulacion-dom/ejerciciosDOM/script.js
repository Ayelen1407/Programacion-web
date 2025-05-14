
let boton = document.getElementById('boton')

boton.addEventListener('click', function() {
    //alert('Se agragó la tarea');
    const input = document.getElementById('myInput');
    const inputValue = input.value;
    console.log(inputValue)

    const checkbox = document.createElement('input'); 
    checkbox.type = "checkbox" 


    let container = document.getElementById('container');
    let parrafo = document.createElement('p');
    parrafo.textContent = inputValue;
    container.append(parrafo);
})