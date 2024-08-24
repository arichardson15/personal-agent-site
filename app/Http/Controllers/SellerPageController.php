<?php

namespace App\Http\Controllers;

use App\Models\FAQS;

class SellerPageController extends Controller
{
    public function show()
    {
        $faqs = FAQS::all();

        return view('sell-page', ['faqs' => $faqs]);
    }

    public function getFAQS(){return FAQS::all();}
}
