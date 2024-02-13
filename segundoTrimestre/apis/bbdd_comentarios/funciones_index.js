

function mostrar_comentarios(array_de_objetos){
    let padre = document.getElementById("comentarios");

    for(comentario of array_de_objetos){
        let comentario_article = document.createElement("article");
        comentario_article.classList.add("comentario");
        for(atributo in comentario){
           if(atributo !== 'id'){
                let nuevo_elemento = document.createElement("p");
                nuevo_elemento.textContent= comentario[atributo];
                comentario_article.appendChild(nuevo_elemento);
            }
        }
        padre.appendChild(comentario_article);
    }
    
}

function obten_comentarios(url){
    fetch(url)
    .then((response) => {
        console.log("then response");
        console.log(response);
        return response.json();
    })
    .then((datos) => {
        console.log("then datos");
        console.log(datos);
        mostrar_comentarios(datos);
    })
    .catch((error) => {
        console.log(`La vida es así a veces, amigo...${error}`);
    })
}




document.addEventListener('DOMContentLoaded', () => {
    obten_comentarios('http://localhost/bbdd_comentarios/obtener_comentarios.php');
})