<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnnouncementBar extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function theme()
    {
        return $this->belongsTo(StoreTheme::class, 'theme_id');
    }

    public function blocks()
    {
        return $this->hasMany(AnnouncementBlock::class, 'component_id');
    }
}
