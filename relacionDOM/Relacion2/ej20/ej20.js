// 20.- En HTML, crea un párrafo con varias lineas de texto, y tres botones: ‘Generar’,
// ‘Borrar Viejo’ , ‘Borrar Nuevos’ (deshabilitado) y ‘Sustituir’. Nada lleva ID así que no
// puedes usar getElementById En CSS, crea dos clases para maquetar el párrafo (pon anchura, altura, borde, tamaño de
// letra...) y haz que el párrafo anterior pertenezca a la primera clase.
// Programa el siguiente funcionamiento de los botones:
// •Generar: cada vez que se pulse, crea un nuevo párrafo similar al que ya existe
// pero   maquetado   con   la   segunda   clase.   Todos   los   párrafos   generados   serán
// hermanos.
// •Borrar Viejo: elimina el párrafo que sale por defecto en la página. Al hacer eso,
// este botón y el botón ‘Sustituir’ quedan bloqueados.
// •Borrar Nuevos: este botón está bloqueado al principio y se desbloquea al pulsar
// el botón ‘Generar’. Su cometido es borrar TODOS los párrafos generados por el
// botón generar.
// •Sustituir: este botón sustituye el párrafo inicial por una tabla de dos filas y dos
// celdas con números en su interior. Recuerda que este botón estará bloqueado si
// se borra el párrafo inicial con el botón ‘Borrar Viejo’
document.querySelectorAll("input")[0].addEventListener("click", function(){
    generar();
    document.querySelectorAll("input")[2].disabled=false;
});
document.querySelectorAll("input")[1].addEventListener("click", function(){
    document.body.removeChild(document.querySelector("input").previousElementSibling);
    this.disabled=true;
    document.querySelectorAll("input")[3].disabled=true;
});
document.querySelectorAll("input")[2].addEventListener("click", function(){
    // document.body.removeChild(document.getElementsByTagName("p")[0]);
    document.querySelectorAll(".clase2").forEach(elemento =>{
        document.body.removeChild(elemento);
    });
    this.disabled=true;
});
document.querySelectorAll("input")[3].addEventListener("click", function(){
    let tabla=document.createElement("table");
    tabla.style.border= "1px solid black";
    let tds=[];
    for (let i = 0; i < 4; i++) {
       td=document.createElement("td");
       td.appendChild(document.createTextNode(i));
       td.style.border="1px solid black";
       tds.push(td);
    }
    let tr1= document.createElement("tr");
    let tr2= document.createElement("tr");
    for (let i = 0; i < tds.length; i++) {
        if(i<2){
            tr1.appendChild(tds[i]);
        }else{
            tr2.appendChild(tds[i]);
        }
    }
    tabla.appendChild(tr1);
    tabla.appendChild(tr2);
    document.body.insertBefore(tabla, document.querySelector("p"));
    document.body.removeChild(document.querySelector("p"));
});
function generar(){
    let nuevop=document.createElement("p");
    let textonuevo="";
    nuevop.setAttribute("class", "clase2");
    if(document.getElementsByTagName("p").length!=0){
      textonuevo=document.createTextNode(document.getElementsByTagName("p")[0].textContent);
    }else{
        textonuevo=document.createTextNode("Estoy aqui para salvarte el culo");
    }
    console.log(nuevop);
    nuevop.appendChild(textonuevo);
    parrafos=document.getElementsByTagName("p");
    console.log(parrafos)
    document.body.appendChild(nuevop);
}
