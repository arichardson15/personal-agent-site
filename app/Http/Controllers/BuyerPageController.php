<?php

namespace App\Http\Controllers;

use App\Models\FAQS;
use Illuminate\Http\Request;

class BuyerPageController extends Controller
{
    public function show()
    {
        $faqs = FAQS::where('siteSection', 'buy')->get();

        return view('buy-page', ['faqs' => $faqs]);
    }

    public function getFAQS(){return FAQS::all();}
}
