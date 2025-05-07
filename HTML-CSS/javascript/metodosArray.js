/*Ejercicio: Tienda de Productos*/
// 1
const inventario = []
const prod1 = {nombre:"Celular" , precio: 4000,categoria:"Electronica"};
const prod2 = {nombre:"Collar"  ,precio: 800,  categoria:"Accesorio"};
const prod3 = {nombre:"Parlante",precio: 2500, categoria:"Electronica"};
const prod4 = {nombre:"Remera"  ,precio: 1000, categoria:"Indumentaria"};

inventario.push(prod1, prod2, prod3, prod4)

// 2
inventario.forEach((index, item, inventarioEntero) => { 
    console.log('index', index, 'elemento', item, 'Inventario Completo', inventarioEntero);
});

// 3
const categoriaElec = inventario.filter((item) => item.categoria === "Electronica");
console.log(categoriaElec);

//4
const nuevoInventario = inventario.map((item, index) => {
    const nombres = (item.nombre);
    return nombres
});
console.log(nuevoInventario)

/*Ejercicio: Lista de Peliculas*/
// 1
const peliculas = []
const peli1 = {titulo:"Marvel",  director:"Rodolfo"  , año:"2003", genero:"Acción"};
const peli2 = {titulo:"Martyrs", director:"Jeniffer" , año:"2015", genero:"Terror"};
const peli3 = {titulo:"Tony montana",  director:"pedro" , año:"2011", genero:"Acción"};

peliculas.push(peli1, peli2, peli3)

// 2
const peliNueva = {titulo:"Cars", director:"Jhon", año:"2001", genero:"Infantil"};
peliculas.unshift(peliNueva);
console.log(peliculas);