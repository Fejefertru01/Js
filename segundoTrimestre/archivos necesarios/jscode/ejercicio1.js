
const URLapi = "https://randomuser.me/api";

//APARTADO A
document.querySelectorAll("input[type=button]")[0].addEventListener("click", function () {
    fetch(URLapi)
        .then(response => { return response.json() })
        .then(data => {
            console.log(data);
        })
        .catch(error => { console.log("Ha fallado: " + error); })
})

//APARTADO B
document.querySelectorAll("input[type=button]")[1].addEventListener("click", function () {
    fetch(URLapi)
        .then(response => { return response.json() })
        .then(data => {
            let articulo = document.createElement("article");//Creo el articulo
            articulo.className = "usuario";//Le añado la clase usuario

            //Introduzco nombre apellidos y edad al article
            articulo.textContent = data.results[0].name.first;
            articulo.textContent += " " + data.results[0].name.last;
            articulo.textContent += ": " + data.results[0].dob.age + " años";
            
            //Creo y añado src a la imagen
            let imagen = document.createElement("img");
            imagen.src = data.results[0].picture.medium;
            
            articulo.appendChild(imagen);//Engancho la imagen al articulo
            document.querySelector("div").appendChild(articulo);//Engancho el articulo al div
        })
})