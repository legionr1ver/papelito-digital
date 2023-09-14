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
            $table->foreignId('invitation_id')->constrained();
            $table->string('name', 50);
            $table->string('address', 500);
            $table->string('observation', 500)->nullable();
            $table->string('phone_number', 50);
            $table->boolean('map_ubication')->default(false);
            $table->boolean('whatsapp_confirmation')->default(false);
            $table->decimal('price');
            $table->string('payment_method', 50);
            $table->string('payment_external_id')->nullable();
            $table->string('payment_extra')->nullable();
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
