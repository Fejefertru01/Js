let celdas =document.querySelectorAll('td');
let colores = ['red','blue','green','yellow'];
for(let celda of celdas){
    celda.addEventListener('click',function(){
        switch(this.style.backgroundColor){
        case colores[0]:
            this.style.backgroundColor = colores[1];
            break;
        case colores[1]:
            this.style.backgroundColor = colores[2];
            break;
        case colores[2]:
            this.style.backgroundColor = colores[3];
            break;
        case colores[3]:
            this.style.backgroundColor = colores[0];
            break;
        default:
            this.style.backgroundColor = colores[0];
            break;
        }
    })
}