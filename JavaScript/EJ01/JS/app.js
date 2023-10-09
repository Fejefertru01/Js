//Crea una funcion que reciba un array de valores enteros (positivos y negativos) y devuelva otro array con la suma parcial de cada elemento del array que se pasa como parametro

function calcula(){
    let elemento=document.getElementById("resultado");
    let array=[1,3,5,-2,2,-1];
    let suma=0;
    let arraySuma=[];
    array.forEach(function(elemento,indice,array){
        suma+=elemento;
        arraySuma.push(suma);
    });
    elemento.innerHTML=arraySuma;

}

function countBy(){
    let booleano=true;
    let elemento2=document.getElementById("resultado2");
    let arrayNum=[];
    do{
    let num1=prompt("Dime un numero");
    let num2=prompt("Dime otro numero");
    if(isNaN(num1)||isNaN(num2)){
        boolean=false;
    }else{
        boolean=true;
        if(num1<0||num2<0){
            arrayNum=[];
        }else{
            for(let i=1;i<=num2;i++){
            arrayNum.push(num1*i);
            }
        }
    }
}while(boolean==false);
elemento2.innerHTML=arrayNum;
}

function pedirNumero(){
    n = Number(prompt("Dime un numero"));
    var acum=0;
    var matriz= [];
    let elemento3=document.getElementById("resultado3");
    iniciarMatriz(n);
    
    for (let f= 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            acum+=n;
            matriz[f][c] = acum;
        }
    }

    function iniciarMatriz(n){
        for (let f= 0; f < n; f++) {
            matriz.push([]);
        }
    }
    elemento3.innerHTML=matriz;
}
    
