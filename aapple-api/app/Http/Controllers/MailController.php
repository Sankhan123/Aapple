<?php

namespace App\Http\Controllers;

use App\Mail\TestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendEmail(){
        $details = [
            'title' => 'Mail from Aapple paints',
            'body' => 'This is for testing mail using gmail.'
        ];

        Mail::to("syauchennai@gmail.com")->send(new TestMail($details));
        return "Email Sent";
    }
}
