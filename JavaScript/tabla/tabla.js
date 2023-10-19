let tabla = document.getElementsByClassName("pakita")[0];
function alturaAnchura() {
  let altura = prompt("Dime la altura de la tabla");
  let anchura = prompt("Dime la anchura de la tabla");

  tabla.setAttribute("height", altura);
  tabla.setAttribute("width", anchura);
}

function sumarAlturaAnchura() {
  let altura = parseInt(prompt("Dime la altura de la tabla a sumar"));
  let anchura = parseInt(prompt("Dime la anchura de la tabla a sumar"));

  tabla.setAttribute("height", altura + parseInt(tabla.getAttribute("height")));
  tabla.setAttribute("width", anchura + parseInt(tabla.getAttribute("width")));
}

function cambiarBorde() {
  let borde = prompt("Dime que borde quieres");

  tabla.setAttribute("border", borde);
}

function cambiarAlineacion() {
  let valor = tabla.getAttribute("align");
  switch (valor) {
    case "center":
      tabla.setAttribute("align", "right");
      break;
    case "left":
      tabla.setAttribute("align", "center");
      break;
    case "right":
      tabla.setAttribute("align", "left");
      break;
    default:
      tabla.setAttribute("align", "center");
      break;
  }
}

function cambiarCSS() {
  if (tabla.getAttribute("class") == "pakita")  {
    tabla.setAttribute("class", "cicio");
  } else {
    tabla.setAttribute("class", "pakita");
  }
}
