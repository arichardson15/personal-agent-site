<?php

use App\Http\Controllers\BuyerPageController;
use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\LoginPageController;
use App\Http\Controllers\MainPageController;
use App\Http\Controllers\ManagerController;
use App\Http\Controllers\SellerPageController;
use App\Http\Controllers\TestimonialsPageController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('main-page');
});

Route::get('/about', function () {
    return view('about-page');
});

Route::get('/buyer-search', function () {
    return view('buyer-search-page');
});

Route::get('/buy', [BuyerPageController::class, 'show'])->name('buy.page');

Route::get('/sell', [SellerPageController::class, 'show'])->name('sell.page');

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
Route::post('/new-contact', [ContactFormController::class, 'sendContactForm']);

Route::post('/change-password', [LoginPageController::class, 'updatePassword']);

Route::post('/create-user', [LoginPageController::class, 'createUser']);

Route::post('/save-field', [ManagerController::class, 'saveField']);

Route::post('/create-testimonial', [ManagerController::class, 'createTestimonial']);

Route::post('/login', [LoginPageController::class, 'logInUser']);

Route::post('/logOut', [LoginPageController::class, 'logOutUser']);
Route::get('/get-custom-fields', [MainPageController::class, 'getCustomFields']);

Route::get('/get-faqs', [BuyerPageController::class, 'getFAQS']);

Route::get('/get-testimonials', [TestimonialsPageController::class, 'getTestimonials']);

//Route::middleware('auth')->group(function () {
//
//    Route::get('/get-custom-fields', [MainPageController::class, 'getCustomFields']);
//
//    Route::get('/get-faqs', [BuyerPageController::class, 'getFAQS']);
//});
