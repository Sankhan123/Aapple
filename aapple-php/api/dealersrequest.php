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
        
        if ($count > 0) {
            
            return $result = array(
                'status' => 'success',
                'data' => $result
            );
             
        } else {
            
            return $result = array(
                'status' => 'noresult',
                'message' => 'There Is No Data'
            );
        }

        echo json_encode($result);
?>