<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Hyn\Tenancy\Traits\UsesTenantConnection;

class HeadTag extends Model
{
    use HasFactory, UsesTenantConnection;

    protected $guarded = [];

    public function metaTags()
    {
        return $this->hasMany(MetaTag::class);
    }

    public function linkTags()
    {
        return $this->hasMany(LinkTag::class);
    }

    public function scriptTags()
    {
        return $this->hasMany(ScriptTag::class);
    }

    public function noScriptTags()
    {
        return $this->hasMany(NoScriptTag::class);
    }

    public function styleTags()
    {
        return $this->hasMany(StyleTag::class);
    }

    public function titleTags()
    {
        return $this->hasMany(TitleTag::class);
    }
}
