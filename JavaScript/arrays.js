var autos=['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

var items =new Array(1,6);
var items = new Array(6);

var pets =new Array("dog","cat","rabbit");
var pet=pets[0];
console.log(pet);
var people=["Jose","Antonio","Luis","Olga"];
people.length;

let resultado='';
for(i=0;i<people.length;i++){
resultado+=resultado+","+people[i];
}
let pos= people.indexOf("Jose");
console.log(pos);

let copiaArray =people.splice();
copiaArray.forEach(function(elemento,indice,people){
console.log(elemento,indice);
});

//EJERCICIO 7: Crea una funcion que reciba un array de valores enteros(positivos y negativos), y devuelva otro array con la suma parcial de cada elemento del array que se pasa como parametro

let numeros=[1,4,-1,3,5,-2];

function llamame_Array(params){
 for(i=0;i<params.length;i++) {
    alert(params[i])
 }
}