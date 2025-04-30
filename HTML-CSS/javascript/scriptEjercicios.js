/* EJERCICIOS DE DIFICULTAD MEDIA */
//IF
const number = -1;
if(number < 0){
    console.log('Negativo')
}

else if(number > 0){
    console.log('Positivo')
}

else{
    console.log('Cero')
}

//FOR
const lista = [1,2,3,4,5,6,7,8,9,10];
let suma = 0;
for(let i=0; i < lista.length; i++)
{
    //console.log("posicion", i, "valor", lista[i]) --> me muestra la posicion y valor de cada indice en la lista
    if(lista[i] % 2 === 0 ){
        suma = suma + lista[i]
        //suma +=  lista[i] --> es la forma abreviada
    }
}
console.log(`La suma de numeros pares es ${suma}`);

//FOR (Versión intermedia)
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let suma_m3 = 0;
for(let i=0; i < numbers.length; i++)
{
    if(numbers[i] % 3 === 0) 
    {
        if(numbers[i] % 5 !== 0)
        {
            suma_m3 = suma_m3 + numbers[i]
        }
    }
}
console.log(`La suma de numeros que son multiplo de 3 pero no de 5 es ${suma_m3}`);