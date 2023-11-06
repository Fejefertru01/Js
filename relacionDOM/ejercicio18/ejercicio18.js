document.querySelectorAll("button")[0].addEventListener("click",function () {       
    progreso=setInterval("cargarBarra()",200);
    this.disabled=true;
    console.log("entre");
});


function cargarBarra(){
    let random=Math.floor((Math.random()*10)+5);
    let progress=document.getElementsByTagName("progress")[0];
    progress.value=(parseInt(progress.value)+parseInt(random));
    console.log(progress.value);

    if(progress.value>=100){
        contador++;
        clearInterval(progreso);
        setTimeout(()=>{
            progress.value=0;
        },100);
        document.querySelectorAll("div")[0].textContent=contador+" Monedas";
        document.querySelectorAll("button")[0].disabled=false;
    }

}

var progreso="";
var contador=0;