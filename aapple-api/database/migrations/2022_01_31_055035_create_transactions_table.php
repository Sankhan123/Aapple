<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('dealer_id')->unsigned()->index()->nullable();
            $table->date('date')->nullable();
            $table->string('mode')->nullable();
            $table->string('invoice_no')->nullable();
            $table->bigInteger('inward')->default(0);
            $table->bigInteger('outward')->default(0);
            $table->bigInteger('credit_balance')->default(0);
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
        Schema::dropIfExists('transactions');
    }
}
