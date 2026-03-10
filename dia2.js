// Ejercicio 1
// Crea variables:
// let edad = 17;
// Mostrar:
// "Eres mayor de edad" o "Eres menor de edad"

let edad = 17;

if (edad >= 18) {
    console.log("Eres mayor de edad");} 
    else {
    console.log("Eres menor de edad");
}

// Ejercicio 2
// Crear variable:
// let temperatura = 30;
// Mostrar:
// "Hace frío" si es menor a 15
// "Clima agradable" si está entre 15 y 25
// "Hace calor" si es mayor a 25

let temperatura = 30;

if (temperatura < 15) {
    console.log("Hace frío");
} else if (temperatura >= 15 && temperatura <= 25) {
    console.log("Clima agradable");
} else {
    console.log("Hace calor");
}

// Ejercicio 3
// Simula un login muy simple.
// let usuario = "admin";
// let password = "1234";
// Condición:
// Si usuario es "admin" y password "1234":
// Acceso permitido
// Si no:
// Acceso denegado

let usuario = "admin";
let password = "1234";

if (usuario === "admin" && password === "1234")
{
    console.log("Acceso permitido");
} else 
{
    console.log("Acceso denegado");
}

// EJercicios de la pagina  https://es.javascript.info/ifelse

// 1. if (un string con cero) /importancia: 5
// Se mostrará el alert?
    if ("0") {
      console.log( 'Hello' );
    }
    // Diria que el alert(en mi caso el console) no se monstraira pues por lo leido anteriromente en la pagina al cero se le conoce como “falsy” por lo que no deberia imprimir el hola
    // Solucion

// Sí lo hará.
// Cualquier string excepto uno vacío (y "0" que no es vacío) se convierte en true en un contexto lógico.
// Nota personal: Ver los prqueños detalles .



