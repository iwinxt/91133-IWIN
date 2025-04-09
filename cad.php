<?php
// configuração do banco de dados
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "cadastro_produtos";

// conexão
$conn = new mysqli($host, $user, $pass, $dbname);

// verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// captura e valida os dados
$produto = trim($_POST['produto'] ?? '');
$preco = floatval($_POST['preco'] ?? '');
$quantidade = intval($_POST['quantidade'] ?? '');
$total = floatval($_POST['total'] ?? '');

if ($produto === "" || $preco <= 0 || $quantidade <= 0) {
    echo "Dados inválidos!";
    exit;
}

// prepara a inserção
$stmt = $conn->prepare("INSERT INTO produtos (produto, preco, quantidade) VALUES (?, ?, ?)");
$stmt->bind_param("sdi", $produto, $preco, $quantidade, );

// executa e verifica
if ($stmt->execute()) {
    echo "Produto cadastrado com sucesso!";
} else {
    echo "Erro ao cadastrar: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
