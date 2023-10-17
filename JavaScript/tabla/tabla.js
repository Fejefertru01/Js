function alturaAnchura() {
  let altura = prompt("Dime la altura de la tabla");
  let anchura = prompt("Dime la anchura de la tabla");


  tabla.setAttribute("height", altura);
  tabla.setAttribute("width", anchura);
}

function sumarAlturaAnchura() {
  let altura = parseInt(prompt("Dime la altura de la tabla a sumar"));
  let anchura = parseInt(prompt("Dime la anchura de la tabla a sumar"));

 

  let alturaExistente = parseInt(tabla.getAttribute("height"));
  let anchuraExistente = parseInt(tabla.getAttribute("width"));

  tabla.setAttribute("height", altura + alturaExistente);
  tabla.setAttribute("width", anchura + anchuraExistente);
}

function cambiarBorde() {
  let borde = prompt("Dime que borde quieres");

  tabla.setAttribute("border", borde);
}

function cambiarAlineacion() {

  if (tabla.getAttribute("align") == "left") {
    tabla.setAttribute("align", "center");
  } else if (tabla.getAttribute("align") == "center") {
    tabla.setAttribute("align", "right");
  } else {
    tabla.setAttribute("align", "left");
  }
}

function cambiarCSS() {
  if (tabla.getAttribute("class") == "pakita") {
    tabla.setAttribute("class", "cicio");
  } else {
    tabla.setAttribute("class", "pakita")
  }
}
let tabla = document.getElementsByClassName("pakita")[0];