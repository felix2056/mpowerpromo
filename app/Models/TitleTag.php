<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Hyn\Tenancy\Traits\UsesTenantConnection;

class TitleTag extends Model
{
    use HasFactory, UsesTenantConnection;

    protected $guarded = [];

    public $appends = [
        'tag_type'
    ];

    public function headTag()
    {
        return $this->belongsTo(HeadTag::class);
    }

    public function getTagTypeAttribute()
    {
        return 'title';
    }
}
