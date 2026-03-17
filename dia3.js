// Ejercicio 1/ Crea un array:
// let numeros = [5, 10, 15, 20];
// imprime todos los números con un for

let numeros = [5,10,15,20];

for (let i = 0 ; i < numeros.length;i++ ){
    console.log(numeros[i]);
}

// Ejercicio 2 / Usa map para:
// crear un nuevo array con todos los números multiplicados por 2
let numeros_multipicados = [5,10,15,20];

let duplicar = numeros_multipicados.map (num => num * 2);
console.log(duplicar)

// Ejercicio 3 / Usa filter para:
// obtener solo los números mayores a 10
let numeros_filtrados = [5,10,15,20];

let filtrar = numeros_filtrados.filter(num => num > 10);
console.log(filtrar)

// Ejercicio 4
// let usuarios = ["Ana", "Juan", "Pedro", "Luis"];
// agregar un usuario nuevo,eliminar el último e imprimir la lista final

let usuarios= ["Ana","Juan","Pedro","Luis"];

usuarios.unshift("nuevo");
usuarios.pop(4);

console.log(usuarios)