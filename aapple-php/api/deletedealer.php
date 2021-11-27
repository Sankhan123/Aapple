<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

//parse_str(file_get_contents("php://input"),$putData); 
$data = json_decode(file_get_contents("php://input"));

    require_once('config.php');

    if(isset($data->reg_id)){

    $reg_id = $data->reg_id;

    $sql = "DELETE FROM `user_register` WHERE `reg_id`='".$reg_id."'";
   
    $row = $conn->prepare($sql);

    $row->execute();

    $count = $row->rowCount();

    $response = array();

    if($count) {
        $response = array(
            'status' => 'ok',
            'message' => 'User Deleted'
        );
        echo json_encode($response);
    } else {
        $response = array(
            'status' => 'fail',
            'message' => 'User Cannot Delete'
        );
        echo json_encode($response);
    }
    
}
exit;