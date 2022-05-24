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
  <link rel="stylesheet" href="./src/css/geral.css">
  <link rel="stylesheet" href="./src/css/animacoes.css">
  <link rel="stylesheet" href="./src/css/cadastro.css">
  <link rel="stylesheet" href="./src/css/responsivo.css">
  <title>Bioreino - Cadastro</title>
</head>

<body>
  <?php
    session_start();
    
    $kids = ''; // variáveis para receber 'selected' nas options
    $pro = '';
    $scho = '';
    $preco = '';

    if(!empty($_POST['plano'])){
      $plano = $_POST['plano']; // guarda qual foi o plano selecionado
      switch ($plano) { // seta qual será selecionado
        case "Kids":
          $kids = 'selected';
          $preco = 'R$300,00';
          break;
        case "Professional":
          $pro = 'selected';
          $preco = 'R$1200,00';
          break;
        case "Scholar":
          $scho = 'selected';
          $preco = 'R$600,00';
          break;
      }
    }
  ?>
  <?php // verifica se já está logado
    if(isset($_SESSION['email'])){
      header('Location: dashboard.php');
      exit();
    }
  ?>
  <header class="cabecalho">
    <a href="index.html" class="logo">
      <img src="src/img/bioreino.svg" alt="Logo da Bioreino">
    </a>
    <nav>
      <ul class="itens_nav">
        <li><a href="login.php" class="login">Entrar</a></li>
      </ul>
    </nav>
  </header>
  <?php
    if(isset($_GET['email'])){
      $NOME = $_GET['nome'];
      $CPF = $_GET['cpf'];
      $EMAIL = $_GET['email'];
      $CEP = $_GET['cep'];
      $LOGRADOURO = $_GET['logradouro'];
      $NUMERO = $_GET['numero'];
      $BAIRRO = $_GET['bairro'];
    } else {
      $NOME = '';
      $CPF = '';
      $EMAIL = '';
      $CEP = '';
      $LOGRADOURO = '';
      $NUMERO = '';
      $BAIRRO = '';
    }
  ?>
  <div class="container">
    <section class="dados">
      <h1 class="info">
        Registre-se e tenha acesso aos cursos do
        plano selecionado
      </h1>
      <form action="php/cadastrar.php" method="post" class="formulario">
        <div class="conjunto_dados">
          <h2>Dados Pessoais</h2>
          <label for="nome">Nome completo *</label>
          <input type="text" name="nome" id="nome" required value=<?php echo $NOME?>>
          <label for="senha">Senha *</label>
          <input type="password" name="senha" id="senha" required>
          <label for="cpf">CPF *</label>
          <input type="text" name="cpf" id="cpf" required value=<?php echo $CPF?>>
          <label for="email">Email *</label>
          <input type="email" name="email" id="email" required value=<?php echo $EMAIL?>>
        </div>
        <div class="conjunto_dados">
          <h2>Endereço</h2>
          <div>
            <label for="pais">País *</label>
            <select name="pais" id="pais" required>
              <!-- Tirei o required para teste! -->
            </select>
            <div class="divisor">
              <div>
                <label for="cep">CEP *</label>
                <input type="text" name="cep" id="cep" required value=<?php echo $CEP?>>
              </div>
              <div>
                <label for="logradouro">Logradouro *</label>
                <input type="text" name="logradouro" id="logradouro" required value=<?php echo $LOGRADOURO?>>
              </div>
            </div>
            <div class="divisor">
              <div>
                <label for="numero">Número *</label>
                <input type="text" name="numero" id="numero" required value=<?php echo $NUMERO?>>
              </div>
              <div>
                <label for="bairro">Bairro *</label>
                <input type="text" name="bairro" id="bairro" required value=<?php echo $BAIRRO?>>
              </div>
            </div>
          </div>
        </div>
        <div class="conjunto_dados">
          <h2>Pagamento - cartão de crédito</h2>
          <div>
            <div class="divisor">
              <div>
                <label for="nome_portador">nome do portador *</label>
                <input type="text" name="nome_portador" id="nome_portador" required>
              </div>
              <div>
                <label for="num_cartao">número do cartão *</label>
                <input type="text" name="num_cartao" id="num_cartao" maxlength="16" required>
              </div>
            </div>
            <div class="divisor">
              <div>
                <label for="validade">validade *</label>
                <input type="text" name="validade" id="validade" placeholder="MM/AAAA" maxlength="6" required>
              </div>
              <div>
                <label for="cod_seguranca">código de segurança *</label>
                <input type="text" name="cod_seguranca" id="cod_seguranca" placeholder="CVV" maxlength="3" required>
              </div>
            </div>
          </div>
          <div class="conjunto_dados">
            <h2>Dados finais</h2>
            <div>
              <label for="plano">Selecione um plano *</label>
              <select name="plano" id="plano" required>
                <option value="kids" data-price="300,00" <?php echo $kids ?>>Kids</option>
                <option value="scholar" data-price="600,00" <?php echo $scho ?>>Scholar</option>
                <option value="professional" data-price="1200,00" <?php echo $pro ?>>Professional</option>
              </select>
            </div>
            <div class="container_valor">
              <p>TOTAL DA COMPRA:</p>
              <span class="total">
                <?php echo $preco ?>
              </span>
            </div>
          </div>
        </div>
        <button type="submit" class="btn">Finalizar compra</button>
      </form>
    </section>
  </div>

  <?php if(isset($_SESSION['erroCadastro'])):?>
  <div id="dados_incorretos">
    <button data-popup="fechar" class="fechar">X</button>
    <p>
      <?php echo $_SESSION['erroCadastro'] ?>
    </p>
    <img class="img_erro" src="src/img/error.svg" alt="Erro no cadastro">
  </div>
  <?php endif; unset($_SESSION['erroCadastro']);?>

  <script src="main.js"></script>
</body>

</html>