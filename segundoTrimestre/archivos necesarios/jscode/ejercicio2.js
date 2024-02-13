const URLapi = "https://www.jaimeweb.es/medac/datos.json";

document.querySelector("input").addEventListener("click", function () {
    fetch(URLapi)
        .then(response => { return response.json() })
        .then(data => {
            data.forEach(element => {
                console.log(element);//Saco los objetos que pide el apartado B
            });
            data.forEach(element => {
                for (propiedades in element) {
                    console.log(element[propiedades]);//Saco los valores de cada objeto que pide el apartado C
                }
            })
        })
        .catch(error => { console.log("Ha fallado: " + error); })
})
