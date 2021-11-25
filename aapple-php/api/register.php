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
    

    $sql = "INSERT INTO `user_register`(`email`, `password`, `company_name`, `gst_number`, `contact_person`, `address`, `city`, `district`, `state`, `zip`, `phone`, `alternate_number`) 
    VALUES ('$email','$password','$data->company_name','$data->gst_number','$data->contact_person','$data->address','$data->city','$data->district','$data->state','$data->zip','$data->phone','$data->alternate_number')";

    $smt = $conn->prepare($sql);

    $smt->execute();

    $count = $smt->rowCount();

    $response = array();

    $response = array(
        'status' => 'ok',
        'message' => 'User registered'
    );
}
echo json_encode($response);
exit;
   

