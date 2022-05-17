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
  <link rel="stylesheet" href="./src/css/dashboard.css">
  <link rel="stylesheet" href="./src/css/responsivo.css">
  <title>Bioreino - Área do estudante</title>
</head>

<body>
  <header class="cabecalho">
    <a href="/" class="logo">
      <img src="src/img/bioreino.svg" alt="Logo da Bioreino">
    </a>
    <nav class="nav_usuario">
      <div class="login_usuario">
        <p class="nome_usuario">Pedro Henrique</p>
        <span class="foto_usuario"></span>
      </div>
      <ul class="opcoes_usuario">
        <li>
          <form action="/php/sair.php">
            <button type="submit" class="btn_sair">Sair</button>
          </form>
        </li>
      </ul>
    </nav>
  </header>

  <div class="linha"></div>

  <section class="container_cursos">
    <h1 class="titulo_cursos">Meus cursos</h1>
    <main class="cursos">
      <ul class="lista_videos">
        <li>
          <div class="video"></div>
        </li>
        <li>
          <div class="video"></div>
        </li>
        <li>
          <div class="video"></div>
        </li>
        <li>
          <div class="video"></div>
        </li>
        <li>
          <div class="video"></div>
        </li>
        <li>
          <div class="video"></div>
        </li>
      </ul>
    </main>
  </section>

  <div id="dados_incorretos">
    <p>Erro</p>
    <img class="img_erro" src="src/img/error.svg" alt="Erro no login">
  </div>

  <script src="main.js"></script>
</body>

</html>