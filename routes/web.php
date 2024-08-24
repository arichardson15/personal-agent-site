<?php

use App\Http\Controllers\BuyerPageController;
use App\Http\Controllers\MainPageController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('main-page');
});

Route::get('/about', function () {
    return view('about-page');
});
Route::get('/buy', [BuyerPageController::class, 'show'])->name('buy.page');

Route::get('/sell', [\App\Http\Controllers\SellerPageController::class, 'show'])->name('sell.page');

Route::get('/login', function () {
    return view('login-page');
});
Route::get('/contact', function () {
    return view('contact-page');
});
Route::get('/testimonials', function () {
    return view('testimonials-page');
});
Route::get('/mortgage-calculator', function () {
    return view('mortgage-calculator-page');
});

Route::get('/manager', function () {
    return view('manager-page');
});

Route::get('/edit-faqs', function () {
    return view('faq-manager-page');
});
Route::post('/new-contact', [\App\Http\Controllers\ContactFormController::class, 'sendContactForm']);

Route::post('/create-user', [\App\Http\Controllers\LoginPageController::class, 'createUser']);

Route::post('/save-field', [\App\Http\Controllers\ManagerController::class, 'saveField']);

Route::post('/login', [\App\Http\Controllers\LoginPageController::class, 'logInUser']);

Route::post('/logOut', [\App\Http\Controllers\LoginPageController::class, 'logOutUser']);

Route::get('/get-custom-fields', [MainPageController::class, 'getCustomFields']);

Route::get('/get-faqs', [BuyerPageController::class, 'getFAQS']);
