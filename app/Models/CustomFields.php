<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomFields extends Model
{
    use HasFactory;

    protected $table = 'custom_fields';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'created_at',
        'updated_at',
        'field_name',
        'field_type',
        'field_value',
    ];
}
