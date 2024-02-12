document.querySelector("button").addEventListener("click", function(){
    const apiURL="https://jsonplaceholder.typicode.com/comments#";

    fetch(apiURL)
        .then(response=>{return response.json()})
        .then(coments=>{
            // console.log(coments[0].body);
            coments.forEach(comment => {
            document.getElementById("salida").innerHTML+=comment.body
             
            });
        })
})
