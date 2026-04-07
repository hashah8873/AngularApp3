<?php

header("Access-Control-Allow-Origin: *");

$targetDir = "uploads/";

if (!is_dir($targetDir)) {
    mkdir($targetDir, 0777, true);
}

$fileName = basename($_FILES["file"]["name"]);
$targetFile = $targetDir . $fileName;

if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
    echo json_encode(["message" => "File uploaded"]);
} else {
    echo json_encode(["message" => "Upload failed"]);
}

?>