document.getElementById("ordenarBtn").addEventListener("click", ordenarValores);

function ordenarValores() {
    // Obtém os valores digitados pelo usuário
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var valor3 = parseInt(document.getElementById("valor3").value);

    // Cria um array com os valores e ordena em ordem decrescente
    var valores = [valor1, valor2, valor3];
    valores.sort(function(a, b) {
        return b - a;
    });

    // Exibe os valores ordenados em ordem decrescente
    document.getElementById("resultado").innerHTML = "Valores em ordem decrescente: " + valores.join(", ");
}
