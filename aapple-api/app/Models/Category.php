<?php

namespace App\Models;
use App\Models\Products;
use App\Models\Size;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $table = 'categories';
    protected $fillable = [

        'cat_name',
         'sizes',
    ];

    public function product(){
        return $this->hasMany(Products::class, 'cat_id', 'id');
    }
    public function size(){
        return $this->hasMany(Size::class, 'cat_id', 'id');
    }
}
