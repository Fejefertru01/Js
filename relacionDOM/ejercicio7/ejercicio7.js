let celdas =document.querySelectorAll('td');
for(let celda of celdas){
    celda.addEventListener('click',function(){
        this.style.backgroundColor = 'black';
    })
}