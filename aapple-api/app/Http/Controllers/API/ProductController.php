<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function get_categry_list(){

        $getlist = Category::all();
        
        return response()->json([
            'status' => 200,
            'category' => $getlist,
        ]);
    }

    public function get_products(){

        $getlist = Products::all();

        if($getlist){

            return response()->json([
                'status' => 200,
                'products' => $getlist,
            ]);
        }
        
        
    }
}
