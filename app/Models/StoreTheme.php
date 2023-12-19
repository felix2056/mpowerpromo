<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class StoreTheme extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    public function store()
    {
        return $this->belongsTo(Store::class);
    }

    public function theme()
    {
        return $this->belongsTo(Theme::class);
    }

    public function announcementBars()
    {
        return $this->hasMany(AnnouncementBar::class, 'theme_id');
    }
}
