document.getElementById("calcularBtn").addEventListener("click", calcularCredito);

function calcularCredito() {
    // Obtém o saldo médio digitado pelo usuário
    var saldoMedio = parseFloat(document.getElementById("saldoMedio").value);
    
    // Calcula o valor do crédito com base no saldo médio
    var valorCredito = 0;

    if (saldoMedio <= 200) {
        valorCredito = 0;
    } else if (saldoMedio <= 400) {
        valorCredito = saldoMedio * 0.20; // 20% do saldo médio
    } else if (saldoMedio <= 600) {
        valorCredito = saldoMedio * 0.30; // 30% do saldo médio
    } else {
        valorCredito = saldoMedio * 0.40; // 40% do saldo médio
    }

    // Exibe o saldo médio e o valor do crédito
    document.getElementById("resultado").innerHTML = "Saldo Médio: R$" + saldoMedio.toFixed(2) + "<br>";
    document.getElementById("resultado").innerHTML += "Valor do Crédito: R$" + valorCredito.toFixed(2);
}
