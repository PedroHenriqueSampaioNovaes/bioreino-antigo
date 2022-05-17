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
  <link rel="stylesheet" href="src/css/reset.css">
  <link rel="stylesheet" href="src/css/home.css">
  <link rel="stylesheet" href="src/css/login.css">
  <link rel="stylesheet" href="src/css/cadastro.css">
  <link rel="stylesheet" href="src/css/responsivo.css">
  <title>Bioreino - Cadastro</title>
</head>

<body id="cadastro">
  <?php
    session_start();
    $kids = ''; // variáveis para receber 'selected' nas options
    $pro = '';
    $scho = '';
    $preco = 'R$ 000,00';

    if(!empty($_POST['plano'])){
      $plano = $_POST['plano']; // guarda qual foi o plano selecionado
      switch ($plano) { // seta qual será selecionado
        case "Kids":
          $kids = 'selected';
          break;
        case "Professional":
          $pro = 'selected';
          break;
        case "Scholar":
          $scho = 'selected';
          break;
      }
    }
  ?>

  <header class="cabecalho">
    <a href="/" class="logo">
      <img src="src/img/bioreino.svg" alt="Logo da Bioreino">
    </a>
    <nav>
      <ul class="itens_nav">
        <li><a href="login.html" class="login">Entrar</a></li>
      </ul>
    </nav>
  </header>

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
          <input type="text" name="nome" id="nome" required>
          <label for="senha">Senha *</label>
          <input type="password" name="senha" id="senha" required>
          <label for="cpf">CPF *</label>
          <input type="text" name="cpf" id="cpf" required>
          <label for="email">Email *</label>
          <input type="email" name="email" id="email" required>
        </div>
        <div class="conjunto_dados">
          <h2>Endereço</h2>
          <div>
            <label for="pais">País *</label>
            <select name="pais" id="pais"> <!-- Tirei o required para teste! -->
            </select>
            <div class="divisor">
              <div>
                <label for="cep">CEP *</label>
                <input type="text" name="cep" id="cep" required>
              </div>
              <div>
                <label for="logradouro">Logradouro *</label>
                <input type="text" name="logradouro" id="logradouro" required>
              </div>
            </div>
            <div class="divisor">
              <div>
                <label for="numero">Número *</label>
                <input type="text" name="numero" id="numero" required>
              </div>
              <div>
                <label for="bairro">Bairro *</label>
                <input type="text" name="bairro" id="bairro" required>
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
                <input type="text" name="num_cartao" id="num_cartao" required>
              </div>
            </div>
            <div class="divisor">
              <div>
                <label for="validade">validade *</label>
                <input type="text" name="validade" id="validade" placeholder="MM/AA" required>
              </div>
              <div>
                <label for="cod_seguranca">código de segurança *</label>
                <input type="text" name="cod_seguranca" id="cod_seguranca" placeholder="CVV" required>
              </div>
            </div>
          </div>
          <div class="conjunto_dados">
            <h2>Dados finais</h2>
            <div>
              <label for="plano">Selecione um plano *</label>
              <select name="plano" id="plano" required>
                
                <option value='' ></option>
                <option value='kids' <?php echo $kids ?>>Kids</option>
                <option value='scholar' <?php echo $scho ?>>Scholar</option>
                <option value='professional' <?php echo $pro ?>>Professional</option> 
    
              </select> 
            </div>
            <div class="container_valor">
              <p>TOTAL DA COMPRA:</p>
              <span class="total"><?php echo $preco ?></span>
            </div>
          </div>
        </div>
        <div>
          <button class="btn">Finalizar compra</button>
        </div>
      </form>
    </section>
  </div>

  <script type="module" src="src/js/script.js"></script>
</body>

</html>