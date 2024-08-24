<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Services\SmsService;

class ContactFormController extends Controller
{

    protected $smsService;

    public function __construct(SmsService $smsService)
    {
        $this->smsService = $smsService;
    }

    public function sendContactForm(Request $request)
    {
        $data = $request->all();

        Mail::to(env('TWILIO_TO_EMAIL_ADDRESS'))->send(new ContactFormMail($data));
        $textSent = $this->textNotification($data);

        return response()->json(['message' => 'Email sent successfully!', $textSent], 200);
    }

    public function textNotification($data){
        $message = "Contact Form Submission\n";
        $message .= "First Name: " . $data['firstName'] . "\n";
        $message .= "Last Name: " . $data['lastName'] . "\n";
        $message .= "Email: " . $data['email'] . "\n";
        $message .= "Phone Number: " . $data['phoneNumber'] . "\n";
        $message .= "Message: " . $data['message'];

        $to = env('TWILIO_TO_PHONE_NUMBERS');
        try {
            $success = $this->smsService->sendSms($to, $message);
        } catch (\Exception $e) {

        }

        if ($success) {
            return response()->json(['message' => 'SMS sent successfully']);
        } else {
            return response()->json(['message' => 'Failed to send SMS'], 500);
        }
    }
}
