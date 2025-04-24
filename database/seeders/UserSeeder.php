<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;

class UserSeeder extends Seeder
{
  public function run(): void
  {
    $users = [
      [
        'name' => 'Admin User',
        'email' => 'admin@example.com',
        'phone' => '081234567890',
        'role' => 'admin',
      ],
      [
        'name' => 'Owner User',
        'email' => 'owner@example.com',
        'phone' => '081234567891',
        'role' => 'owner',
      ],
      [
        'name' => 'Customer User',
        'email' => 'customer@example.com',
        'phone' => '081234567892',
        'role' => 'customer',
      ],
    ];

    foreach ($users as $user) {
      User::create([
        'id' => Str::uuid(),
        'name' => $user['name'],
        'email' => $user['email'],
        'phone' => $user['phone'],
        'role' => $user['role'],
        'password' => Hash::make('12345678'),
      ]);
    }
  }
}
