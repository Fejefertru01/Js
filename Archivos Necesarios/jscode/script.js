document.getElementsByName("email")[0].addEventListener("blur", function () {//Copio lo que tengo en el email en la copia email
    document.getElementsByName("remail")[0].value = this.value;
})

document.querySelectorAll("input[type='checkbox']").forEach(function (element) {//Introduzco los checkbox marcados al textarea
    element.addEventListener("change", function () {

        if (element.value != "on") {//Hago esta condicion para que el checkbox de aceptar las condiciones no se vea afectado
            let texto = document.querySelector("textarea").value;
            if (element.checked) {
                document.querySelector("textarea").value = texto + element.value + "\n";
            } else {
                let lista = document.querySelector("textarea").value.split("\n");
                let posicion = lista.indexOf(element.value);
                lista.splice(posicion, 1);
                document.querySelector("textarea").value = "";
                for (let i = 0; i < lista.length; i++) {
                    let palabra = lista[i];
                    if (palabra != "") {
                        document.querySelector("textarea").value = document.querySelector("textarea").value + palabra + "\n";
                    }

                }

            }
        }
    })
})

    //Cambio la pregunta seleccionada por otra
    let pregunta = document.getElementsByTagName("option")[2];
    console.log(pregunta);
    pregunta.defaultSelected=true;

document.querySelector("input[type=submit]").addEventListener("click", function (ev) {
    ev.preventDefault();//Paro el submit
    let camposCorrectos = true; //Variable booleana para controlar si hay algun fallo 
    let mensajeError = document.getElementById("errores")

    //Compruebo el nombre
    let nombre = document.querySelectorAll("input[type=text]")[0];
    if (nombre.value.length < 1) {
        camposCorrectos = false;
        nombre.style.border = "2px solid red";
        mensajeError.textContent = "El nombre no puede estar vacio";
        nombre.focus();
    } else {
        nombre.style.border = "";
    }
    //Compruebo contraseñas
    let password = document.querySelectorAll("input[type=password]")[0];
    let repetirPass = document.querySelectorAll("input[type=password]")[1];
    let passCorrectas = true;
    if (password.value.length < 8 && camposCorrectos) {//Compruebo que la pass tenga al menos 8 caracteres
        camposCorrectos = false;
        passCorrectas = false;
        password.style.border = "2px solid red";
        mensajeError.textContent = "La contraseña no puede estar vacia y debe tener minimo 8 caracteres";
        password.focus();
    }
    if (repetirPass.value.length < 8 && camposCorrectos) {//Compruebo que el repetir pass tenga al menos 8 caracteres
        camposCorrectos = false;
        passCorrectas = false;
        repetirPass.style.border = "2px solid red";
        mensajeError.textContent = "Debes repetir la contraseña";
        repetirPass.focus();
    }

    if (password.value != repetirPass.value && passCorrectas && camposCorrectos) {//Compruebo si el pass y repetirpass son iguales
        camposCorrectos = false;
        password.value = "";
        repetirPass.value = "";
        password.style.border = "2px solid red";
        repetirPass.style.border = "2px solid red";
        mensajeError.textContent = "Las contraseñas no coinciden";
        repetirPass.focus();
    }
    if (password.value == nombre.value && camposCorrectos) {//Compruebo si la pass y el nombre son iguales
        camposCorrectos = false;
        password.style.border = "2px solid red";
        mensajeError.textContent = "La contraseña no puede ser igual que el nombre";
        password.focus();
    }

    //Compruebo respuesta
    let respuesta = document.getElementsByName("respuesta")[0];

    if (respuesta.value.length < 6 && camposCorrectos) {
        camposCorrectos = false;
        respuesta.style.border = "2px solid red";
        mensajeError.textContent = "La respuesta debe tener al menos 6 caracteres";
        respuesta.focus();
    }

    //Compruebo que haya al menos 1 radio button seleccionado
    let algunSeleccionado = false;
    if (document.querySelectorAll("input[type=radio]")[0].checked) {
        algunSeleccionado = true;
    } else if (document.querySelectorAll("input[type=radio]")[1].checked) {
        algunSeleccionado = true;
    } else if (document.querySelectorAll("input[type=radio]")[2].checked) {
        algunSeleccionado = true;
    }
    if (!algunSeleccionado && camposCorrectos) {
        mensajeError.textContent = "Debes seleccionar algun boton radio";
        camposCorrectos=false;
    }

    //Compruebo edad
    let edad = document.getElementsByName("edad")[0];
    if (isNaN(edad.value) && camposCorrectos || edad.value == "" && camposCorrectos) {//Compruebo si no es numero o si esta vacio
        mensajeError.textContent = "La edad debe ser un numero";
        edad.style.border = "2px solid red";
        camposCorrectos = false;
        edad.focus();
    }
    if (edad.value < 3 && camposCorrectos || edad.value > 99 && camposCorrectos) {//Compruebo si esta entre 3 y 99
        mensajeError.textContent = "La edad debe ser entre 3 y 99";
        edad.style.border = "2px solid red";
        camposCorrectos = false;
        edad.focus();
    }

    //Compruebo el captcha
    let captcha = document.querySelectorAll("input[type=text]")[5];
    if (captcha.value.toUpperCase() != "QGPHJD" && camposCorrectos) {
        captcha.style.border = "2px solid red";
        mensajeError.textContent = "El captcha esta incorrecto";
        camposCorrectos = false;
        captcha.focus();
    }

    //Compruebo las condiciones de uso
    let condiciones = document.querySelectorAll("input[type=checkbox]")[3];
    if (!condiciones.checked && camposCorrectos) {
        mensajeError.textContent = "Debes aceptar las condiciones de uso";
        camposCorrectos = false;
    }

    if (camposCorrectos) {//Si todos los campos estan correctos hago el envio de formulario
        document.querySelector("form").method = "get";
        document.querySelector("form").action = "resultado.html";
        document.querySelector("form").submit();
    }
})
