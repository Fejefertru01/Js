// Definición de la URL de la API
const apiURL = "https://jsonplaceholder.typicode.com/todos";

// Llamada a la API usando Fetch
fetch(apiURL)
    .then(response => { return response.json() }) // Convertir la respuesta a JSON
    .then(data => {
        let datos = [];
        // Si no hay datos guardados en el local storage, guardar los datos obtenidos de la API
        if (!localStorage.getItem("tareas")) {
            localStorage.setItem("tareas", JSON.stringify(data));
        }
        crear_array(datos); // Llamar a la función crear_array
        crear_lista(datos); // Llamar a la función crear_lista
        crear_tarea(datos); // Llamar a la función crear_tarea
    })
    .catch(error => { console.log(error) }) // Manejar errores de la solicitud


// Función para crear un array de tareas
function crear_array(datos) {
    let data = JSON.parse(localStorage.getItem("tareas")); // Obtener los datos del local storage
    data.forEach(tarea => {
        // Iterar sobre cada tarea y agregarla al array datos
        datos.push({ title: tarea.title, completed: tarea.completed })
    });
}


// Función para crear la lista de tareas en el DOM
function crear_lista(datos) {
    document.querySelector("ul").innerHTML = ""; // Limpiar la lista existente
    datos.forEach(dato => {
        let li = document.createElement("li"); // Crear un nuevo elemento <li>
        let completado = document.createElement("input"); // Crear un nuevo elemento <input>
        completado.type = "checkbox"; // Establecer el tipo de input como checkbox
        li.textContent = dato.title; // Establecer el texto del <li> como el título de la tarea

        // Si la tarea está completada, marcar el checkbox como seleccionado
        if (dato.completed) completado.checked = "checked";

        // Añadir un event listener al checkbox para actualizar el estado de la tarea en el local storage
        completado.addEventListener("change", function () {
            dato.completed = completado.checked;
            localStorage.setItem("tareas", JSON.stringify(datos));
        });

        li.appendChild(completado); // Adjuntar el checkbox al <li>
        document.querySelector("ul").appendChild(li); // Adjuntar el <li> a la lista <ul>
    })
}

// Función para crear una nueva tarea
function crear_tarea(datos) {
    document.querySelector("input[type=button]").addEventListener("click", function () {
        let tarea = document.querySelector("input[type=text]").value; // Obtener el valor del input de texto
        document.querySelector("input[type=text]").value = ""; // Limpiar el input de texto
        datos.push({ title: tarea, completed: false }); // Agregar la nueva tarea al array datos
        localStorage.setItem("tareas", JSON.stringify(datos)); // Actualizar el local storage con los nuevos datos
        crear_lista(datos); // Actualizar la lista de tareas en el DOM
    })
}
