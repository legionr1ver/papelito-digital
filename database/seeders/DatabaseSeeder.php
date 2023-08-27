<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\TypeSeeder;
use Database\Seeders\TagSeeder;
use Database\Seeders\InvitationSeeder;

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
            InvitationSeeder::class,
        ]);
    }
}
