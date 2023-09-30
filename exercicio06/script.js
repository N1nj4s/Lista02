// Função para encontrar o maior valor entre três números
function encontrarMaiorValor() {
    // Obtém os valores digitados pelo usuário
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var valor3 = parseInt(document.getElementById("valor3").value);

    // Encontra o maior valor
    var maiorValor = Math.max(valor1, valor2, valor3);

    // Exibe o resultado
    document.getElementById("resultado").innerHTML = "O maior valor é: " + maiorValor;
}

// Adiciona um ouvinte de evento para o botão
document.getElementById("encontrarBtn").addEventListener("click", encontrarMaiorValor);
