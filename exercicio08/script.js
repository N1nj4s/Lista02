document.getElementById("ordenarBtn").addEventListener("click", ordenarValores);

function ordenarValores() {
    // Obtém os valores digitados pelo usuário
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var valor3 = parseInt(document.getElementById("valor3").value);

    // Cria um array com os valores e ordena em ordem crescente
    var valores = [valor1, valor2, valor3];
    valores.sort(function(a, b) {
        return a - b;
    });

    // Exibe os valores ordenados
    document.getElementById("resultado").innerHTML = "Valores em ordem crescente: " + valores.join(", ");
}
