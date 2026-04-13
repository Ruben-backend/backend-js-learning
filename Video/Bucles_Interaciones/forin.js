// sentencia for  in

let frutas = ["manzana", "pera", "uva"]; // Array con 3 elementos

// Recorre los índices del array (0, 1, 2)
for (let indice in frutas) {
  console.log("Índice:", indice); // Muestra el índice
  console.log("Valor:", frutas[indice]); // Muestra el valor usando el índice (no muestra los numeros,si no mas bien el texto)
}