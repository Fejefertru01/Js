document.getElementsByTagName("button")[0].addEventListener("click", function () {
    boton = this.getAttribute("value");
    cambiarColor(boton);
});
document.getElementsByTagName("button")[1].addEventListener("click", function () {
    boton = this.getAttribute("value");
    cambiarColor(boton);
});
document.getElementsByTagName("button")[2].addEventListener("click", function () {
    boton = this.getAttribute("value");
    cambiarColor(boton);
});
document.getElementsByTagName("button")[3].addEventListener("click", function () {
    boton = this.getAttribute("value");
    cambiarColor(boton);
});
document.getElementsByTagName("button")[4].addEventListener("click", function () {
    boton = this.getAttribute("value");
    cambiarColor(boton);
});

function cambiarColor(boton) {
    document.getElementsByTagName("body")[0].setAttribute("class", boton);
}

