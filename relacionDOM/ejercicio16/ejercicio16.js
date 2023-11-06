document.querySelectorAll("button")[0].addEventListener("click",function () {       
        meter=setInterval("cargarMeter()",200);
        this.disabled=true;

});
document.querySelectorAll("button")[1].addEventListener("click",function () {       
    progress=setInterval("cargarProgress()",200);
    this.disabled=true;

});


function cargarMeter() {
    let random=Math.floor((Math.random()*6)+1);
    let progreso=document.getElementsByTagName("meter")[0];
    progreso.value=(parseInt(progreso.value)+parseInt(random));
    console.log(progreso.value);

    if(progreso.value>=100){
        clearInterval(meter);
        setTimeout(()=>{alert("Descarga completa!");
        progreso.value=0;},100);
        document.querySelectorAll("button")[0].disabled=false;
        
    }
}
function cargarProgress() {
    let random=Math.floor((Math.random()*6)+1);
    let progreso=document.getElementsByTagName("progress")[0];
    progreso.value=(parseInt(progreso.value)+parseInt(random));
    console.log(progreso.value);

    if(progreso.value>=100){
        clearInterval(progress);
        setTimeout(()=>{
            alert("Carga completa!");
            progreso.value=0;
        },100);
        
        document.querySelectorAll("button")[1].disabled=false;
    }
}

var meter="";
var progress="";