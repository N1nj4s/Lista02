document.getElementById("calcularBtn").addEventListener("click", calcularPedido);

function calcularPedido() {
    // Obtém o código do item e a quantidade digitados pelo usuário
    var codigoItem = parseInt(document.getElementById("codigoItem").value);
    var quantidade = parseInt(document.getElementById("quantidade").value);

    // Tabela de preços
    var tabelaPrecos = {
        100: 1.20, // Cachorro quente
        101: 1.30, // Bauru simples
        102: 1.50, // Bauru com ovo
        103: 1.20, // Hambúrguer
        104: 1.30, // Cheeseburguer
        105: 1.00  // Refrigerante
    };

    // Verifica se o código do item é válido
    if (tabelaPrecos.hasOwnProperty(codigoItem)) {
        // Calcula o valor do pedido
        var precoUnitario = tabelaPrecos[codigoItem];
        var valorTotal = precoUnitario * quantidade;

        // Exibe o valor a ser pago
        document.getElementById("resultado").innerHTML = "Valor a ser pago: R$" + valorTotal.toFixed(2);
    } else {
        // Código do item inválido
        document.getElementById("resultado").innerHTML = "Código do item inválido.";
    }
}
