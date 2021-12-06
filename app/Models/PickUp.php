<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PickUp extends Model
{
    use HasFactory;
    protected $fillable = [
        'type',
        'weekday',
        'start',
        'end',
        'notes'
    ];
}
