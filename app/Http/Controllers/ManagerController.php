<?php

namespace App\Http\Controllers;

use App\Models\CustomFields;
use App\Models\FAQS;
use App\Models\Testimonials;
use Illuminate\Http\Request;

class ManagerController extends Controller
{
    function saveField(Request $request)
    {
        // Handle FAQs table
        if ($request->table_name === 'faqs') {
            $field = FAQS::where('id', $request->id)->first();
            if (!$field) {
                return response()->json(['message' => 'Field not found'], 404);
            }

            $field->question = $request->newFieldName;
            $field->answer = $request->newFieldValue;

            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('images', 'public');
                $field->imagePath = $imagePath;
            }

            $field->save();

            return response()->json(['message' => 'FAQ saved successfully']);
        }

        // Handle CustomFields table
        $field = CustomFields::where('id', $request->id)->first();
        if (!$field) {
            return response()->json(['message' => 'Field not found'], 404);
        }

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
            $field->imagePath = asset('storage/' . $imagePath);
        }

        if ($request->hasFile('image2')) {
            $imagePath2 = $request->file('image2')->store('images', 'public');
            $field->imagePath2 = asset('storage/' . $imagePath2);
        }

        $field->field_value = $request->newFieldValue;
        $field->save();

        return response()->json(['message' => 'Field saved successfully']);
    }


    function createTestimonial(Request $request)
    {
        $testimonialValue = $request->newFieldValue;
        $name = $request->newFieldName;

        $testimonial = new Testimonials();
        $testimonial->created_at = date("Y-m-d H:i:s");
        $testimonial->updated_at = date("Y-m-d H:i:s");
        $testimonial->name = $name;
        $testimonial->testimonial = $testimonialValue;
        $testimonial->save();
    }
}
