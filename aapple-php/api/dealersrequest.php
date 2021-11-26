<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

    require_once('config.php');

$query = "select * from user_register";
        
        $row = $conn->query($query);
        
        $result = $row->fetchAll(PDO::FETCH_ASSOC);
        
        $count = $row->rowCount();

        if($count) {
            echo json_encode($result);
        } else {
            echo "failed";
        }
?>