<?php
$_servidor = 'localhost:3307';
$_usuario = 'root';
$_contrasena = 'medac';
$_base_de_datos = 'db_comentarios';

$conexion = new Mysqli($_servidor, $_usuario, $_contrasena, $_base_de_datos) 
    or die("Error de conexión");
?>
