<?php
// faz a conexão com o banco
include('conexao.php');

// verifica se alguma informação não foi preenchida
if(empty($_POST['email']) || empty($_POST['senha']) || empty($_POST['cpf']) || empty($_POST['plano']) || empty($_POST['nome'])){
    header('Location: cadastro.php');
    exit();
};

// armazena os dados do cadastro
$NOME = mysqli_real_escape_string($conexao, $_POST['nome']);
$SENHA = mysqli_real_escape_string($conexao, $_POST['senha']);
$EMAIL = mysqli_real_escape_string($conexao, $_POST['email']);
$CPF = mysqli_real_escape_string($conexao, $_POST['cpf']);
$PLANO = mysqli_real_escape_string($conexao, $_POST['plano']);

// verifica se existe alguém
$cpfCheck = mysqli_num_rows(mysqli_query($conexao, "SELECT * FROM alunos WHERE cpf = '{$CPF}'"));
$emailCheck = mysqli_num_rows(mysqli_query($conexao, "SELECT * FROM alunos WHERE email = '{$EMAIL}'"));

while ($cpfCheck == 1 || $emailCheck == 1){
    session_start();

    if($cpfCheck == 1){
        $_SESSION['cpfCheck'] == 1; // variável para aparecer erro na tela
    }
    if($emailCheck == 1){
        $_SESSION['emailCheck'] == 1;
    }

    header('Location: ../cadastro.php');
    exit();
    break;
}


// comando para o cadastro
$query = "INSERT INTO alunos(nome, senha, email, cpf, plano) VALUES ('{$NOME}', MD5('{$SENHA}'), '{$EMAIL}', '{$CPF}', '{$PLANO}');";

// execução do comando
mysqli_query($conexao, $query);

header('Location: ../login.html');