<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include 'db.php';

$id = $_GET['id'];

$sql = "DELETE FROM books WHERE id = $id";

$conn->query($sql);

echo json_encode(["message" => "Book deleted successfully"]);

$conn->close();

?>