CREATE DATABASE IF NOT EXISTS estoque;

USE estoque;

CREATE TABLE IF NOT EXISTS usuarios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(225) NOT NULL
    
);

INSERT INTO usuarios(usuario, senha)
VALUES('admin', PASSWORD('admin123'));
