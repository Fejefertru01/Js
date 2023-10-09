function Sumar(){
let valido=true;
do{

let a= prompt("Dime el primer numero");
let b =prompt("Dime el segundo numero");
a=Number(a);
b=Number(b);
if(isNaN(a)||isNaN(b)){
    alert("Introduce numeros por favor");
    valido=false;
}else{
    alert("La suma es: "+(a+b)); 
    valido=true;
}
}while(valido==false);

}

function miConcatenado(separator){
    var result ="";
    var i;
    for(i=1;i<arguments.length;i++){
        result+=arguments[i]+separator;
    }
    console.log(result);
    return result;
}
miConcatenado(",","red","orange","blue");

