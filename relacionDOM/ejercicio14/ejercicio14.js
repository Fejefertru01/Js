document.getElementsByTagName("li")[0].addEventListener("click", function () {
    mostrar(0);
});
document.getElementsByTagName("li")[4].addEventListener("click", function () {
    mostrar(1);
});
document.getElementsByTagName("li")[8].addEventListener("click", function () {
    mostrar(2);
});

function mostrar(numero) {
    document.querySelectorAll("li+ul").forEach((elemento) => {
        elemento.style.setProperty("display", "none");
    })
    document.querySelectorAll("body>ul>li")[numero].nextElementSibling.style.setProperty("display", "block");

}