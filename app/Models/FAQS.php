<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FAQS extends Model
{
    use HasFactory;

    protected $table = 'faqs';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'created_at',
        'updated_at',
        'site_section',
        'question',
        'answer',
        'number',
    ];
}
