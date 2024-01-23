<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Sequence;
use App\Models\Tag;
use App\Models\Configuration;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Tag::factory()
            ->count(6)
            ->state(new Sequence(
                ['label' => 'Baby Shower', 'slug' => 'baby-shower'],
                ['label' => 'Comuniones', 'slug' => 'comuniones'],
                ['label' => 'Bautismos', 'slug' => 'bautismos'],
                ['label' => 'Bodas', 'slug' => 'bodas'],
                ['label' => 'Cumpleaños Adultos', 'slug' => 'cumpleaños-adultos'],
                ['label' => 'Cumpleaños Niños', 'slug' => 'cumpleaños-niños'],
            ))
            ->create();

        Configuration::factory()
            ->count(6)
            ->state(new Sequence(
                ['variable' => 'high_priority_price_ars', 'value' => 200],
                ['variable' => 'map_ubication_price_ars', 'value' => 150],
                ['variable' => 'whatsapp_confirmation_price_ars', 'value' => 150],
                ['variable' => 'high_priority_price_usd', 'value' => 5],
                ['variable' => 'map_ubication_price_usd', 'value' => 2],
                ['variable' => 'whatsapp_confirmation_price_usd', 'value' => 2],
            ))
            ->create();
    }
}