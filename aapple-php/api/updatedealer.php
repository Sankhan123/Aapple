<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

$data = json_decode(file_get_contents("php://input"));

    require_once('config.php');

    if(isset($data->user_status)&&isset($data->reg_id)){

    $user_status = $data->user_status;
    $reg_id = $data->reg_id;
    

    $sql = "UPDATE `user_register` SET `user_status`='".$user_status."' WHERE `reg_id`='".$reg_id."'";
   
    $row = $conn->prepare($sql);

    $row->execute();

    $count = $row->rowCount();

    $response = array();

    if($count) {
        $response = array(
            'status' => 'ok',
            'message' => 'User Updated'
        );
        echo json_encode($response);
    } else {
        $response = array(
            'status' => 'fail',
            'message' => 'User Cannot Update'
        );
        echo json_encode($response);
    }
    
}
exit;