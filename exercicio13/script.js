document.getElementById("verificarBtn").addEventListener("click", verificarTriangulo);

function verificarTriangulo() {
    // Obtém os valores dos lados digitados pelo usuário
    var ladoA = parseFloat(document.getElementById("ladoA").value);
    var ladoB = parseFloat(document.getElementById("ladoB").value);
    var ladoC = parseFloat(document.getElementById("ladoC").value);

    // Verifica se os lados formam um triângulo
    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        // Verifica o tipo de triângulo
        if (ladoA === ladoB && ladoB === ladoC) {
            document.getElementById("resultado").innerHTML = "É um triângulo equilátero.";
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            document.getElementById("resultado").innerHTML = "É um triângulo isósceles.";
        } else {
            document.getElementById("resultado").innerHTML = "É um triângulo escaleno.";
        }
    } else {
        // Não é um triângulo
        document.getElementById("resultado").innerHTML = "Não compõe um triângulo.";
    }
}
