<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnnouncementBlock extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function announcementBar()
    {
        return $this->belongsTo(AnnouncementBar::class, 'component_id');
    }
}
