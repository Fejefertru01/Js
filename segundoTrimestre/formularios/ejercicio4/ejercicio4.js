document.querySelector("input[type='submit']").addEventListener("click", function(e){
            e.preventDefault();
            if(document.querySelector("input").value!=""){
                if(document.querySelector("select").value=="DaE"){
                    document.querySelectorAll("input")[1].value=parseFloat(document.querySelector("input").value)*0.83;
                }else{
                    document.querySelectorAll("input")[1].value=parseFloat(document.querySelector("input").value)*1.20;
                }
                
            } 
    })
