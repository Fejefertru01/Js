document.getElementsByTagName("div")[0].addEventListener("mouseover", function () {
    aparecer();
})
document.getElementsByTagName("div")[0].addEventListener("mouseleave", function () {
    desaparecer();
})

function aparecer() {
    document.getElementsByTagName("div")[1].style.setProperty("visibility", "visible");
}

function desaparecer() {
    document.getElementsByTagName("div")[1].style.setProperty("visibility", "hidden");
}