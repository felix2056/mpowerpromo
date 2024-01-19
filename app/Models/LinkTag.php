<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Hyn\Tenancy\Traits\UsesTenantConnection;

class LinkTag extends Model
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

    public function getIsBootstrapAttribute()
    {
        // check if the word Bootstrap is included the description
        return strpos($this->attributes['description'], 'Bootstrap') !== false;
    }

    public function getTagTypeAttribute()
    {
        return 'link';
    }
}
