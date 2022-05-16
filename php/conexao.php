<?php
define('HOST', '127.0.0.1'); // IP do BD
define('USER', 'root'); // Usuário do BD
define('PASSWORD', ''); // Senha do BD
define('DB', 'login_info'); // Nome da database

// conexão com o banco, ou retorna erro:
$conexao = mysqli_connect(HOST, USER, PASSWORD, DB) or die('Não foi possível conectar ao banco');

?>