document.querySelector("button").addEventListener("click", function () {

    const apiUrl = "https://fakestoreapi.com/products";
    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.forEach(producto => {
                let p = document.createElement("p");
                p.textContent = producto.title;
                crear_img(p, producto);
                borrar_img(p);
                document.querySelectorAll("section")[0].appendChild(p);
            });
        })
        .catch(error => {
            console.log("Falla");
        });

    function crear_img(p, producto) {
        p.addEventListener("mouseover", function () {
            let imagen = document.createElement("img");
            imagen.src = producto.image;
            imagen.setAttribute("width", "100px");
            document.querySelectorAll("section")[1].appendChild(imagen);
        });
    }

    function borrar_img(p) {
        p.addEventListener("mouseleave", function () {
            let section = document.querySelectorAll("section")[1];
            while (section.firstChild) {
                section.removeChild(section.firstChild);
            }
        });
    }
});
