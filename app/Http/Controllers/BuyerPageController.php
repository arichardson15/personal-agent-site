<?php

namespace App\Http\Controllers;

use App\Models\FAQS;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BuyerPageController extends Controller
{
    public function show()
    {
        $faqs = FAQS::where('siteSection', 'buy')->get();

        $rows = FAQS::all();

        $seederData = [];

        foreach ($rows as $row) {
            $rowArray = [];
            foreach ($row->toArray() as $column => $value) {
                $rowArray[$column] = $value;
            }
            $seederData[] = $rowArray;
        }

        Log::info('Seeder Data:', $seederData);

        return view('buy-page', ['faqs' => $faqs]);
    }

    public function getFAQS(){return FAQS::all();}
}
