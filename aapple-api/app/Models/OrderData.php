<?php

namespace App\Models;

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
}
