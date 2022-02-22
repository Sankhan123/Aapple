<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\TestMail;
use App\Models\Dealer;
use App\Models\Order;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class DealerController extends Controller
{
    public function register(Request $request){
        $dealer = new Dealer;
        $exits_dealer = Dealer::where('email',$request->input('email'))->count();
        if($exits_dealer){
            return response()->json([
                'status' => 200,
                'message' => 'Your Account already exists, Go to login..!',
            ]);
        }
        $dealer->email = $request->input('email');
        $dealer->password = $request->input('password');
        $dealer->company_name = $request->input('company_name');
        $dealer->gst_number = $request->input('gst_number');
        $dealer->contact_person = $request->input('contact_person');
        $dealer->aadhaar_number = $request->input('aadhaar_number');
        $dealer->address = $request->input('address');
        $dealer->city = $request->input('city');
        $dealer->district = $request->input('district');
        $dealer->state = $request->input('state');
        $dealer->zip = $request->input('zip');
        $dealer->phone = $request->input('phone');
        $dealer->alternate_number = $request->input('alternate_number');

        $dealer->save();

        $details = [
            'title' => "New Dealer Found",
            'subject' => $request->input('email'),
            'body' => 'New dealer registered on Aapple Paints. This dealer waiting for your approval, Hurry Up!'
        ];
        Mail::to("kanism33@gmail.com")->send(new TestMail($details));

        $details = [
            'title' => "Account Created",
            'subject' => 'Your dealer request has been sent',
            'body' => 'Your password for Aapple paints:'.$request->input('password').'. Now you cannot login, please wait for admin approval. Thank you!'
        ];
        Mail::to($request->input('email'))->send(new TestMail($details));

        return response()->json([
            'status' => 200,
            'message' => 'Dealer registered successfully',
        ]);
    }

    public function get_dealer_requests(){

        $dealer_requests = Dealer::where('user_role','=','user')->where('user_status','=','false')->get();

        $dealer_list = Dealer::with('transactions')->where('user_role','=','user')->where('user_status','=','true')->withCount('process')->get();

        return response()->json([
            'status' => 200,
            'dealers' => $dealer_requests,
            'ondealers' => $dealer_list,
        ]);
    }

    public function get_report(){

        $dealer_requests = Dealer::where('user_role','=','user')->where('user_status','=','false')->get();
        $dealer_list = Dealer::where('user_role','=','user')->where('user_status','=','true')->get();
        $orders_list = Order::where('order_status','=','Pending')->get();
        $process_list = Order::where('order_status','=','Processing')->get();
        $reqCount = $dealer_requests->count();
        $dealerCount = $dealer_list->count();
        $orderCount = $orders_list->count();
        $processCount = $process_list->count();
        return response()->json([
            'status' => 200,
            'requests' => $reqCount,
            'dealers' => $dealerCount,
            'orders' => $orderCount,
            'process_orders' => $processCount,
        ]);
    }

    public function get_dealer_by_id($id){

        $dealer_details = Dealer::with('transactions')->where('id',$id)->first();

        return response()->json([
            'status' => 200,
            'dealer' => $dealer_details,
        ]);
    }

    public function update_dealer_status($id){

        $update_status = Dealer::where("id", $id)->update(["user_status" => "true"]);
        $get_data = Dealer::where('id', $id)->get();
        $reg_id = $get_data[0]['id'];
        $name = $get_data[0]['contact_person'];
        $email = $get_data[0]['email'];
        $password = $get_data[0]['password'];
        $user = User::create(array_merge(
            ['reg_id' => $reg_id, 'name' => $name, 'email' => $email,'password' => bcrypt($password)]
        ));
        
        $details = [
            'title' => "Login Request Accepted",
            'subject' => 'Your login request has been accepted by Aapple Paints',
            'body' => 'Now you can login. Click here: http://aapplepaints.com/my-account/'
        ];
        Mail::to($email)->send(new TestMail($details));

        return response()->json([
            'status' => 200,
            'message' => 'Dealer status updated',
        ]);

    }

    public function delete_dealer($id){

        $dealer = Dealer::find($id);
        $dealer -> delete();

        return response()->json([
            'status' => 200,
            'message' => 'Dealer deleted successfully',
        ]);

    }

    public function check_login($email,$password){

        $login_request = Dealer::where('email','=',$email)->where('password','=',$password)->get()->first();

        if ($login_request) { 
            return response()->json([
                'status' => 200,
                'data' => $login_request,
            ]);
        }
        else{
            return response()->json([
                'status' => 'fail',
                'message' => 'Username and password incorrect',
            ]);
        }
        
    }
    public function add_transaction(Request $request){

        $trans = new Transaction();
        $trans->dealer_id = $request->input('dealer_id');
        $trans->date = $request->input('date');
        $trans->mode = $request->input('mode');
        $trans->inward = $request->input('payment');
        $trans->save();
        $trans->id;
        if($trans->id){
            $dealer = Dealer::find($request->input('dealer_id'));
            
            // Make sure you've got the Page model
            if($dealer) {
                $dealer->credit_amount -= $request->input('payment');
                $dealer->save();
                $trans->credit_balance =  $dealer->credit_amount;
                $trans->save();
            }
        }

        return response()->json([
            'status' => 200,
            'message' => 'Transaction successfully',
        ]);
     }

}
