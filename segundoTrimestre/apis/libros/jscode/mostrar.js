let section = document.querySelector("section");
let libro = JSON.parse(sessionStorage.getItem("libro"));
let titulo = document.createElement("h1");
titulo.innerText = libro.title;
section.appendChild(titulo);
let tabla = document.createElement("table");

for (let elemento in libro) {
    console.log(libro[elemento]);
    if (elemento !== "cover") {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = elemento;
        let td2 = document.createElement("td");
        if(elemento=="author"){
            td2.innerText = libro[elemento].name;
        }
        else{
            td2.innerText = libro[elemento];
        }  
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabla.appendChild(tr);
    }
}
section.appendChild(tabla);
let img = document.createElement("img");
img.src = libro.cover;
section.appendChild(img);