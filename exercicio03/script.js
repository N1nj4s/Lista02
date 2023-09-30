function verificarParidade() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultadoElement = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultadoElement.textContent = "Por favor, insira um número válido.";
    } else {
        if (numero % 2 === 0) {
            resultadoElement.textContent = "O número " + numero + " é par.";
        } else {
            resultadoElement.textContent = "O número " + numero + " é ímpar.";
        }
    }
}
