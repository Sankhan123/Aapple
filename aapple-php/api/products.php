<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

    require_once('config.php');

        $query = "select * from product_category";
        
        $c_row = $conn->query($query);
        
        $c_result = $c_row->fetchAll(PDO::FETCH_ASSOC);
        
        $count = $c_row->rowCount();

        if($count) {

            foreach($c_result as $key => $val){

                $size_arr = explode(',', $val['sizes']);

			 	$sub_query = "select * from `product` where `cat_id`='$val[cat_id]'";
        
				$p_row = $conn->query($sub_query);

                $p_result = $p_row->fetchAll(PDO::FETCH_ASSOC);
				
				$c_result[$key]['products']=$p_result;

                $ss_result = [];

                foreach($size_arr as $keys => $size_id){    
                    				
                    $sub_query = "select * from `product_size` where `size_id`='$size_id'";
            
                    $s_row = $conn->query($sub_query);
    
                    $s_result = $s_row->fetchAll(PDO::FETCH_ASSOC);
                   
                    $ss_result[$keys]=$s_result[0];
                    
                }
                
                $c_result[$key]['sizes']=$ss_result;
                
			}
            
            $response = array(
                "status" => "ok",
                "data" => $c_result
            );
            
        } else {
            $response = array(
                "status" => "fail",
                "message" => "Can't fetch product details"
            );
        }
        echo json_encode($response);
    
?>