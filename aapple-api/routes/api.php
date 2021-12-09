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

Route::get('/getcategory',[ProductController::class,'get_categry_list']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

});
