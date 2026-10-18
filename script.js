/*---Saludo---*/
console.log("Bienvenido a Data Science Project");

const numero = document.getElementById("numero");
const btnContador = document.getElementById("btn-contador");
let contador = 0;

btnContador.addEventListener("click", () =>{
    contador++;
    numero.textContent = contador;
});
