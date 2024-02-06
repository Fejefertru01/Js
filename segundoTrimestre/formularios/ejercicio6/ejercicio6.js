document.querySelectorAll("input[type='checkbox']").forEach(function(element){
    element.addEventListener("change",function(){
        var opciones = [];
        let miSelect = document.querySelector("select");
            for (var i = 0; i < miSelect.options.length; i++) {
                opciones.push(miSelect.options[i].value);
            }
            if (opciones.includes(element.value)){
                for (var i = 0; i < miSelect.options.length; i++) {
                    if (miSelect.options[i].value === element.value) {
                      miSelect.removeChild(miSelect.options[i]);
                    }
                }
            }else{
                let opcion=document.createElement("option");
                opcion.textContent=element.value;
                console.log(opcion);
                miSelect.appendChild(opcion);
            }            
    })
})