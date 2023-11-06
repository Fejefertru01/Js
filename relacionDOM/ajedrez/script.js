let tablero=[];
let filaRandom=Math.floor(Math.random()*8);
let colRandom=Math.floor(Math.random()*8);
const table = document.createElement("table");
let contador=0;
for (let i = 0; i < 8; i++) {
    let filas=[];
  const tr = document.createElement("tr");
  for (let j = 0; j < 8; j++) {
    const td = document.createElement("td");
    td.style.setProperty("background-color", (i + j) % 2 == 0 ? "black" : "white")
    if(i==filaRandom && j==colRandom){
        let ficha =document.createElement("img");
        ficha.setAttribute("src","img/rey.png");
        ficha.setAttribute("height","90%");
        td.appendChild(ficha);
    }

    tr.appendChild(td);
    contador++;
    filas.push(td);
  }
  tablero.push(filas);
  
  table.appendChild(tr);
  table.setAttribute("border",1);
}
document.body.appendChild(table);

document.querySelectorAll("td").forEach(element => {
    if(element.hasChildNodes()){
        for (let i = filaRandom-1; i <= filaRandom+1; i++) {
            document.querySelectorAll("tr")[i].querySelectorAll("td")[i].style("background-color","green");
            
        }
    }
});

console.log(document.querySelectorAll("tr")[filaRandom].querySelectorAll("td")[colRandom]);

