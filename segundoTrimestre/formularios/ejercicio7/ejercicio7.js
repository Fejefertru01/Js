document.querySelector("button").addEventListener("click",function(){
    let texto=document.querySelector("textarea").value;
    let div = document.createElement("div");
    div.textContent=texto.substring(0,50);
    div.style.color='blue';
    document.body.appendChild(div);
})

document.querySelector("textarea").addEventListener("input",function(){
    if(document.querySelector("textarea").value.length>100){
        document.querySelector("textarea").value=document.querySelector("textarea").value.slice(0,100);
        console.log("he entrado");
    }
})