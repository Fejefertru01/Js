




function inserta_comentario(url){
    let formulario = document.forms[0];//Se puede llegar de muchas maneras al formulario, no haría ni falta tirando de ids
    //Haremos el envío mediante el objeto FormData.
    let objeto_formdata = new FormData();

    let usuario = formulario["usuario"].value;
    let fecha = formulario["fecha"].value;
    let comentario = formulario["comentario"].value;

    objeto_formdata.append("usuario", usuario);
    objeto_formdata.append("fecha", fecha);
    objeto_formdata.append("comentario", comentario);

    console.log(objeto_formdata.get("usuario"));//No podemos acceder como un objeto estándar con .propiedad
    //En estas alturas tenemos creado el objeto listo para ser enviado a la pagina php que hará el resto.
    //Muy parecido a tirar de una api o url cualquiera pero en el fetch recibe mas parametros
    fetch(url, {method: "POST", body: objeto_formdata})
    .then((response => {
        return response.text();
    }))
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(`a : ${error}`);
    });
}





document.addEventListener('DOMContentLoaded', () => {
    document.forms[0].addEventListener('submit', (evento) => {
        evento.preventDefault();
        inserta_comentario('http://localhost/bbdd_comentarios/insertar_comentarios.php');
        document.forms[0].reset();
    })
})