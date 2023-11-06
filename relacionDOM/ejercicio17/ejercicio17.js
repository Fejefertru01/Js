document.querySelectorAll("input")[0].addEventListener("click", function(){
carrera();
});
document.querySelectorAll("input")[1].addEventListener("click", function(){
resetear();
    });

function correr(){

    let divs=document.querySelectorAll("div");
    for(let div of divs){
        let avance =random();

        if(parseInt(div.style.left)+ parseInt(div.offsetWidth)+avance>parseInt(window.innerWidth)){
            div.style.left=window.innerWidth-parseInt(div.offsetWidth)+"px";

            setTimeout(()=>{alert("Ha ganado "+div.textContent);},100);
            clearInterval(tiempo);
            
        }else{
            div.style.left=(avance+parseInt(div.style.left)+"px");
        }
    }

}
function carrera(){
    document.getElementsByTagName("input")[0].disabled=true;
 tiempo=setInterval('correr()',10);

}
function random(){
    return Math.floor(Math.random()*10+1);
}
function resetear(){
    document.querySelectorAll("div").forEach((div)  =>{
        div.style.left="0px";
        console.log("jeje");
    });
    clearInterval(tiempo);
    document.getElementsByTagName("input")[0].disabled=false;

}
var tiempo;