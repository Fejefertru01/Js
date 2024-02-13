const url = "https://www.jaimeweb.es/medac/getProfesores.php";

document.querySelector("input[type=button]").addEventListener("click", function () {//Controlo el click del obtener datos
    fetch(url)
        .then(response => { return response.json() })
        .then(data => {
            document.querySelector("div").innerHTML = "";//Vacio el div
            data.forEach(element => {
                let articulo = document.createElement("article");//Creo el articulo y lo relleno con los valores 
                articulo.className = "ficha";
                articulo.textContent = element.nombre;
                articulo.textContent += "\n" + element.dni;
                document.querySelector("div").appendChild(articulo);//Engancho el articulo al div
            });
        })
        .catch(error => { console.log("Ha fallado: " + error); })
})


const urlComentario = "https://www.jaimeweb.es/medac/setProfesores.php";//URL para meter profesores nuevos en la BBDD
document.querySelector("input[type=submit]").addEventListener("click", function (ev) {//Controlo el segundo boton
    ev.preventDefault();
    let formulario = document.forms[1];//Guardo el formulario
    let nuevo_profe = new FormData();//Creo el formData

    //Guardo las variables del formulario
    let nombre = formulario["nombre"].value;
    let dni = formulario["dni"].value;
    let edad = formulario["edad"].value;

    //Añado al formData lo que habian escrito en el formulario
    nuevo_profe.append("nombre", nombre);
    nuevo_profe.append("dni", dni);
    nuevo_profe.append("edad", edad);

    fetch(urlComentario, { method: "POST", body: nuevo_profe })//Hago el fetch para meter el profesor en la BBDD
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.querySelector("div").innerHTML = "";//Vacio el div por si habia algo para que el mensaje devuelto se vea claramente
            //Creo el articulo y le añado lo que me devuelve el ingreso en la BBDD
            let articulo = document.createElement("article");
            articulo.className = "ficha";
            articulo.textContent = data;
            document.querySelector("div").appendChild(articulo);
            document.forms[1].reset();//Reseteo el formulario para que lo que acaban de ingresar se borre
        })
        .catch(error => { console.log("Ha fallado: " + error); })

})