let nombre="Fernando";
let a=2;
let b= '3';
let ok=true;
console.log(ok);
console.log(typeof nombre);
console.log(typeof a);
console.log(nombre);
console.log(a+nombre);

let simbolo=Symbol("mi simbolo");
console.log(typeof simbolo);
if(a>=18){
    console.log("Persona adulta");
}else{
console.log("Persona no adulta");
}

let hora=4;
if(hora>6 && hora<=12){
    console.log("Buenos dias");
}else if(hora>12 && hora<21){
console.log("Buenas tardes");
}else if(hora>=21 && hora<=24){
    console.log("Buenas noches");
}else if(hora>=0 && hora<=6){
console.log("Sobando");
}else{
    console.log("No existe esa hora");
}

let num=4;
if(num%2==0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar");
}

let resultado =(3>2)? "Verdadero" :"Falso";
console.log(resultado);


let z=2;
let x='2';

if(isNaN(z)){
    console.log("No es un numero");
}else{
    console.log("Es un numero ")
}

let minumero="18";
let edad=Number(minumero);


let contador=0;
while(contador<3){
    console.log(contador);
    contador++;
}
contador=0;
do{
    console.log(contador);
    contador++;
}while(contador<4);

for(contador=0;contador<3;contador++){
    console.log(contador);
}



let mes=11;
let estacion="Desconocida";
switch(mes){
    case 1:
    case 2:
    case 3:
        estacion="Invierno";
        break;
    case 4:
    case 5:
    case 6:
        estacion="Primavera";
        break;
    case 7:
    case 8:
    case 9:
        estacion="Verano";
        break;
    case 10:
    case 11:
    case 12:
        estacion="Otoño"
        break;
    default:
        estacion="Desconocida";
        break;
}
console.log(estacion);

for(let conta=0;conta<=10;conta++){

    if(conta %2!==0){
        console.log(conta);
        break;
    }
}

let objeto={
    nombre:"Fernando",
    apellido:"Fernandez"
}
console.log(objeto);

class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

let marcaCoches=['BMW','Audi','Renault','Ford'];
console.log(typeof marcaCoches);
console.log(marcaCoches);

function Saludar(){
    console.log("Hola");
}
xx=9;
yy=10;
function miFuncion(xx,yy){
    console.log("suma: "+(xx,yy));
}
console.log(typeof miFuncion);
miFuncion(xx,yy);