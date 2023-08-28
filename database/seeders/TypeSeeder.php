<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Sequence;
use App\Models\Type;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Type::factory()
            ->count(2)
            ->state(new Sequence(
                ['id' => Type::FIJA, 'name' => 'Fija', 'slug' => 'fija'],
                ['id' => Type::ANIMADA, 'name' => 'Animada', 'slug' => 'animada'],
            ))
            ->create();
    }
}
