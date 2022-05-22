<?php
// sessão já iniciada e conexão já feita, pois já existe script atribuido na dashboard.

$curso1;                        // variável que vai guardar o código do curso;
$email = $_SESSION['email'];    // armazena o endereço de email para a requisição.

// requisição e verificação do plano:
$query = mysqli_fetch_array(mysqli_query($conexao, "SELECT plano FROM alunos WHERE email = '{$email}' "));
$plano = $query[0];

// seletor de cursos:
switch ($plano){
    case "kids":
        // curso dos dinossauros:
        $curso1 = "
        <img src='src/img/cursos/dinossauros.png' alt='Curso sobre dinossauros.'>
        <div class='descricao_curso'>
          <div class='titulo_curso'>
            <h3>Os dinossauros</h3>
            <div class='tipo'>
              <div>
                <span class='letra_vermelho'>K</span><span class='letra_laranja'>i</span><span class='letra_azul'>d</span><span class='letra_verde'>s</span>
              </div>
              <img src='src/img/cursos/abc.svg' alt='plano kids.'>
            </div>
          </div>
          <span class='professor'>Prof. Isaak Valentin</span>
          <p class='sobre'>Aprenda sobre os diversos dinossauros que habitavam nosso mundo!
          </p>
        </div>
        ";
        break;
    case "professional":
        // forense:
        $curso1 ="
        <img src='src/img/cursos/biologia-forense.png' alt='Curso sobre biologia forense.'>
        <div class='descricao_curso'>
          <div class='titulo_curso'>
            <h3>Biologia Forense</h3>
            <div class='tipo'>
              <span>Professional</span>
              <img src='src/img/cursos/lab.svg' alt='plano professional.'>
            </div>
          </div>
          <span class='professor'>Prof. Fábio de Lima</span>
          <p class='sobre'>Aprenda táticas investigativas envolvendo a biologia e conheça como os profissionais dessa área trabalham!
          </p>
        </div>
        ";
        break;
    case "scholar":
        // reino animal:
        $curso1="
        <img src='src/img/cursos/reino-animal.png' alt='Curso sobre reino animal.'>
        <div class='descricao_curso'>
          <div class='titulo_curso'>
            <h3>Reino Animal</h3>
            <div class='tipo'>
              <span>Scholar</span>
              <img src='src/img/cursos/mochila.svg' alt='plano scholar.'>
            </div>
          </div>
          <span class='professor'>Prof. Ivan Soares</span>
          <p class='sobre'>Conheça os diversos seres que pertencem a esse reino e suas principais características!
          </p>
        </div>
        ";
        break;
    };
?>