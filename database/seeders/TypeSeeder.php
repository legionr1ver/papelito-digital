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
            ->count(3)
            ->state(new Sequence(
                ['id' => Type::STATIC_INVITATION, 'name' => 'Invitación Fija', 'slug' => 'fija'],
                ['id' => Type::ANIMATED_INVITATION, 'name' => 'Invitación Animada', 'slug' => 'animada'],
                ['id' => Type::KIT, 'name' => 'Kit imprimible', 'slug' => 'kit'],
            ))
            ->create();
    }
}
