let button = document.querySelector("button");
button.addEventListener('click', () => {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value)
    let h2 = document.querySelector("h2");
    let media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10;
    if (media >= 7)
     h2.innerHTML = `a média é ${media},APROVADO`;
    else
     if (media >= 5)
     h2.innerHTML = `a média é ${media},EM RECUPERAÇÃO`;
    else
    h2.innerHTML = `a média é ${media},REPROVADO`;
});