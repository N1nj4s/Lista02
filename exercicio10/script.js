document.getElementById("classificarBtn").addEventListener("click", classificarNadador);

function classificarNadador() {
    // Obtém a idade digitada pelo usuário
    var idade = parseInt(document.getElementById("idade").value);

    // Classifica o nadador com base na idade
    var categoria = "";
    if (idade >= 5 && idade <= 7) {
        categoria = "Infantil A";
    } else if (idade >= 8 && idade <= 10) {
        categoria = "Infantil B";
    } else if (idade >= 11 && idade <= 13) {
        categoria = "Juvenil A";
    } else if (idade >= 14 && idade <= 17) {
        categoria = "Juvenil B";
    } else if (idade >= 18) {
        categoria = "Adulto";
    } else {
        categoria = "Idade não válida para competição";
    }

    // Exibe a categoria do nadador
    document.getElementById("resultado").innerHTML = "Categoria do nadador: " + categoria;
}
