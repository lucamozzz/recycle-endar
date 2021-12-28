<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        DB::table('pick_ups')->insert([
            'type' => 'Rifiuti speciali',
            'weekday' => 1,
            'start' => '9:00:00',
            'end' => '12:00:00',
            'user_id' => 1
        ]);
    }
}
