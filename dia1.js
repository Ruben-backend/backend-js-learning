const nombre = "Juan";
let edad = 34;
let Backend = true;
let vacio = null;
let indefinido;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof Backend);
console.log(typeof vacio);
console.log(typeof indefinido);

//--- Ejercicio sencillo que me dio ChatGPT ---
// Agrega estas variables:
    // ciudad
    // altura
    // estudiaProgramacion
// Después imprime su tipo con typeof

let ciudad = "Madrid";
let altura = 1.75;
let estudiaProgramacion = true;

console.log(typeof ciudad);
console.log(typeof altura); 
console.log(typeof estudiaProgramacion);

// Tareas de la docuemtacion de la pagina "https://javascript.info/variables"

//--- Tarea 1: Traabajar con variables ---
// Declara dos variables: admin y name.
// Asigna el valor "John" a name.
// Copea el valor de name y admin.
// Muestra el valor del administrador usando alerta (debe mostrar “John”).

    // ---- Mi solucion ------
let admin;
let  name = "John";
admin = name;
console.log(admin); // Deberia aparecer "John" (nota rapida: use console.log en vez de alert porque lo estoy ejecutando con NodeJS)
// !!! Resultado:Exitoso aprace "John" en la consola !!!


    // ---- Solucion del docuemento a la tarea 1 ------
            //let admin, name; // can declare two variables at once
            //name = "John";
            //admin = name;
            //alert( admin ); // "John"
//Notas:
// Auque no se vea igual a la solucion del docuemtno mi solucion funciono correctamente

// ---- Tarea 2: Dar el nombre correcto ---
// Crea una variable con el nombre de nuestro planeta ¿Cómo la nombrarías?
// Crea una variable para almacenar el nombre de un visitante actual de un sitio web. ¿Cómo nombrarías esa variable?

    // ---- Mi solucion ------
let miPlaneta = "Tierra";
let visitanteActual= "John";

    // ---- Solucion del docuemento a la tarea 2 ------
            //let ourPlanetName = "Earth";
            //let currentUserName = "John";

    //Anotaciones:
// Diria que nombre bien la variables pero no tanto, aunque el nombre de la variable "visitanteActual" es correcto, el nombre de la variable "miPlaneta" no es tan descriptivo como "ourPlanetName" que este sugiere en la solucion del documento. 
// Es importante elegir nombres de variables que sean claros y descriptivos para facilitar la comprensión del código algo que decia explicitamente el docuemento.

// ---- Tarea 3: ¿Constante mayúscula? ---
// Examine el siguiente código:
    // const birthday = '18.04.1982';
    // const age = someCode(birthday);
// Aquí tenemos una constante de cumpleaños para la fecha y también la constante de edad.
// La edad se calcula a partir de la fecha de nacimiento mediante someCode(), lo que implica una llamada a una función que aún no hemos explicado (¡pronto lo haremos!), pero los detalles no importan aquí; la cuestión es que la edad se calcula de alguna manera a partir de la fecha de nacimiento.
// 1.¿Sería correcto usar mayúsculas para la fecha de nacimiento? 2.¿Para la edad? 3.¿O incluso para ambas?
    // const BIRTHDAY = '18.04.1982'; // 4.¿Convertir la fecha de nacimiento en mayúsculas?

    // const AGE = someCode(BIRTHDAY); // Convertir la edad en mayúsculas

    // ---- Mi Respustas ------

// 1.Diria que no pues la fecha de nacimiento ya es una constante 
// 2.Tampoco pues es una constante que tiene lo de someCode que no se que es pero puede cambiar
// 3.No,la resupusta es lo misma que lo que ya escribi
// 4.NO,lo mismo porque es un constante

    // ---- Solucion del docuemento a la tarea 3 ------
    // Generalmente usamos mayúsculas para las constantes que están "codificadas de forma rígida". O, en otras palabras, cuando el valor se conoce antes de la ejecución y se escribe directamente en el código.
    // En este código, cumpleaños es exactamente así. Por lo tanto, podríamos usar mayúsculas.
    // En cambio, la edad se evalúa en tiempo de ejecución. Hoy tenemos una edad, un año después tendremos otra. Es constante en el sentido de que no cambia durante la ejecución del código. Sin embargo, es un poco menos constante que cumpleaños: se calcula, por lo que deberíamos usar minúsculas.

// Notas:
// Normalemnte se usan mayúsculas para las constantes que están "codificadas de forma rígida".(cuando el valor se conoce antes de la ejecución y se escribe directamente en el código)
// Como el cumpleaños se calcula deberiamos usar miniúsculas para la edad