<?php

namespace App\Http\Controllers;

use App\Models\CustomFields;
use App\Models\FAQS;
use App\Models\SiteUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class ManagerController extends Controller
{
    function saveField(Request $request)
    {
        if($request->table_name === 'faqs'){
            $field = FAQS::where('id', $request->id)->first();
            if ($field) {
                $field->answer = $request->newFieldValue;
                $field->question = $request->newFieldName;
                $field->save();
            }
            else {
                return 'Field not found';
            }
        }

        // Find the first record with the matching field_name
        $field = CustomFields::where('id', $request->id)->first();

        if ($field) {
            $field->field_value = $request->newFieldValue;
            $field->save();
        }
        else{
            return 'Field not found';
        }

        return 'Field Saved Successfully';
    }
}
