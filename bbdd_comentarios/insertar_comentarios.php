<?php 
require 'conexion.php';

global $conexion;

$comentario = $_POST['comentario'];
$usuario = $_POST['usuario'];
$fecha = $_POST['fecha'];



$sentencia = "INSERT INTO comentario (comentario, usuario, fecha) VALUES ('$comentario','$usuario','$fecha')";

$conexion->query($sentencia);


?>