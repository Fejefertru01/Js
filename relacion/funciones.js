function ejercicio6() {
  var num;
  do {
    num = prompt("Dime un numero mayor a 0");
    if (num <= 0) {
      alert("El numero debe ser mayor a 0");
    }
    if (isNaN(num)) {
      num = -1;
      alert("Introduzca numeros por favor");
    }
  } while (num <= 0);
  console.log("Divisiores de " + num + ": ");
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      console.log(i + " ");
    }
  }
  console.log("\nSuma de los cuadrados de los divisores:");
  var suma = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      suma += i * i;
    }
  }
  console.log(suma);
  if (Math.sqrt(suma) % 1 === 0) {
    alert("El numero es un cuadrado");
  }
}

function ejercicio7() {
  var arrayValores = [];
  var arrayFinal = [];
  var numero;
  do {
    numero = prompt("Introduzca numeros. Cuando haya acabado escriba *");
    if (numero != "*") {
      if (isNaN(numero)) {
        alert("Introduce valores por favor");
      } else {
        arrayValores.push(parseInt(numero));
      }
    }
  } while (numero != "*");

  for (i = 0; i < arrayValores.length; i++) {
    if (i == 0) {
      arrayFinal.push(arrayValores[i]);
    } else {
      arrayFinal.push(arrayFinal[i - 1] + arrayValores[i]);
    }
  }
  console.log(
    "Para el array " +
      arrayValores +
      " , el array resultante sera : " +
      arrayFinal
  );
}

function ejercicio8() {
  let booleano = true;
  let arrayNum = [];
  do {
    let num1 = prompt("Dime un numero");
    let num2 = prompt("Dime otro numero");
    if (isNaN(num1) || isNaN(num2)) {
      boolean = false;
    } else {
      boolean = true;
      if (num1 < 0 || num2 < 0) {
        console.log(arrayNum);
      } else {
        for (let i = 1; i <= num2; i++) {
          arrayNum.push(num1 * i);
        }
        console.log(arrayNum);
      }
    }
  } while (boolean == false);
}

function ejercicio9() {
  var numero = 0;
  do {} while (numero < 2);
}

function ejercicio9() {
  let num;
  let array1 = [];
  let cont = 1;

  do {
    num = prompt("Dime un numero positivo mayor que dos");
    parseInt(num);
  } while (num <= 2 || isNaN(num));
  for (i = 0; i < num; i++) {
    array1[i] = [];
    for (j = 0; j < num; j++) {
      array1[i][j] = num * cont;
      cont++;
    }
  }
  console.log(array1);
}

function ejercicio10() {
  function repe(lista1, item) {
    let cantidad = 0;
    for (let i = 0; i < lista1.length; i++) {
      if (lista1[i] === item) cantidad++;
    }
    let res = cantidad > 1 ? true : false;
    return res;
  }
  function eliminarRepes(lista1, lista2) {
    let res = [];
    let grande = [...lista1, ...lista2];
    for (let elemento of grande)
      if (!repe(grande, elemento)) res.push(elemento);
    return res;
  }
  let p = [1, 1, 1, 2, 3, 2, 2, 2, 3, 4, 5, 3];
  let p2 = [2, 1, 2, 1, 3, 3123, 3213, 3, 33];
  let res = eliminarRepes(p, p2);
  for (let v of res) console.log(v);
}
ejercicio10();

/**
 * function quitarRepetidos(array1, array2) {
    let array_unido = array1.concat(array2);
    let array_final = comprobarRepetidos(array_unido);

    console.log(array_final);
}

function comprobarRepetidos(array_unido) {

    let contador = 0;
    let array_final = [];
    do {
        let repetido = false;
        let numero = array_unido[contador];
        for (let i = array_unido.indexOf(numero) + 1; i < array_unido.length; i++) {
            if (numero == array_unido[i]) {
                repetido = true;
                break;
            }
        }
        if (!repetido) {
            array_final.push(numero);
        }
        contador++;
    } while (contador < array_unido.length);

    return array_final;
}

let array1 = [77, "ciao"];
let array2 = [78, 42, "ciao"];
quitarRepetidos(array1, array2);
 */

function ejercicio15() {
  let numMesas = 0;
  let comensales = 0;
  let mesas = [];
  do {
    numMesas = prompt("Dime el numero de mesas que hay en el restaurante");
    parseInt(numMesas);
  } while (numMesas < 1 || isNaN(numMesas));

  for (let i = 0; i < numMesas; i++) {
    mesas.push(parseInt(Math.floor(Math.random() * 5)));
  }
  console.log("Estado de las mesas: " + mesas);

  do {
    let comensalesSentados = false;
    comensales = prompt("Cuantos clientes sois");
    parseInt(comensales);

    if (isNaN(comensales)) {
      alert("Por favor introduzca numeros");
    } else if (comensales > 4) {
      alert("El maximo por mesa son 4. Introduzca otro numero por favor");
    } else {

      if (comensales > 0) {
        for (let i = 0; i < mesas.length; i++) {
          if (mesas[i] == 0) {
            console.log("Por favor sientese en la mesa " + i);
            mesas[i] = comensales;
            console.log("Estado de las mesas: " + mesas);
            comensalesSentados = true;
            break;
          }
        }
        if (!comensalesSentados) {

          for (let i = 0; i < mesas.length; i++) {
            let totalMesa=parseInt (mesas[i])+parseInt(comensales);
            if (totalMesa <= 4) {
              console.log("Por favor sientense en la mesa " + (i + 1));
              mesas[i] = totalMesa;
              console.log("Estado de las mesas: " + mesas);
              comensalesSentados = true;
              break;
            }
          }
          
        }

        if (!comensalesSentados) {
          console.log("No hay hueco en el bar, lo siento");
        }
      }
    }
  } while (comensales > 0);
}
