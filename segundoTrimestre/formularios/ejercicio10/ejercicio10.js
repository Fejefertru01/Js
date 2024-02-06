document.querySelectorAll("select")[0].addEventListener("change",function(){
    let lista =document.querySelectorAll("select")[1];
    lista.innerHTML="";
    switch(this.selectedIndex){
        case 1:
            lista.add(new Option("HD 3000", "HD 3000"));
            lista.add(new Option("HD 4000", "HD 4000"));
            lista.add(new Option("IRIS 600", "IRIS 600"));
            break;
        case 2:
            lista.add(new Option("RX Series 500", "RX Series 500"));
            lista.add(new Option("Vegas Series", "Vegas Series"));
            lista.add(new Option("RX Series 6000", "RX Series 6000"));
            break;
        case 3:
            lista.add(new Option("GTX Serie 1000", "GTX Serie 1000"));
            lista.add(new Option("GTX Serie 2000", "GTX Serie 2000"));
            lista.add(new Option("GTX Serie 3000", "GTX Serie 3000"));
            break;
        default:lista
    }
    
})
document.querySelector("button").addEventListener("click",function(){
    let primerSelect=document.querySelectorAll("select")[0];
    let segundoSelect=document.querySelectorAll("select")[1];
    if(primerSelect.value=="" || segundoSelect.value=="") alert("Elige opciones")
})