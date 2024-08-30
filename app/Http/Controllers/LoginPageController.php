<?php

namespace App\Http\Controllers;

use App\Models\CustomFields;
use App\Models\SiteUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginPageController extends Controller
{
    public function createUser(Request $request){
        $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phoneNumber' => 'required|string|max:15',
            'password' => 'required|string|min:8',
        ]);

        $user = new SiteUsers();
        $user->first_name = $request->firstName;
        $user->last_name = $request->lastName;
        $user->email = $request->email;
        $user->phone_number = $request->phoneNumber;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json(['message' => 'User created successfully!'], 201);
    }

    public function logInUser(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');

        $user = SiteUsers::where('email', $request->email)->first();

        if ($user && Hash::check($request->password, $user->password)) {
            Auth::login($user);
            // Passwords match
            return 'Successfully logged in';
        } else {
            // Passwords don't match or user doesn't exist
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    }

    public function logOutUser()
    {
        Auth::logout();
        return 'Successfully logged out';
    }

    public function updatePassword(Request $request){
        $request->validate([
            'email' => 'required|email',
            'newPassword' => 'required|string|min:8',
        ]);

        $user = SiteUsers::where('email', $request->email)->first();
        if(!$user){
            return response()->json(['message' => 'Could not find user with given email.'], 422);
        }
        $user->password = Hash::make($request->newPassword);
        $user->save();
        return response()->json(['message' => 'Password updated successfully.'], 204);
    }
}
