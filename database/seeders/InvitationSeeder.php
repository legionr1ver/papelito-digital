<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Sequence;
use App\Models\Type;
use App\Models\Invitation;

class InvitationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Invitation::factory()
            ->count(7)
            ->state(new Sequence(
                ['title' => 'Baby Shower Juli', 'type_id' => Type::FIJA, 'source' => '1-baby-shower-juli.jpg'],
                ['title' => 'Cumple Bruno', 'type_id' => Type::FIJA, 'source' => '2-cumple-bruno.jpg'],
                ['title' => 'Cumple Gino y Mirko', 'type_id' => Type::FIJA, 'source' => '3-cumple-gino-y-mirko.jpg'],
                ['title' => 'Cumple Giselle', 'type_id' => Type::FIJA, 'source' => '4-cumple-giselle.jpg'],
                ['title' => 'Cumple Santi', 'type_id' => Type::FIJA, 'source' => '5-cumple-santi.jpg'],
                ['title' => 'Cumple Thomi', 'type_id' => Type::FIJA, 'source' => '6-cumple-thomi.jpg'],
                ['title' => 'Cumple Oliver', 'type_id' => Type::FIJA, 'source' => '7-cumple-oliver.jpg'],
            ))
            ->create();
    }
}