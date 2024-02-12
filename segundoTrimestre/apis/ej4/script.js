const apiURL="https://jsonplaceholder.typicode.com/todos";

fetch(apiURL)
    .then(response=>{return response.json()})
    .then(data=>{
        let datos=[];
        crear_array(datos,data);
        crear_lista(datos);
        crear_tarea(datos);
    })
    .catch(error=> {console.log(error)})


function crear_array(datos,data){
    data.forEach(tarea => {
        datos.push([tarea.title,tarea.completed]);
    });
}


function crear_lista(datos){
    document.querySelector("ul").innerHTML="";
    console.log(datos);
    datos.forEach(dato=>{
        let li= document.createElement("li");
        let completado=document.createElement("input");
        completado.type="checkbox";
            li.textContent=dato[0];
            if(dato[1]) completado.checked="checked";
            completado.addEventListener("change",function(){
            dato[1]=completado.checked  
            localStorage.setItem("tareas",JSON.stringify(datos));
            })
            li.appendChild(completado);
            document.querySelector("ul").appendChild(li);
    })
    
}

function crear_tarea(datos){
    document.querySelector("input[type=button]").addEventListener("click",function(){
        let tarea=document.querySelector("input[type=text]").value;
        document.querySelector("input[type=text]").value="";
        datos.push([tarea,false]);
        crear_lista(datos);
        localStorage.setItem("tareas",JSON.stringify(datos));
    })
    
}
