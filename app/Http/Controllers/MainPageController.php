<?php

namespace App\Http\Controllers;

use App\Models\CustomFields;
use Illuminate\Http\Request;

class MainPageController extends Controller
{
    public function getCustomFields(){return CustomFields::all();}
}
