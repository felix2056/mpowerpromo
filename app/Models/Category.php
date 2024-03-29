<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Hyn\Tenancy\Traits\UsesTenantConnection;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory, UsesTenantConnection;
}
