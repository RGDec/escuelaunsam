let numero = Math.floor(Math.random() * 100);
let intentos = 1;
console.log(numero);

function adivinar(){
    let respuesta = document.getElementById("respuesta").value;
    let resultado = document.getElementById("resultado");

    if (respuesta == numero){
        resultado.textContent = `¡Felicitaciones, adivinaste el número en ${intentos} intentos!`;
        resultado.style.color = "green";
    } else if (respuesta > numero){
        resultado.textContent = "El número es menor, intenta de nuevo.";
        resultado.style.color = "red";
        intentos++;
    } else {
        resultado.textContent = "El número es mayor, intenta de nuevo.";
        resultado.style.color = "red";
        intentos++;
    }

    document.getElementById("respuesta").value = "";
}