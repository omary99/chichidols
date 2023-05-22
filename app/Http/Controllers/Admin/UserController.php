<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    //
    public function index(){
        $users = User::latest()->get();

        return $users;
    }
}
