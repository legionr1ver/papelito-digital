<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('item_id')->constrained();
            $table->string('birthday_name', 50)->nullable();
            $table->integer('birthday_age')->nullable();
            $table->string('birthday_main_address', 500);
            $table->string('birthday_secondary_address', 500)->nullable();
            $table->date('birthday_date');
            $table->time('birthday_from_time');
            $table->time('birthday_to_time')->nullable();
            $table->string('observation', 500)->nullable();
            $table->string('contact_name', 50);
            $table->string('contact_number', 50);
            $table->boolean('high_priority')->default(false);
            $table->boolean('map_ubication')->default(false);
            $table->boolean('whatsapp_confirmation')->default(false);
            $table->decimal('price');
            $table->string('currency');
            $table->string('payment_method', 50);
            $table->boolean('finished')->default(false);
            $table->nullableMorphs('payment');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
