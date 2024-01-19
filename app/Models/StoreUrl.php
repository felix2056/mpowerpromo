<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Hyn\Tenancy\Traits\UsesTenantConnection;

class StoreUrl extends Model
{
    use HasFactory, UsesTenantConnection;

    protected $fillable = ["url"];

    public function store()
    {
        return $this->belongsTo(Store::class);
    }
}
