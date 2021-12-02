<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

    require_once('config.php');

        $query = "SELECT `reg_id`, `email`, `company_name`, `gst_number`, `contact_person`, `address`, `city`, `district`, `state`, `zip`, `phone`, `alternate_number`, `user_status`, `user_role` FROM `user_register`";
        
        $row = $conn->query($query);
        
        $result = $row->fetchAll(PDO::FETCH_ASSOC);
        
        $count = $row->rowCount();

        if($count) {
            echo json_encode($result);
        } else {
            echo "failed";
        }
?>