<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    protected $table = 'transactions';
    protected $casts = [
        'date' => 'datetime:d-m-Y',
    ];
    protected $fillable = [
        
        'dealer_id',
         'date',
          'mode',
          'before_transaction',
           'payment',
           'credit_balance',
   ];
}
