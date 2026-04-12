<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$email = $data->email;
$password = $data->password;

// 🔐 hash password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (username, email, password)
VALUES ('$username', '$email', '$hashedPassword')";

if ($conn->query($sql)) {
    echo json_encode(["message" => "User registered"]);
} else {
    echo json_encode(["error" => "Error"]);
}

$conn->close();

?>