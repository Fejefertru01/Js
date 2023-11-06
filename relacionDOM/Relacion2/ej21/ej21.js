// 21.- Crea un programa en Javascript que al colocar el ratón encima de cualquier enlace,
// aparezca un div de 200x200px con maquetación en CSS (color de fondo, tamaño de
// letras, relleno, sombra paralela, bordes redondeados...) en la esquina superior derecha de
// la pantalla con el texto: Esto es un enlace.
// b) Mejora el ejercicio anterior para que el mensaje sea: “La URL de este enlace es:
// xxxxxx” (siendo xxxxxx la url del enlace sobre el que se coloca el ratón).

document.querySelectorAll("a").forEach(element =>{
    element.addEventListener("mouseover", function(){
        let div=document.createElement("div");
        p=document.createTextNode(element.textContent + "\n La URL es : " + element.getAttribute("href"));
        div.appendChild(p);
        div.className="cajaAviso"
        document.body.appendChild(div);
    })
    element.addEventListener("mouseleave", function(){
        
        document.body.removeChild(document.querySelectorAll("div")[1]);
    })
})