sessionStorage.removeItem("libro");
for (let libro in library) {
    document.querySelector("h1").textContent=`Hay ${library.length} libros en la biblioteca.`;
    let titulo = library[libro].title;
    let foto = library[libro].cover;
    let articulo=document.createElement("article");
    articulo.className="presentacion";
    let h3=document.createElement("h3")
    h3.textContent=titulo;
    articulo.appendChild(h3);
    let img=document.createElement("img");
    img.src=foto;
    articulo.appendChild(img);
    console.log(JSON.stringify(library[libro]));
    articulo.addEventListener("click",function(){
        sessionStorage.setItem("libro",JSON.stringify( library[libro]));
        location.href="mostrar.html";
    })
    document.querySelector("section").appendChild(articulo);
}