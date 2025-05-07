var miVariable = 'contenido de la variable'; //Esta no se usa

//let --> solamente vive en el scope declarando o en sus hijos
let miVariable2 = 'pueden ser re-escritos sus valores';
miVariable = 9; //reasignación del valor

//const --> variable constante, no son reasignables los valoeres
const miVariable3 = 10; //es el que mas vamos a usar

/*TIPOS DE DATOS*/
const text = 'string'
const numeros = 2 //number
const booleanos = true //Boolean
//undefined --> valor no definido (es mas usual que el null)
//null --> vacío

/*OPERADORES*/

//arimeticos: son todos los de matemática ( + - / % * )
//comparacion:
// '==' doble igual compara el valor del dato (para python)
// '===' triple igual compara el valor y el tipo de dato (para javascript)
// '!=' distinto       '!==' distinto valor y tipo (para javascript)
// '> <' '>=' '<=' mayor menor, mayor igual, menor o igual

//condicionales
//if
const edad = 20;
if(edad > 18)
{
    console.log('sos mayor de edad') //"console.log" es igual al print de python
}
else
{
    console.log('sos menor de edad')
}
/*Comandos de la terminal*/
//ls es para saber donde estamos parados
//node "nombre_del_archivo" --> es para ejecutar el codigo en la terminal

//Switch
const dia = 1;
switch(dia)
{
    case 1: console.log('Dia lunes'); break //el break es necesario para que no se ejecuten todos los casos a la vez (solo el que necesitemos)
    case 2: console.log('Dia martes'); break 
    default: console.log('Dia no registrado')
}


//Funciones
//declaraciones funcion clásica
function saludar(nombre)
{
    return `Hola ${nombre}`
}
console.log(saludar("Aye"));

//arrow function

//return explisito -> el return esta escrita y lleva llaves
const saludarExplisito = (nombre) => {return `Hola ${nombre}`;}

const saludo = (nombre) => `Hola ${nombre}`;
//return implisito -> no esta escrito (en algunos casos va en parentesis, cuando hay mas de una linea)

/* ARREGLOS O ARRAYS(Listas en python) */
const miArreglo = [1, 2, "pepito", true];
console.log(miArreglo[2]); //la posicion en una lista se ubica como en python

const miObjeto =
{
    clave: "valor",
    nombre: "Ayelen",
    Edad: 17
};
console.log(miObjeto.nombre); //en este caso devuelve "Ayelen"

/* METODOS DE ARREGLOS */
//length --> longitud de arreglos
const longitud = miArreglo.length;
console.log(longitud);

//push(valor) --> Agrega un elemento al final (equivalente al append() en python)
miArreglo.push('Manzana')
console.log("cadena", miArreglo)

//pop() elimina el ultimo elemento de un arreglo
//si queremos lo podemos guardar en una variable
const ultimo = miArreglo.pop();
console.log("ultimo", ultimo);

//shift() elimina el primer valor de un arreglo, también lo guarda
const primero = miArreglo.shift();
console.log(primero);

//unshift(valor) --> Agrega un elemento al principio del arreglo
miArreglo.unshift("Belen");
console.log(miArreglo);

/* ITERAMOS UNA LISTA CON FOR */
for(let i=0; i < miArreglo.length; i++){
    console.log(miArreglo[i]); // imprimi en pantalla el arreglo con su posicion
}

/*  forEach */
//SOLO RECORRE, no guarda los valores en ningun lado
miArreglo.forEach((item, index, miArregloEntero) => {  //lo que marca el arranque de la funcion son los parentesis mas grandes
    console.log('index', index, 'elemento', item, 'Arreglo Completo', miArregloEntero);
});

// map --> Recorre el arreglo. lo modifica con una funcion y nos devuelve uno nuevo
const nuevoArreglo = miArreglo.map((item, index) => {
    const num = 2;
    console.log(index, "item", item);//
    return (item += num);
})
console.log("nuevo arreglo", nuevoArreglo);

//filter --> Crea un nuevo array a partir de los elementos que cumplan las condiciones
const arregloNum = [2,4,5,6];
const pares = arregloNum.filter((item) => item % 2 === 0);
console.log(pares);