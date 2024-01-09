document.querySelector("input").addEventListener("blur",function(){
   if(this.value.length!=9) {
    alert("El dni no tiene 8 numeros y una letra");
    }else{
        let letras=this.value.split("");
        let contadorLetras=0;
        let calcularLetra="";
        for(let i=0;i<letras.length;i++){
            if(isNaN(letras[i])) contadorLetras++;
            if(i<8)calcularLetra+=(letras[i]);
        }
        if(contadorLetras>1){
            alert("El dni tiene solo 1 letra maricon");
        }
        let letrasPosibles="TRWAGMYFPDXBNJZSQVHLCKE";
        if(letras[this.value.length-1].toUpperCase()==letrasPosibles.charAt(calcularLetra%23)){
            alert("El dni esta piola")
        }else{
            alert("La letra del dni esta mal")
        }
        
    }


})