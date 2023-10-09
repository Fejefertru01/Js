


function Sumar(){
    validos=true;
    do{
        let a= prompt("Elige el primer numero");
        let b= prompt("Elige el segundo numero");
        if(isNaN(a)||isNaN(b)){
            alert("Introduce numeros por favor");
            validos=false;
        }else{
            a=Number(a);
            b=Number(b);
            alert("La suma es: "+(a+b));
            document.getElementById("resultado").innerHTML="La suma de "+a+" y "+b+ " es: "+(a+b);
            validos=true;
        }
    }while(validos==false);

}
function Restar(){
    validos=true;
    do{
        let a= prompt("Elige el primer numero");
        let b= prompt("Elige el segundo numero");
        if(isNaN(a)||isNaN(b)){
            alert("Introduce numeros por favor");
            validos=false;
        }else{
            a=Number(a);
            b=Number(b);
            alert("La resta es: "+(a-b));
            document.getElementById("resultado").innerHTML="La resta de "+a+" y "+b+ " es: "+(a-b);
            validos=true;
        }
    }while(validos==false);

}
function Multiplicar(){
    validos=true;
    do{
        let a= prompt("Elige el primer numero");
        let b= prompt("Elige el segundo numero");
        if(isNaN(a)||isNaN(b)){
            alert("Introduce numeros por favor");
            validos=false;
        }else{
            a=Number(a);
            b=Number(b);
            alert("La multiplicacion es: "+(a*b));
            document.getElementById("resultado").innerHTML="La multiplicacion de "+a+" y "+b+ " es: "+(a*b);
            validos=true;
        }
    }while(validos==false);

}
function Dividir(){
    validos=true;
    do{
        let a= prompt("Elige el primer numero");
        let b= prompt("Elige el segundo numero");
        if(isNaN(a)||isNaN(b)){
            alert("Introduce numeros por favor");
            validos=false;
        }else{
            a=Number(a);
            b=Number(b);
            alert("La division es: "+(a/b));
            document.getElementById("resultado").innerHTML="La division de "+a+" y "+b+ " es: "+(a/b);
            validos=true;
        }
    }while(validos==false);

}
function Potencia(){
    validos=true;
    do{
        let a= prompt("Elige el primer numero");
        let b= prompt("Elige el segundo numero");
        if(isNaN(a)||isNaN(b)){
            alert("Introduce numeros por favor");
            validos=false;
        }else{
            a=Number(a);
            b=Number(b);
            alert("La potencia es: "+(a**b));
            document.getElementById("resultado").innerHTML="La potencia de "+a+" y "+b+ " es: "+(a**b);
            validos=true;
        }
    }while(validos==false);

}
function Modulo(){
    validos=true;
    do{
        let a= prompt("Elige el primer numero");
        let b= prompt("Elige el segundo numero");
        if(isNaN(a)||isNaN(b)){
            alert("Introduce numeros por favor");
            validos=false;
        }else{
            a=Number(a);
            b=Number(b);
            alert("El modulo es: "+(a%b));
            document.getElementById("resultado").innerHTML="El modulo de "+a+" y "+b+ " es: "+(a%b);
            validos=true;
        }
    }while(validos==false);

}
function Incremento(){
    validos=true;
    do{
        let a= prompt("Elige el numero a incrementar");
        if(isNaN(a)){
            alert("Introduce numeros por favor");
            validos=false;
        }else{
            a=Number(a);
            alert("El incremento es: "+(++a));
            document.getElementById("resultado").innerHTML="El incremento de "+(--a)+" es: "+(++a);
            validos=true;
        }
    }while(validos==false);

}
function Decremento(){
    validos=true;
    do{
        let a= prompt("Elige el numero a decrementar");
        if(isNaN(a)){
            alert("Introduce numeros por favor");
            validos=false;
        }else{
            a=Number(a);
            alert("El decremento es: "+(--a));
            document.getElementById("resultado").innerHTML="El decremento de "+(++a)+" es: "+(--a);
            validos=true;
        }
    }while(validos==false);

}