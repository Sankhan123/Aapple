<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders_data', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('order_id')->unsigned()->index()->nullable();
            $table->integer('cat_id')->nullable();
            $table->integer('product_id')->nullable();
            $table->integer('size_id')->nullable();
            $table->integer('value')->nullable();
            $table->bigInteger('price')->nullable();
            $table->bigInteger('subtotal')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders_data');
    }
}
