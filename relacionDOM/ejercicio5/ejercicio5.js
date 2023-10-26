document.getElementsByTagName("p")[0].addEventListener("click", function () { 
    cambiarCSS() 
});

function cambiarCSS(){

    if(document.getElementsByTagName("p")[0].getAttribute("class")=="uno"){
        document.getElementsByTagName("p")[0].setAttribute("class","dos");
    }else{
        document.getElementsByTagName("p")[0].setAttribute("class","uno");
    }
    
}