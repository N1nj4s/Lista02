document.getElementById("calcularBtn").addEventListener("click", calcularEquacao);

function calcularEquacao() {
    // Obtém os coeficientes da equação
    var a = parseFloat(document.getElementById("coeficienteA").value);
    var b = parseFloat(document.getElementById("coeficienteB").value);
    var c = parseFloat(document.getElementById("coeficienteC").value);

    // Calcula o Delta
    var delta = b * b - 4 * a * c;

    // Verifica se Delta é negativo
    if (delta < 0) {
        document.getElementById("resultado").innerHTML = "Não é possível calcular os valores de x, Delta é negativo: " + delta;
    } else {
        // Calcula x' e x''
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);

        document.getElementById("resultado").innerHTML = "Delta: " + delta + "<br>";
        document.getElementById("resultado").innerHTML += "x' (x1): " + x1 + "<br>";
        document.getElementById("resultado").innerHTML += "x'' (x2): " + x2;
    }
}
