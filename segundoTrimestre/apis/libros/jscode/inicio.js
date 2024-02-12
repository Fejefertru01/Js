sessionStorage.removeItem("libro");
const apiURL="https://www.jaimeweb.es/medac/books.json";

fetch(apiURL)
    .then(response=>{
        return response.json();
    })
    .then(biblioteca=>{
        let library=biblioteca.library
        for (let libro in library) {
            document.querySelector("h1").textContent=`Hay ${library.length} libros en la biblioteca.`;
            let titulo = library[libro].book.title;
            let foto = library[libro].book.cover;
            let articulo=document.createElement("article");
            articulo.className="presentacion";
            let h3=document.createElement("h3")
            h3.textContent=titulo;
            articulo.appendChild(h3);
            let img=document.createElement("img");
            img.src=foto;
            articulo.appendChild(img);
            articulo.addEventListener("click",function(){
                sessionStorage.setItem("libro",JSON.stringify( library[libro].book));
                location.href="mostrar.html";
            })
            document.querySelector("section").appendChild(articulo);
        }
    })
    .catch(error=>{
        console.log("No conozco a nadie");
    })

