var miVariable = 'contenido de la variable'; //Esta no se usa

//let --> solamente vive en el scope declarando o en sus hijos
let miVariable2 = 'puedenser re-escritos sus valores';
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

/* ITERAMOS UNA LISTA CON FOR */
for(let i=0; i < miArreglo.length; i++){
    console.log(miArreglo[i]); // imprimi en pantalla el arreglo con su posicion
}