import { generarEspacio } from "./busqueda.js";
let lista = generarEspacio(100);
console.log (lista)

for (let i = 0; i < lista.length; i++) {
   if (lista[i].indexOf ("W") == 0) {
      console.log (lista [i])
   }
}

for (let i = 0; i < lista.length; i++) {
   if (lista[i] === "Wally") {
      console.log("Wally se encuentra en la posición " + i);
   }
}

for (let i = 0; i < lista.length; i++) {
   if (lista[i].includes("ll")){
      console.log (lista [i])
   }
}