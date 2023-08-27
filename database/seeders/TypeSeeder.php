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
                ['name' => 'Fija', 'slug' => 'fija'],
                ['name' => 'Video', 'slug' => 'video'],
            ))
            ->create();
    }
}
