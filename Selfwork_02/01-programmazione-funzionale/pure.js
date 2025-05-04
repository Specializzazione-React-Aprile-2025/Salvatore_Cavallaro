/* const nome = " Nico";
const saluto = "Ciao"; 

function stampaSaluto() {
  console.log(saluto + nome)
}

// Converti la funzione in funzione PURA

// stampaSaluto(); */


const nome = "Nico";
const saluto = "Ciao"; 

let stampaSaluto = (saluto, nome) => saluto + ' ' + nome;

console.log(stampaSaluto(saluto, nome));
