<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonials extends Model
{
    use HasFactory;
    protected $table = 'testimonials';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'name',
        'testimonials',
        'created_at',
        'updated_at',
    ];

    // Optionally, you can add hidden fields (e.g., password) to prevent them from being exposed
    protected $hidden = [
        'password',
    ];
}
