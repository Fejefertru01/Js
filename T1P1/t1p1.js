function ejercicio1() {
  let cantidad = 0;
  do {
    cantidad = prompt("Introduce la cantidad en gramos");
    if (cantidad <= 0) alert("El numero debe ser positivo");
    if (isNaN(cantidad)) alert("Introduzca numeros por favor");
  } while (cantidad <= 0 || isNaN(cantidad));
  alert(cantidad + " gramo/s equivalen a " + cantidad / 1000 + " kilogramo/s");
}

function ejercicio2() {
  let n1,
    n2,
    n3,
    n4,
    n5,
    n6,
    n7,
    n8,
    n9,
    n10 = 0;
  let sumatorio = 0;
  let contador = 0;
  let salida = " ";
  let superanDobleMedia = " ";
  do {
    n1 = prompt("Dime un numero");
    if (isNaN(n1) || n1 < 0) {
      alert("Tienes que introducir numeros positivos");
    } else {
      sumatorio += parseFloat(n1);
      contador++;
    }
  } while (contador < 1);
  do {
    n2 = prompt("Dime un numero");
    if (isNaN(n2) || n2 < 0) {
      alert("Tienes que introducir numeros positivos");
    } else {
      sumatorio += parseFloat(n2);
      contador++;
    }
  } while (contador < 2);

  do {
    n3 = prompt("Dime un numero");
    if (isNaN(n3) || n3 < 0) {
      alert("Tienes que introducir numeros positivos");
    } else {
      sumatorio += parseFloat(n3);
      contador++;
    }
  } while (contador < 3);

  do {
    n4 = prompt("Dime un numero");
    if (isNaN(n4) || n4 < 0) {
      alert("Tienes que introducir numeros positivos");
    } else {
      sumatorio += parseFloat(n4);
      contador++;
    }
  } while (contador < 4);
  do {
    n5 = prompt("Dime un numero");
    if (isNaN(n5) || n5 < 0) {
      alert("Tienes que introducir numeros positivos");
    } else {
      sumatorio += parseFloat(n5);
      contador++;
    }
  } while (contador < 5);
  do {
    n6 = prompt("Dime un numero");
    if (isNaN(n6) || n6 < 0) {
      alert("Tienes que introducir numeros positivos");
    } else {
      sumatorio += parseFloat(n6);
      contador++;
    }
  } while (contador < 6);
  do {
    n7 = prompt("Dime un numero");
    if (isNaN(n7) || n7 < 0) {
      alert("Tienes que introducir numeros positivos");
    } else {
      sumatorio += parseFloat(n7);
      contador++;
    }
  } while (contador < 7);
  do {
    n8 = prompt("Dime un numero");
    if (isNaN(n8) || n8 < 0) {
      alert("Tienes que introducir numeros positivos");
    } else {
      sumatorio += parseFloat(n8);
      contador++;
    }
  } while (contador < 8);
  do {
    n9 = prompt("Dime un numero");
    if (isNaN(n9) || n9 < 0) {
      alert("Tienes que introducir numeros positivos");
    } else {
      sumatorio += parseFloat(n9);
      contador++;
    }
  } while (contador < 9);
  do {
    n10 = prompt("Dime un numero");
    if (isNaN(n10) || n10 < 0) {
      alert("Tienes que introducir numeros positivos");
    } else {
      sumatorio += parseFloat(n10);
      contador++;
    }
  } while (contador < 10);
  if (n1 > parseFloat(sumatorio) / 10) {
    salida += n1 + " ";
    if (n1 > (parseFloat(sumatorio) / 10) * 2) {
      superanDobleMedia = n1 + " ";
    }
  }
  if (n2 > parseFloat(sumatorio) / 10) {
    salida += n2 + " ";
    if (n2 > (parseFloat(sumatorio) / 10) * 2) {
      superanDobleMedia = n2 + " ";
    }
  }
  if (n3 > parseFloat(sumatorio) / 10) {
    salida += n3 + " ";
    if (n3 > (parseFloat(sumatorio) / 10) * 2) {
      superanDobleMedia = n3 + " ";
    }
  }
  if (n4 > parseFloat(sumatorio) / 10) {
    salida += n4 + " ";
    if (n4 > (parseFloat(sumatorio) / 10) * 2) {
      superanDobleMedia = n4 + " ";
    }
  }
  if (n5 > parseFloat(sumatorio) / 10) {
    salida += n5 + " ";
    if (n5 > (parseFloat(sumatorio) / 10) * 2) {
      superanDobleMedia = n5 + " ";
    }
  }
  if (n6 > parseFloat(sumatorio) / 10) {
    salida += n6 + " ";
    if (n6 > (parseFloat(sumatorio) / 10) * 2) {
      superanDobleMedia = n6 + " ";
    }
  }
  if (n7 > parseFloat(sumatorio) / 10) {
    salida += n7 + " ";
    if (n7 > (parseFloat(sumatorio) / 10) * 2) {
      superanDobleMedia = n7 + " ";
    }
  }
  if (n8 > parseFloat(sumatorio) / 10) {
    salida += n8 + " ";
    if (n8 > (parseFloat(sumatorio) / 10) * 2) {
      superanDobleMedia = n8 + " ";
    }
  }
  if (n9 > parseFloat(sumatorio) / 10) {
    salida += n9 + " ";
    if (n9 > (parseFloat(sumatorio) / 10) * 2) {
      superanDobleMedia = n9 + " ";
    }
  }
  if (n10 > parseFloat(sumatorio) / 10) {
    salida += n10 + " ";
    if (n10 > (parseFloat(sumatorio) / 10) * 2) {
      superanDobleMedia = n10 + " ";
    }
  }

  alert(
    "La media es: " +
      parseFloat(sumatorio) / 10 +
      " Los que superan la media son: " +
      salida +
      ". Los que superan el doble de la media son: " +
      superanDobleMedia
  );
}

function ejercicio3() {
  let numero = 0;
  let arrayNumeros = [];
  let mensaje = " ";
  let superanMedia = " ";
  let sumatorio = 0;
  let media = 0;
  do {
    numero = prompt("Dime el tamaño del array");
    parseInt(numero);
    if (numero < 5 || numero > 10) alert("Introduzca un numero entre 5 y 10");
    if (isNaN(numero)) alert("Introduzca numeros por favor");
  } while (numero < 5 || numero > 10 || isNaN(numero));
  for (let i = 0; i < numero; i++) {
    arrayNumeros.push(Math.floor(Math.random() * 10));
    mensaje += arrayNumeros[i] + " ";
    sumatorio += parseInt(arrayNumeros[i]);
  }
  media = sumatorio / numero;
  for (let i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] > media) superanMedia += arrayNumeros[i] + " ";
  }
  console.log(mensaje);
  console.log("Los valores que superan la media son: " + superanMedia);
}

function ejercicio4() {
  let numero = 0;
  let array = [];
  let mensaje = "";
  let suma = 0;
  let resultado = [[], []];
  do {
    numero = prompt("Dime un numero positivo entre dos y cinco");
    parseInt(numero);
  } while (numero < 2 || numero > 5 || isNaN(numero));
  for (i = 0; i < numero; i++) {
    array[i] = [];
    for (j = 0; j < numero; j++) {
      array[i][j] = Math.floor(Math.random() * 99 + 1);
    }
  }
  console.log("Matriz: ");
  for (i = 0; i < numero; i++) {
    for (j = 0; j < numero; j++) {
      if (array[i][j] < 10) {
        mensaje += "0" + array[i][j] + " ";
      } else {
        mensaje += array[i][j] + " ";
      }
      suma += parseInt(array[i][j]);
    }
    mensaje += "\n";
  }
  console.log(mensaje);
  console.log(
    "La media de todos los numeros de la matriz es: " +
      parseInt(suma) / (numero * numero)
  );

  for (i = 0; i < numero; i++) {
    for (j = 0; j < numero; j++) {
      if (array[i][j] > parseInt(suma) / (numero * numero)) {
        resultado[0].push(array[i][j]);
      } else {
        resultado[1].push(array[i][j]);
      }
    }
  }
  mensaje = "";
  for (i = 0; i < 2; i++) {
    for (j = 0; j < resultado[i].length; j++) {
      if (resultado[i][j] < 10) {
        mensaje += "0" + resultado[i][j] + " ";
      } else {
        mensaje += resultado[i][j] + " ";
      }
    }
    mensaje += "\n";
  }
  console.log("Matriz resultado:");
  console.log(mensaje);

  let ordenar;
  do {
    ordenar = prompt(
      "Introduzca 0 o 1 para ordenar el array resultado. 0 para ascendente y 1 para descendente"
    );
  } while (ordenar < 0 || ordenar > 1 || isNaN(ordenar));
  mensaje = "";
  console.log("La matriz ordenada queda asi : ");
  if (ordenar == 0) {
    const primeraFila = [...resultado[0]];
    mensaje =
      primeraFila.sort(function (a, b) {
        return a - b;
      }) + " ";
    mensaje += "\n";
    const segundaFila = [...resultado[1]];
    mensaje +=
      segundaFila.sort(function (a, b) {
        return a - b;
      }) + " ";
  } else {
    const primeraFila = [...resultado[0]];
    mensaje =
      primeraFila.reverse(function (a, b) {
        return b - a;
      }) + " ";
    mensaje += "\n";
    const segundaFila = [...resultado[1]];
    mensaje +=
      segundaFila.reverse(function (a, b) {
        return b - a;
      }) + " ";
  }
  console.log(mensaje);
}
