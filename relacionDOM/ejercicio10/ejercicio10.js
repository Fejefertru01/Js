const divs=document.querySelectorAll("div");
for(let div of divs){
    div.addEventListener("mouseover",function(){
        cambiarColor(this.style.backgroundColor);
    });
    div.addEventListener("mouseleave",function(){
        document.getElementsByTagName("body")[0].style.setProperty("background-color","white");
    });
}

function cambiarColor(color){
    document.getElementsByTagName("body")[0].style.setProperty("background-color",color);
}