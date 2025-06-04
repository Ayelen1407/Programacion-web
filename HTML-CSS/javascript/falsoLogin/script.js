const password = document.getElementById ('password').value;
const user = document.getElementById ('user').value;

let boton = document.getElementById ('Boton')

boton.addEventListener('click', function() {
    if (user === "ayelen" & password === "1407") {
        localStorage.setItem("usuario", user)
        localStorage.setItem("contraseña", password)
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
    }
    else{
        console.log("Lo sentimos, no se pudo logear")
    }
})
