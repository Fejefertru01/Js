document.querySelector("input[type=button]").addEventListener("click",function(){
    let texto1=document.querySelector("input").value;
    let texto2=document.querySelectorAll("input")[1].value;
    if(texto1==""&& texto2==""){
        alert("No anagrama");
    }else{
        let letras1= texto1.split("").sort().join("");
        let letras2= texto2.split("").sort().join("");
        if(letras1==letras2){
            alert("Anagrama")
        }else{
            alert("No anagrama");
        }

    }
})