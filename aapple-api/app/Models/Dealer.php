<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dealer extends Model
{
    use HasFactory;
    protected $table = 'dealers';
    //protected $hidden = ['password'];
    protected $fillable = [
        
         'email',
          'password',
           'company_name',
            'gst_number',
             'contact_person',
              'address',
               'city',
                'district',
                 'state',
                  'zip',
                   'phone',
                    'alternate_number',
                     'user_status',
                      'user_role',
                       'credit_amount',
    ];
}
