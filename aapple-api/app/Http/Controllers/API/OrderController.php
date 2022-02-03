<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Dealer;
use App\Models\Order;
use App\Models\OrderData;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Mail\TestMail;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{
    public function add_order(Request $request){

        $order = new Order;
        $order->dealer_id = $request->input('dealer_id');
        $order->pro_count = $request->input('pro_count');
        $order->order_status = $request->input('order_status');
        $order->save();
        $order->id;
        if($order->id != '' ){
            $data = $request->input('order');
            foreach ($data as $order_data) {
                if($order_data['value']!=''){
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
        
        }

        return response()->json([
            'status' => 200,
            'message' => 'Ordered successfully',
        ]);
     }
     public function add_price(Request $request){
            $orders = new OrderData;
            $grant_total = 0;
            $data = $request->input('order_data');
            foreach ($data as $key=>$order_data) {
                $grant_total += $data[$key]['subtotal'];
                $user = OrderData::find($data[$key]['id']);
                $user->price = $data[$key]['price'];
                $user->subtotal = $data[$key]['subtotal'];
                $user->gst_amount = $data[$key]['gst_amount'];
                $user->gst = $data[$key]['gst'];
                $user->save();
            }
            $list = Order::find($request->input('id'));
            $list->total = $grant_total;
            $list->order_status = "Processing";
            $list->save();

            $details = [
                'title' => $request->input('email'),
                'body' => 'Your order no #'.$request->input('id').' amount is Rs.'.$grant_total.' (Status: Processing). Waiting for your call confirmation..', 
            ];
    
            Mail::to($request->input('email'))->send(new TestMail($details));
        
        return response()->json([
            'status' => 200,
            'message' => 'Price added successfully',
        ]);
    }
    public function update_order(Request $request){
       
        $order = new Order();
        $list = Order::find($request->input('id'));
        if($list) {
            $list->order_status = "Completed";
            $list->save();
            $total = OrderData::where('order_id',$request->input('id'))->sum('subtotal');
            $dealer = Dealer::find($request->input('dealer_id'));
            $dealer->credit_amount += $total;
            $dealer->save();
            $trans = new Transaction();
            $trans->dealer_id = $request->input('dealer_id');
            $trans->date = date('Y-m-d');
            $trans->mode = "Invoice";
            $trans->outward = $total;
            $trans->invoice_no = $request->input('invoice_no');
            $trans->credit_balance = $dealer->credit_amount;
            $trans->save();
        }
        $details = [
            'title' => $request->input('email'),
            'body' => 'Your order no #'.$request->input('id').' amount is Rs.'.$total.' (Status: Confirmed)', 
        ];

        Mail::to($request->input('email'))->send(new TestMail($details));
        return response()->json([
            'status' => 200,
            'message' => 'Order confirmed',
        ]);
    }

    public function delete_order($id){

        $order = Order::find($id)-> delete();
        $order_data = OrderData::where('order_id','=',$id)-> delete();

        return response()->json([
            'status' => 200,
            'message' => 'Order deleted successfully',
        ]);

    }



     public function get_orders(){
       $getlist = Order::with('order_data')->with('dealer_data')->where('order_status','Pending')->get();
            return response()->json([
                'status' => 200,
                'orders' => $getlist,
            ]);
     }
     public function get_orders_by_id($id){
        $getlist = Order::with('order_data')->with('dealer_data')->where('order_status','Pending')->where('dealer_id',$id)->get();
        $process = Order::with('order_data')->with('dealer_data')->where('order_status','Processing')->where('dealer_id',$id)->get();
        $complete = Order::with('order_data')->with('dealer_data')->where('order_status','Completed')->where('dealer_id',$id)->get();
             return response()->json([
                 'status' => 200,
                 'orders' => $getlist,
                 'process_orders'=>$process,
                 'complete_orders'=>$complete,
             ]);
      }
}
