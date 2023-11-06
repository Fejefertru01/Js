const imgorig = document.querySelector("img");
console.log(imgorig);
document.querySelectorAll("img").forEach((elemento) => {
    elemento.addEventListener("click", function () {
        if (elemento != document.querySelector("div img")) {
            let div = document.createElement("div");
            div.className = "capaTransparente";
            div.style.width = window.innerWidth + "px";
            div.style.height = window.innerHeight + "px";
            elemento.style.margin = "auto";
            let temp = elemento;
            temp.removeAttribute("width");
            temp.removeAttribute("height");
            div.appendChild(temp);
            document.body.appendChild(div);
            div.addEventListener("click", function (ev) {
                if (ev.target != document.querySelector("div img")) {
                    document.body.removeChild(document.querySelector("div"));
                    elemento.height = 360;
                    elemento.width = 640;
                    document.body.appendChild(elemento);
                }
            })
        }
    })
})