document.querySelectorAll("input")[7].addEventListener("click",function(ev){
    ev.preventDefault();
    let formularioCorrecto=true;
    // ----------------------COMPRUEBO DNI---------------
    let dni=document.querySelectorAll("input")[0].value.split("");
    let contadorLetras=0;
    if(dni.length!=9){
        alert("El DNI tiene 8 digitos y 1 letra");
        formularioCorrecto=false;
        document.querySelectorAll("input")[0].focus();
        document.querySelectorAll("input")[0].value="";
    }
    for(let i=0;i<dni.length;i++){
        if(isNaN(dni[i])) contadorLetras++;
    }
    if(contadorLetras!=1 && formularioCorrecto){
        alert("El DNI tiene exactamente una letra");
        formularioCorrecto=false;
        document.querySelectorAll("input")[0].focus();
        document.querySelectorAll("input")[0].value="";
    }
    // -----------------COMPRUEBO NOMBRE--------------------------
    let nombre=document.querySelectorAll("input")[1].value.split(" ");
    if(document.querySelectorAll("input")[1].value=="" && formularioCorrecto){
        alert("El nombre no puede estar vacio")
        formularioCorrecto=false;
        document.querySelectorAll("input")[1].focus();

    }else{
        if((nombre.length<1 && formularioCorrecto)||(nombre.length>2 && formularioCorrecto)){
            alert("El nombre debe tener una o dos palabras");
            formularioCorrecto=false;
            document.querySelectorAll("input")[1].focus();
        }

    }



    let apellidos=document.querySelectorAll("input")[2].value.split(" ");
    if(document.querySelectorAll("input")[2].value=="" && formularioCorrecto){
        alert("El apellido no puede estar vacio")
        formularioCorrecto=false;
        document.querySelectorAll("input")[2].focus();
    }else{
        if((apellidos.length<1 && formularioCorrecto)||(apellidos.length>2 && formularioCorrecto)){
            alert("Los apellidos deben tener una o dos palabras");
            formularioCorrecto=false;
            document.querySelectorAll("input")[2].focus();

        }
    }

    // ---------------COMPRUEBO FECHA--------------------------------
    let fechaNacimiento=document.querySelectorAll("input")[3].value.split("/");
    if(fechaNacimiento.length==3 && formularioCorrecto){
        if(fechaNacimiento[0].length!=2 && formularioCorrecto||fechaNacimiento[1].length!=2 && formularioCorrecto||fechaNacimiento[2].length!=4 && formularioCorrecto){
            alert("La fecha esta mal");
            formularioCorrecto=false;
            document.querySelectorAll("input")[3].focus();
        }
    }else if(formularioCorrecto){
        alert("Escribe la fecha en formato dd/mm/aaaa")
        formularioCorrecto=false;
        document.querySelectorAll("input")[3].focus();
    }

    let web=document.querySelectorAll("input")[4].value.substring(0,8);//Tambien se puede hacer con el startsWith('cadena')
    if(web!="https://"&& formularioCorrecto){
        alert("El formato web esta mal");
        formularioCorrecto=false;
        document.querySelectorAll("input")[4].focus();
    }

    let password=document.querySelectorAll("input")[5].value;
    if(password.length<8 && formularioCorrecto||password.length>12 && formularioCorrecto){
        alert("La contraseña debe tener entre 8 y 12 caracteres");
        formularioCorrecto=false;
        document.querySelectorAll("input")[5].focus();
    }

    if(formularioCorrecto) location.href="loginCorrecto.html";
})