<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;
use Database\Seeders\TypeSeeder;
use Database\Seeders\TagSeeder;
use Database\Seeders\ItemSeeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            TypeSeeder::class,
            TagSeeder::class,
        ]);

        User::factory()->create([
            'name' => 'Mauro',
            'email' => 'maurocurti1989@gmail.com',
            'password' => Hash::make('falcon4!0'),
        ]);

        User::factory()->create([
            'name' => 'Gi',
            'email' => 'chichusiita@gmail.com',
            'password' => Hash::make('chichusiita'),
        ]);
    }
}
