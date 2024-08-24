<?php

namespace App\Http\Controllers;

use App\Models\User;

abstract class Controller
{
    //

    public function addUser()
    {

// Example of creating a new user
        $user = new User();
        $user->name = 'John Doe';
        $user->email = 'john.doe@example.com';
        $user->password = bcrypt('password123'); // You should hash passwords in production

        $user->save();
    }

}
