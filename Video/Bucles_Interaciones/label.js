// sentencia label

externo: // Etiqueta para identificar este ciclo

for (let i = 0; i < 3; i++) { // Primer ciclo
  for (let j = 0; j < 3; j++) { // Segundo ciclo

    // Si i y j son ambos 1
    if (i === 1 && j === 1) {
      break externo; // Rompe el ciclo externo completo
    }

    console.log("i:", i, "j:", j); // Muestra valores
  }
}