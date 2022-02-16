<?php

namespace App\Http\Controllers;

use App\Models\Dealer;
use JWTAuth;
use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;

class ApiController extends Controller
{
    public function authenticate(Request $request)
    {
        $login_request = Dealer::where('email','=',$request->input('email'))->where('password','=',$request->input('password'))->where('user_status','=','false')->count();

        if ($login_request) { 
            return response()->json([
                'status' => 201,
                'message' => "You can't login because your request is pending. Please wait for admin approval or Contact admin",
            ]);
        }
        $credentials = $request->only('email', 'password');

        //valid credential
        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required|string|min:6|max:50'
        ]);

        //Send failed response if request is not valid
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }

        //Request is validated
        //Crean token
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json([
                	'success' => false,
                	'message' => 'Login credentials are invalid.',
                ], 400);
            }
        } catch (JWTException $e) {
    	return $credentials;
            return response()->json([
                	'success' => false,
                	'message' => 'Could not create token.',
                ], 500);
        }
 	
 		//Token created, return with success response and jwt token
        return response()->json([
            'success' => true,
            'token' => $token,
            'user' => auth()->user()
        ]);
    }
 
    public function logout(Request $request)
    {
        //return ($request->header('Authorization'));
		//Request is validated, do logout        
        try {
            JWTAuth::invalidate($request->bearerToken());
 
            return response()->json([
                'success' => true,
                'message' => 'User has been logged out'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, user cannot be logged out'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
 
    public function get_user(Request $request)
    {
 
        $user = JWTAuth::authenticate($request->bearerToken());
 
        return response()->json(['user' => $user]);
    }
}
