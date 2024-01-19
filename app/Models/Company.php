<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\SoftDeletes;

class Company extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    public function customers()
    {
        return $this->belongsToMany(Customer::class, 'company_customers');
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class, 'company_orders', 'company_id', 'order_id');
    }
}
