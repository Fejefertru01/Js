document.querySelectorAll("input[type='checkbox']").forEach(function (element) {
    element.addEventListener("change", function () {
        let texto = document.querySelector("textarea").value;
        if (element.checked) {
            document.querySelector("textarea").value = texto + element.value + "\n";
        } else {
            let lista = document.querySelector("textarea").value.split("\n");
           let posicion= lista.indexOf(element.value)

            
            
            // for(let i=0;i<lista.length;i++){
            //     if(lista[i]==element.value){
            //         lista[i]="";
            //     }
            // }
            document.querySelector("textarea").value="";
        }

    })
})