<?php

namespace App\Models;
use App\Models\Dealer;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $fillable = [
        
        'dealer_id',
         'pro_count',
          'order_status',
           'total',
   ];
   public function order_data(){
    return $this->hasMany(OrderData::class, 'order_id', 'id');
}
public function dealer_data(){
    return $this->hasMany(Dealer::class, 'id', 'dealer_id');
}

}
