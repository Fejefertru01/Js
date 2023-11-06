// 19.- En HTML, crea una lista de 3 elementos y el botón “Añadir”. Al pulsar sobre el
// botón, se le pide al usuario que meta una cadena de texto y se creará una nueva entrada
// en la lista con el texto indicado
document.querySelector("input").addEventListener("click", function () {
    anadirAlFondo();
})
document.querySelectorAll("input")[1].addEventListener("click", function () {
    let nuevoli = document.createElement('li');
    let textoli = document.createTextNode(prompt("Introduzca un texto a añadir"));
    nuevoli.appendChild(textoli);
    let listado = document.querySelectorAll("li");
    let posi = -3;
    while (posi == -3) {
        let tempposi = prompt("introduce una posicion valida");
        if (isNaN(tempposi)) {
            posi = -3;
            alert("tus muertos");

        } else {
            if (tempposi < 1 || tempposi > listado.length + 1) {
                posi = -3;
            } else {
                posi = tempposi - 1;
                if (posi == 3) {
                    anadirAlFondo(textoli);
                } else {
                    document.querySelector("ul").insertBefore(nuevoli, listado[posi]);
                }
            }
        }

    }

})
function anadirAlFondo(textoli = "") {
    if (textoli=="") {
        textoli = document.createTextNode(prompt("Introduzca un texto a añadir"));
    }
        let nuevoli = document.createElement('li');
        nuevoli.appendChild(textoli);
        document.querySelector("ul").appendChild(nuevoli);
}