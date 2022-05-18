<?php
// Este arquivo verifica se o usuário está logado ou não

// incia a sessão
session_start();

// Se não estiver logado, manda para tela de login
if(!$_SESSION['email']){
    header('Location: ../login.php');
    exit();
}

?>