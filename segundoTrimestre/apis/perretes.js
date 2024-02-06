const ruta="https://dog.ceo/api/breeds/image/random"
document.querySelector("button").addEventListener("click",function(){
    salida.innerHTML="";
    let xhr = new XMLHttpRequest();

    xhr.open('GET',ruta);
    
    xhr.addEventListener('load', function(data){
        let respuesta = JSON.parse(data.target.response);
        let imagen = document.createElement("img");
        imagen.src=respuesta.message;
        imagen.setAttribute("width","200px");
        let salida= document.getElementById("salida");
        salida.appendChild(imagen);
        });
    
        xhr.send();

})
