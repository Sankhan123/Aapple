<?php

namespace App\Models;
use App\Models\Category;
use App\Models\Products;
use App\Models\Size;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderData extends Model
{
    use HasFactory;
    protected $table = 'orders_data';
    protected $fillable = [
        
        'order_id',
         'cat_id',
          'product_id',
           'size_id',
            'value',
             'price',
              'subtotal',
   ];

public function category(){
    return $this->hasMany(Category::class, 'id', 'cat_id');
}
public function product(){
    return $this->hasMany(Products::class, 'id', 'product_id');
}
public function size(){
    return $this->hasMany(Size::class, 'id', 'size_id');
}
}
