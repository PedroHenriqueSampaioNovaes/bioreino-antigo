-- Cria o banco de dados onde haverá as informações de login:

CREATE DATABASE IF NOT EXISTS LOGIN_INFO;
USE LOGIN_INFO;

-- Criação da tabela de alunos:

CREATE TABLE IF NOT EXISTS alunos (
	cpf char(11) NOT NULL,
    nome varchar(40) NOT NULL,
    senha binary(32) NOT NULL,
    plano char(12) NOT NULL,
    email varchar(32) NOT NULL,

    PRIMARY KEY(cpf, email)
);