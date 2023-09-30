let button = document.querySelector("button");
button.addEventListener('click', () => {
    let num1 = Number (document.getElementById("num1").value);
    let num2 = Number (document.getElementById("num2").value);
    let h2 = document.querySelector("h2");
    if (num1 > num2)
     h2.innerHTML = `${num1} é maior que ${num2}`;
    else
     if (num2 > num1)
     h2.innerHTML = `${num2} é maior que ${num1}`;
    else
    h2.innerHTML = "os números são iguais";
});