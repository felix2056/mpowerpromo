<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    public function companies()
    {
        return $this->belongsToMany(Company::class, 'company_customers');
    }

    public function assignments()
    {
        return $this->hasMany(CustomerAssignment::class);
    }

    public function phones()
    {
        return $this->hasMany(CustomerPhone::class);
    }

    public function states()
    {
        return $this->hasMany(CustomerState::class);
    }

    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }
}
