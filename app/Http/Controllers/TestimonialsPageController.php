<?php

namespace App\Http\Controllers;

use App\Models\Testimonials;
use Illuminate\Http\Request;

class TestimonialsPageController extends Controller
{
    public function getTestimonials(){
        $testimonials = Testimonials::orderby('created_at', 'DESC')->limit(8)->get();
        $testimonialsArray = [];

        foreach($testimonials as $testimonial){
            $testimonialsArray[] = [
                'testimonial' => $testimonial['testimonial'],
                'name' => $testimonial['name']
            ];
        }

        return $testimonialsArray;
    }

}
