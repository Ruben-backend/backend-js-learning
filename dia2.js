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
    // Diria que el alert(en mi caso el console) no se monstraria pues por lo leido anteriromente en la pagina al cero se le conoce como “falsy” por lo que no deberia imprimir el hola
// --  Solucion --

// Sí lo hará.
// Cualquier string excepto uno vacío (y "0" que no es vacío) se convierte en true en un contexto lógico.
// Nota personal: Ver los prqueños detalles 

//2. Muestra el signo/importancia: 2
// Usando el constructor if..else, escribe un código que obtenga a través de un prompt un número y entonces muestre en un alert:
// 1, si el valor es mayor que cero,
// -1, si es menor que cero,
// 0, si es igual a cero.
// En la tarea asumimos que siempre el usuario introduce un número.

let value = 10; // Remplaze el promt por un valor ya determinado por que lo estoy haciendo desde nodejs

if (value > 0){
    console.log(1);
} else if (value < 0){
    console.log(-1);
} else {
    console.log(0)
}

// -- SOlUCION --
// let value = prompt('Escribe un número', 0);

// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );}

// Nota:Al parecer estube correcto en todo asique que bien.

//3. Reescribe el 'if' como '?'/importancia: 5
// Reescriba esta condición if usando el operador ternario '?':
// let result;

// if (a + b < 4) {
//   result = 'Debajo';
// } else {
//   result = 'Encima';}

// Mi solucion:

//let result;
// (a + b < 4) ? result = 'Debajo': result = 'Encima'; // Mi RESPUESTA PERO LA COMENTO PARA QUE NO MARQUE ERROR EN LA CONSOLA

// -- SOLUCION --
    // let result = (a + b < 4) ? 'Debajo' : 'Encima';

//Nota:Cabe aclarar que me salio algo similiar

// 4. Reescriba el 'if..else' con '?'/ importancia: 5
// Reescriba el if..else utilizando operadores ternarios múltiples'?'.
// Para mejor legibilidad, se recomienda dividirlo en múltiples lineas de código./
// let message;

// if (login == 'Empleado') {
//   message = 'Hola';
// } else if (login == 'Director') {
//   message = 'Felicidades';
// } else if (login == '') {
//   message = 'Sin sesión';
// } else {
//   message = '';}

// Mi solucion : (la comento para que no marque error en la consola)
// let message = (login == 'Empleado') ? 'Hola':
// (login == 'Director')? 'Felicidades':
// (login == '')? 'Sin sesión':
// ''; - Esto me falto 

// -- SOLUCION --
// let message = (login == 'Empleado') ? 'Hola' :
  // (login == 'Director') ? 'Felicidades' :
  // login == '') ? 'Sin sesión' :
  // '';
