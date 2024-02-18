<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SupplierContactPhone extends Model
{
    use HasFactory;

    protected $fillable = [
        'supplier_contact_id',
        'source',
        'countryCode',
        'phoneNumber',
        'extension'
    ];

    public function contact()
    {
        return $this->belongsTo(SupplierContact::class);
    }
}
