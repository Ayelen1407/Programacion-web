function agregarTarea() {
    let input = document.getElementById("inputTarea");
    let nuevaTarea = input.value;
    if (nuevaTarea === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${nuevaTarea} <span class="delete" onclick="borrar(this)">x</span>`;
    document.getElementById("lista").appendChild(li);
    input.value = "";
}

function borrar(elemento) {
    elemento.parentElement.remove();
}
