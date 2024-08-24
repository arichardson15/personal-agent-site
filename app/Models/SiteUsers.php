<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SiteUsers extends Authenticatable
{
    use HasFactory;

    protected $table = 'site_users';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone_number',
        'password',
    ];

    // Optionally, you can add hidden fields (e.g., password) to prevent them from being exposed
    protected $hidden = [
        'password',
    ];
}
