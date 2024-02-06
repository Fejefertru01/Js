document.querySelectorAll("input").forEach(function(element){
    element.addEventListener("click",function(){
        document.querySelector("div").style.backgroundColor=element.value;
    })
})
document.querySelector("select").addEventListener("change",function(){
    let miSelect=document.querySelector("select");
        document.querySelector("div").style.backgroundColor=miSelect.value;
    })
