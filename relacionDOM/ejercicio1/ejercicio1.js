document
  .getElementsByTagName("button")[0]
  .addEventListener("click", function () {
    mostrarURL();
  });

document
  .getElementsByTagName("button")[1]
  .addEventListener("click", function () {
    cambiarURL();
  });
function mostrarURL() {
  let enlace = document.getElementsByTagName("a")[0].href;
  document.getElementById("resultado").innerHTML =
    "El enlace del boton es " + enlace;
  console.log(enlace);
}
function cambiarURL() {
  if (
    document.getElementsByTagName("a")[0].getAttribute("href") ==
    "https://www.youtube.com/"
  ) {
    document.getElementsByTagName("a")[0].href = "https://www.google.es/";
  } else {
    document.getElementsByTagName("a")[0].href = "https://www.youtube.com/";
  }

  document.getElementById("resultado").innerHTML = "He cambiado";
}
