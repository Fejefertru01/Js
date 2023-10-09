//let returnedArray=[];
function pedirNumeros(){ 
    let returnedArray=[] ; 
    let contador=0;
    do{
   let num=prompt("Dime un numero");
   if(num=="*"){
    contador=10;
   }else{
    num=Number(num);
    if(isNaN(num)){
        alert("Introduzca numeros por favor");
    }else{
        returnedArray.push(num);
        contador++;
    }
    
   }
}while(contador<9);
console.log(returnedArray);
return returnedArray;
}

function calcula(){
    let arrayEntrada=pedirNumeros();

    calculaResultado(arrayEntrada);
}

function calculaResultado(arrEntrada){
    let returnedArray=[];
    let elem;
    //opcion 1
    for(let i=0;i<arrEntrada.length;i++){
        returnedArray[i]=new Array(arrEntrada.length);
        for(let j=0;j<arrEntrada.length;j++){
            returnedArray[i][j]=arrEntrada[i]*(j+1);
        }
    }
    //opcion 2
    /**
     * let contador=1;
     * for(let i=0;i<arrEntrada.length;i++){
     * returnedArray[i].push(arrEntrada[i]*contador);
     * contador++;
     * }
     */

    //o1
    pintaResultado(returnedArray);

    //o2
    //pintaResultadoSinParametro();
}

function pintaResultado(arrMatriz){
    let elem;
    let longitud=arrMatriz.length;
    for(var i=0;i<longitud;i++){
        switch(i){
            case 0:
                elem=document.getElementById("resultado1");
                break;
            case 1:
                elem=document.getElementById("resultado2");
                break;
            case 2:
                elem=document.getElementById("resultado3");
                break;
            case 3:
                elem=document.getElementById("resultado4");
                break;
            case 4:
                elem=document.getElementById("resultado5");
                break;
            case 5:
                elem=document.getElementById("resultado6");
                break;
            case 6:
                elem=document.getElementById("resultado7");
                break;
            case 7:
                elem=document.getElementById("resultado8");
                break;
            case 8:
                elem=document.getElementById("resultado9");
                break;
            case 9:
                elem=document.getElementById("resultado10");
                break;
        }
        console.log("Array"+i+" "+arrMatriz[i]);
        elem.innerHTML=arrMatriz[i]; 
    }
}
function pintaResultadoMatriz(retArray){
    let elem;
    let resultado="";

    for(let i=0;i<retArray.length;i++){
        for(let j=0;j<retArray[i].length;j++){
            document.write(retArray[i][j]+" ");
        }
        document.write("<br>");
    }
    console.log("Array: "+resultado);
}
