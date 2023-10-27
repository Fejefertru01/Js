let imagenes = [
    "cabra.jpg",
    "elbichopelao.jpg",
    "kikorivera.jpeg",
    "kikorivera2.jpg",
    "mesi.avif",
];
function siguienteImagen() {
    document.getElementById("botonAnterior").disabled = false;
    let divi = document.getElementById("imagen");
    let ruta = divi.getAttribute("src");
    for (let i = 0; i < imagenes.length; i++) {
        if (ruta.split("/")[4].match(imagenes[i])) {
            if (imagenes[i].match("kikorivera2.jpg")) {
                document.getElementById("botonSiguiente").disabled = true;
            }
            divi.setAttribute(
                "src",
                "/JavaScript/SegundaRelacion/imagenesEj4/" + imagenes[i + 1]
            );


        }
    }
}

function anteriorImagen() {
    document.getElementById("botonSiguiente").disabled = false;
    let divi = document.getElementById("imagen");
    let ruta = divi.getAttribute("src");

    for (let i = 0; i < imagenes.length; i++) {
        if (ruta.split("/")[4].match(imagenes[i])) {
            if (imagenes[i].match("elbichopelao.jpg")) {
                document.getElementById("botonAnterior").disabled = true;
            }
            divi.setAttribute(
                "src",
                "/JavaScript/SegundaRelacion/imagenesEj4/" + imagenes[i - 1]
            );

        }
    }
}
