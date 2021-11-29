<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

$data = json_decode(file_get_contents("php://input"));

    require_once('config.php');

    if(isset($data->email)&&isset($data->password)){

    $email = $data->email;
    $password = $data->password;
    

    $sql = "SELECT * FROM `user_register` WHERE `email`='$email' and `password`='$password'";

    $smt = $conn->query($sql);

    $count = $smt->rowCount();

    $response = array();

    if($count>0){

        $sql1 = "SELECT * FROM `user_register` WHERE `email`='$email' and `password`='$password' and `user_status`='true'";

        $smt1 = $conn->query($sql1);

        $count1 = $smt1->rowCount();

        if($count1>0){
            $response = array(
                'status' => 'ok',
                'message' => 'Login Success'
            );
        }
        else{
            $response = array(
                'status' => 'fail',
                'message' => "You can't login.! Please wait for admin approval, Thank you..!"
            );
        }
        
    }else{
        $response = array(
            'status' => 'fail',
            'message' => 'Invalid username and password'
        );
    }
    
}
echo json_encode($response);
exit;

