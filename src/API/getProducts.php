<?php
header('Content-Type: application/json');

// Conexão com o banco
$conn = new mysqli("localhost", "root", "", "loja_roupas");
if ($conn->connect_error) {
    die(json_encode(["error" => "Erro na conexão com o banco de dados."]));
}

// Buscar produtos
$sql = "SELECT * FROM produtos";
$result = $conn->query($sql);

$produtos = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $row['imagem'] = 'http://localhost/loja/api/imagens/' . $row['imagem'];
        $produtos[] = $row;
    }
}

echo json_encode($produtos);
$conn->close();
