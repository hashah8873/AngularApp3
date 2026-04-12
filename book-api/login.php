<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

include 'db.php';

// 🔥 مهم جدًا
$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$password = $data['password'];

$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "fail"]);
}

$conn->close();

?>