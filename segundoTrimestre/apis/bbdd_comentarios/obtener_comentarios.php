<?php
require 'conexion.php';

global $conexion;

$orden = "SELECT * FROM comentario";

$resultado = $conexion->query($orden);

$res = $resultado->fetch_all(MYSQLI_ASSOC);

mysqli_close($conexion);

if($resultado){
    echo json_encode($res);
}
else{
    echo "ERROR consulta";
}

?>