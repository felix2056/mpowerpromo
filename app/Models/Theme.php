<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Hyn\Tenancy\Traits\UsesTenantConnection;

class Theme extends Model
{
    use HasFactory, UsesTenantConnection;

    protected $guarded = [];

    public function bodySetting()
    {
        return $this->hasOne(ThemeBody::class);
    }

    public function breadcrumbSetting()
    {
        return $this->hasOne(ThemeBreadcrumb::class);
    }

    public function colorSystem()
    {
        return $this->hasMany(ThemeColorSystem::class);
    }

    public function componentSetting()
    {
        return $this->hasOne(ThemeComponent::class);
    }

    public function formSetting()
    {
        return $this->hasMany(ThemeForm::class);
    }

    public function linkSetting()
    {
        return $this->hasMany(ThemeLink::class);
    }

    public function optionSetting()
    {
        return $this->hasMany(ThemeOption::class);
    }

    public function typographySetting()
    {
        return $this->hasMany(ThemeTypography::class);
    }
}
