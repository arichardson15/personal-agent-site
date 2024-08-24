<?php

namespace App\Http\Controllers;

use App\Models\FAQS;

class SellerPageController extends Controller
{
    public function show()
    {
        $faqs = FAQS::where('siteSection', 'Sell')->get();

        return view('sell-page', ['faqs' => $faqs]);
    }

    public function getFAQS(){return FAQS::all();}
}
