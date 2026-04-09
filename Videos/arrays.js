let frutas = ["platano","manzana","pera","mango","naranja"];

alert (frutas[0]);

// Arrays  Asociativos
let pc = {
    nombre:"paco",
    procesador:"Intel Core 9",
    ram:"16 GB",
    espacio:"1TB"
};

let nombre = pc ["nombre"];
let procesador = pc  ["procesador"];
let ram = pc ["ram"];
let espacio =  pc ["espacio"];

frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
        el procesador de mi PC es: <b>${procesador}</b> <br>
        la ram de mi PC es: <b>${ram}</b> <br>
        el espacio de mi PC es: <b>${espacio}</b> <br>`;
    
    document.write (frase);