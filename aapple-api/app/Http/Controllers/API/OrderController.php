<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderData;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function add_order(Request $request){

        $order = new Order;
        $order->dealer_id = $request->input('dealer_id');
        $order->pro_count = $request->input('pro_count');
        $order->order_status = $request->input('order_status');
        $order->save();
        $order->id;
        if($order->id != ''){
            $data = $request->input('order');
            foreach ($data as $order_data) {
                $orders = new OrderData;
                $orders->order_id = $order->id;
                $orders->cat_id = $order_data['cat_id'];
                $orders->cat_name = $order_data['cat_name'];
                $orders->product_id = $order_data['product_id'];
                $orders->product_name = $order_data['product_name'];
                $orders->size_id = $order_data['size_id'];
                $orders->size_name = $order_data['size_name'];
                $orders->value = $order_data['value'];
                $orders->save();
            }
        
        }

        return response()->json([
            'status' => 200,
            'message' => 'Ordered successfully',
        ]);
     }

     public function get_orders(){
       $getlist = Order::with('order_data')->with('dealer_data')->where('order_status','Pending')->get();
            return response()->json([
                'status' => 200,
                'orders' => $getlist,
            ]);
     }
}
