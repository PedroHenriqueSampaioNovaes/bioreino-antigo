<?php

session_start();
session_destroy(); // termina a sessão

header('Location: ../index.html'); // volta para a home

?>