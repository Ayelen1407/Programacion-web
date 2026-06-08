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
function finalizarTarea() {
    const email = document.getElementById("email");
    const nombre = document.getElementById("nombre")
    const finalizar = document.getElementById("finalizar");

    finalizar.addEventListener ("click", () => {
        const valorEmail = email.value;
        const valorNombre = nombre.value;

        const cajaFinal = document.createElement("li");
        cajaFinal.innerHTML = `
        Valores adjuntos:  nombre: ${valorNombre}  email: ${valorEmail}`
        ;
        document.getElementById("caja").appendChild(cajaFinal);
    })
}
