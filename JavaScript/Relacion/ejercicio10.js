function unicos(array1, array2) {
  let valoresUnicos = [];
  //EL SET ELIMINA VALORES REPETIDOS EN LOS ARRAYS ORIGINALES
  let array1Unico = [...new Set(array1)];
  let array2Unico = [...new Set(array2)];
  for (let i = 0; i < array1Unico.length; i++) {
    if (array2.indexOf(array1Unico[i]) == -1) {
      valoresUnicos.push(array1Unico[i]);
    }
  }
  for (let i = 0; i < array2Unico.length; i++) {
    if (array1.indexOf(array2Unico[i]) == -1) {
      valoresUnicos.push(array2Unico[i]);
    }
  }
  return valoresUnicos;
}

console.log(unicos([1, 2, 3, 5, 6, 7, 8, 9, 12, 2], [3, 5, 23, 4, 5, 6, 7]));

/**---------INTENTO DE HISTORIA---------------------
 * function CompararArrays(array1, array2) {
  let arrayUnido = array1.concat(array2);
  let arrayFinal = [];
  console.log(arrayUnido);
  for (let i = 0; i < arrayUnido.length; i++) {
    if (!arrayFinal.includes(arrayUnido[i])) {
      arrayFinal.push(arrayUnido[i]);
    } else {
      arrayFinal.pop(arrayUnido[i]);
    }
  }
  console.log(arrayFinal);
  return arrayFinal;
}
let array1 = [1, 2, 3, 4, 5, 9, 6];
let array2 = [1, 3, 5, 6, 8];
console.log(CompararArrays(array1, array2));
 */
/**
 *     do{
        let variable=prompt("Dime lo que quieres añadir al array. Escribe * para parar");
        if(variable!="*"){
        primerArray.push(variable);
        }
    }while(variable!="*");
    var SegundoArray=[];
    do{
        let variable=prompt("Dime lo que quieres añadir al array. Escribe * para parar");
        if(variable!="*"){
        SegundoArray.push(variable);
        }
    }while(variable!="*");
 */
