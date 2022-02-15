<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calendar extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'user_id'
    ];

    /**
     * Get the user that owns the calendar.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function pickups()
    {
        return $this->hasMany(PickUp::class);
    }
}
