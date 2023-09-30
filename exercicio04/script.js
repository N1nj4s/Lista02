function verificarAnoBissexto() {
    // Obtém o ano digitado pelo usuário
    var ano = parseInt(document.getElementById("ano").value);

    // Verifica se o ano é bissexto
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        document.getElementById("resultado").innerHTML = ano + " é um ano bissexto.";
    } else {
        document.getElementById("resultado").innerHTML = ano + " não é um ano bissexto.";
    }
}
