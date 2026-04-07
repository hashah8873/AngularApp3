<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;
$title = $data->title;
$author = $data->author;
$description = $data->description;

$sql = "UPDATE books SET 
title='$title',
author='$author',
description='$description'
WHERE id=$id";

$conn->query($sql);

echo json_encode(["message" => "Book updated"]);

$conn->close();

?>