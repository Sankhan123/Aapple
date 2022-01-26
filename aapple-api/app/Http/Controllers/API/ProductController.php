<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function get_categry_list(){

        $products = Category::with('product')->with('size')->get();
        
        return response()->json([
            'status' => 200,
            'category' => $products,
        ]);
    }

    public function get_products(){

        $getlist = Category::with('product')->with('size')->get();

        if($getlist){

            return response()->json([
                'status' => 200,
                'products' => $getlist,
            ]);
        }
        
        
    }
}
