<?php
// Este arquivo verifica as credenciais e libera o login do usuário

// inicia sessão
session_start();

// chama o arquivo de conexão
include('conexao.php');

// verifica se as informações existem (redundância para segurança)
if(empty($_POST['email']) || empty($_POST['senha'])){
    header('Location: login.html');
    exit();
};

// valida o login, excluindo caracteres que possam originar em SQL Injection
$email = mysqli_real_escape_string($conexao, $_POST['email']);
$senha = mysqli_real_escape_string($conexao, $_POST['senha']);

// guarda a validação
$query = "SELECT * FROM alunos WHERE email = '{$email}' and senha = MD5('{$senha}');";
$resultado = mysqli_query($conexao, $query);
$linhas = mysqli_num_rows($resultado);

// valida o login
if($linhas == 1){
    $_SESSION['email'] = $email;
    header('Location: ../meuscursos.php');
    exit();
} else {
    header('Location: ../login.html');
    exit();
}

?>