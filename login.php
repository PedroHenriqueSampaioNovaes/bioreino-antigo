<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Favicon -->
  <link rel="shortcut icon" href="src/img/favicon/favicon.ico" type="image/x-icon">
  <link rel="apple-touch-icon" sizes="180x180" href="src/img/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="src/img/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="src/img/favicon/favicon-16x16.png">
  <link rel="manifest" href="src/img/favicon/site.webmanifest">

  <!-- Style -->
  <link rel="stylesheet" href="./src/css/reset.css">
  <link rel="stylesheet" href="./src/css/login.css">
  <title>Bioreino - Login</title>
</head>

<body>
  <?php // verifica se já está logado
    session_start();
    if(isset($_SESSION['email'])){
      header('Location: dashboard.php');
      exit();
    }
  ?>
  <main class="container">
    <a href="index.html">
      <img src="src/img/b-bioreino.svg" alt="Logo da Bioreino" class="logo">
    </a>
    <form action="php/validaLogin.php" method="post">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" required value="<?php if(isset($_GET['email'])){echo $_GET['email'];}?>">
      <label for="senha">Senha</label>
      <input type="password" name="senha" id="senha" required>
      <span class="assine_aqui">Ainda não possui um plano? <a href="index.html#cadastro">Assine aqui</a></span>
      <button type="submit" class="btn">Logar</button>
    </form>
  </main>

  <?php 
  if(isset($_SESSION['erro'])){
    $erro = $_SESSION['erro'];
    echo
    "<div id='dados_incorretos'>
      <p>$erro</p>
      <img class='img_erro' src='src/img/error.svg' alt='Erro no login'>
    </div>";
    unset($_SESSION['erro']);
    }
  ?>
  <script src="main.js"></script>
</body>

</html>