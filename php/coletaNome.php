<?php
    session_start();
    include('conexao.php'); // conecta com o banco
    $email = $_SESSION['email'];
    $query = mysqli_query($conexao, "SELECT nome FROM alunos WHERE email = '{$email}'");
    $row = mysqli_fetch_array($query);
?>