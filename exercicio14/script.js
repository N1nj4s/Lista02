document.getElementById("calcularBtn").addEventListener("click", calcularPesoIdeal);

function calcularPesoIdeal() {
    // Obtém a altura e idade digitados pelo usuário
    var altura = parseFloat(document.getElementById("altura").value);
    var idade = parseInt(document.getElementById("idade").value);

    // Obtém o sexo selecionado pelo usuário
    var sexo = document.querySelector('input[name="sexo"]:checked');

    if (!sexo) {
        // Se nenhum sexo estiver selecionado, exibe uma mensagem de erro
        document.getElementById("resultado").innerHTML = "Selecione o sexo.";
        return;
    }

    sexo = sexo.value;

    // Calcula o peso ideal com base nas fórmulas
    var pesoIdeal = 0;

    if (sexo === "M") {
        if (altura > 1.70) {
            if (idade <= 20) {
                pesoIdeal = (72.7 * altura) - 58;
            } else if (idade >= 21 && idade <= 39) {
                pesoIdeal = (72.7 * altura) - 53;
            } else if (idade >= 40) {
                pesoIdeal = (72.7 * altura) - 45;
            }
        } else {
            if (idade <= 40) {
                pesoIdeal = (72.7 * altura) - 50;
            } else {
                pesoIdeal = (72.7 * altura) - 58;
            }
        }
    } else if (sexo === "F") {
        if (altura > 1.50) {
            if (idade >= 35) {
                pesoIdeal = (62.1 * altura) - 45;
            } else {
                pesoIdeal = (62.1 * altura) - 49;
            }
        } else {
            pesoIdeal = (62.1 * altura) - 44.7;
        }
    }

    // Exibe o peso ideal
    document.getElementById("resultado").innerHTML = "Peso Ideal: " + pesoIdeal.toFixed(2) + " kg";
}
