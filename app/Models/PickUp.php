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
        'notes',
        'user_id'
    ];

    /**
     * Get the user that owns the pickup.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
