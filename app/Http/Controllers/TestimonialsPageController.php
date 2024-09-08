<?php

namespace App\Http\Controllers;

use App\Models\Testimonials;
use Illuminate\Http\Request;

class TestimonialsPageController extends Controller
{
    public function getTestimonials(){
        $testimonials = Testimonials::orderby('created_at','DESC')->limit(8)->get();
        $testimonialsString = '';

        foreach($testimonials as $testimonial){
            $testimonialsString .= '"' . $testimonial['testimonial'] . '"';
            $testimonialsString .= '<br><br>';
            $testimonialsString .= '<strong>' . $testimonial['name'] . '</strong>';
            $testimonialsString .= '<br><br><br>';
        }

        return $testimonialsString;
    }
}
