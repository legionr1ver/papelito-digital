<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Sequence;
use App\Models\Tag;

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
                ['label' => 'Baby Shower', 'slug' => 'baby-shower', 'color' => 'rgb(178 160 217)'],
                ['label' => 'Comuniones', 'slug' => 'comuniones', 'color' => 'rgb(178 160 217)'],
                ['label' => 'Bautismos', 'slug' => 'bautismos', 'color' => 'rgb(178 160 217)'],
                ['label' => 'Bodas', 'slug' => 'bodas', 'color' => 'rgb(178 160 217)'],
                ['label' => 'Cumpleaños Adultos', 'slug' => 'cumpleaños-adultos', 'color' => 'rgb(178 160 217)'],
                ['label' => 'Cumpleaños Niños', 'slug' => 'cumpleaños-niños', 'color' => 'rgb(178 160 217)'],
            ))
            ->create();
    }
}