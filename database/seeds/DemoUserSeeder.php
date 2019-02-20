<?php

use Illuminate\Database\Seeder;
use App\User;
use Illuminate\Support\Facades\Hash;

class DemoUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User;
        $user->name = 'John Doe';
        $user->email = 'john@doe.com';
        $user->password = Hash::make('password');
        $user->email_verified_at = date('Y-m-d H:i:s');
        $user->save();
    }
}
