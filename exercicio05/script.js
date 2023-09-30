// Função para verificar se a e b são múltiplos
function verificarMultiplos() {
    // Obtém os valores digitados pelo usuário
    var valorA = parseInt(document.getElementById("valorA").value);
    var valorB = parseInt(document.getElementById("valorB").value);

    // Verifica se a e b são múltiplos
    if (valorA % valorB === 0 || valorB % valorA === 0) {
        document.getElementById("resultado").innerHTML = "São múltiplos.";
    } else {
        document.getElementById("resultado").innerHTML = "Não são múltiplos.";
    }
}

// Adiciona um ouvinte de evento para o botão
document.getElementById("verificarBtn").addEventListener("click", verificarMultiplos);
