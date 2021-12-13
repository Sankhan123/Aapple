<?php

use App\Http\Controllers\API\DealerController;
use App\Http\Controllers\API\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/dealer-register',[DealerController::class,'register']);

Route::get('/dealersrequest',[DealerController::class,'get_dealer_requests']);

Route::put('/update-dealer/{id}',[DealerController::class,'update_dealer_status']);

Route::delete('/delete-dealer/{id}',[DealerController::class,'delete_dealer']);

Route::get('getlogin/{val1}/{val2}',[DealerController::class,'check_login']);

Route::get('get-products',[ProductController::class,'get_products']);

Route::get('/getcategory',[ProductController::class,'get_categry_list']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

});
