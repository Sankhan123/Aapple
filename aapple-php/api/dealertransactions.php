<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

$data = json_decode(file_get_contents("php://input"));

    require_once('config.php');

    if(isset($data->date)&&isset($data->payment)){
    $date = $data->date;
    $payment = $data->payment;
    
    $sql = "INSERT INTO `dealer_transaction`(`dealer_id`, `date`, `entry_from`, `trans_mode`, `inward`, `outward`, `credit_balance`, `status`) 
    VALUES ('','$date','$data->company_name','$data->gst_number','$data->contact_person','$data->address','$data->city','$data->district','$data->state','$data->zip','$data->phone','$data->alternate_number')";

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