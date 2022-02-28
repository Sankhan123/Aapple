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
    public function add_order(Request $request)
    {
        if($request->input('pro_count')>0){
            $order = new Order;
            $order->dealer_id = $request->input('dealer_id');
            $latestOrder = Order::orderBy('created_at','DESC')->first();
            if($latestOrder){
                $prev_id = $latestOrder->id;
                }else{
                    $prev_id = 0;
                }
            
            $order->order_nr = '#'.str_pad($prev_id+1, 6, "0", STR_PAD_LEFT);
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
            //------------------order notification----------------------//

        $get_data = Dealer::where('id', $request->input('dealer_id'))->get();
        $reg_id = $get_data[0]['id'];
        $name = $get_data[0]['contact_person'];
        $email = $get_data[0]['email'];
        $mobile = $get_data[0]['phone'];

        $details = [
            'title' => "New Order Found",
            'subject' => 'One order was made on Aapple Paints',
            'body' => 'Dealer: '.$name. ' Mobile: '.$mobile.'. Please Check Order.',
        ];
        Mail::to("aapplepaints@gmail.com")->send(new TestMail($details));

        $get_data = Order::where('id', $order->id)->get();
        $order_nr = $get_data[0]['order_nr'];
        $details = [
            'title' => "Your order created",
            'subject' => 'Your order no: '.$order_nr,
            'body' => 'Order Status : Pending.'
        ];
        Mail::to($email)->send(new TestMail($details));

//---------------------------//
        return response()->json([
            'status' => 200,
            'message' => 'Your order created successfully',
        ]);
        }else{
            return response()->json([
                'status' => 200,
                'message' => 'Order cannot create',
            ]);
        }


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

            $get_data = Order::where('id', $request->input('id'))->get();
            $order_nr = $get_data[0]['order_nr'];
            $dealer_id = $get_data[0]['dealer_id'];

            $user_data = Dealer::where('id', $dealer_id)->get();
            $email = $user_data[0]['email'];

            $details = [
                'title' => 'New quote details',
                'subject' => 'Order status : Processing',
                'body' => 'Your order no: '.$order_nr.' of amount is Rs.'.$grant_total.'. Check quote details for your aapple paints account. Waiting for your call confirmation..', 
            ];
    
            Mail::to($email)->send(new TestMail($details));
        
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
        
        $get_data = Order::where('id', $request->input('id'))->get();
            $order_nr = $get_data[0]['order_nr'];
            $dealer_id = $get_data[0]['dealer_id'];

            $user_data = Dealer::where('id', $dealer_id)->get();
            $email = $user_data[0]['email'];

            $details = [
                'title' => 'Invoice generated for your order: '.$order_nr,
                'subject' => 'Order status : Completed',
                'body' => 'Your Invoice No: '.$request->input('invoice_no').'. Your order will delivered soon.. Further quories please contact Aapple Paints. Thank you..! ', 
            ];
    
            Mail::to($email)->send(new TestMail($details));

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
