<?php

namespace App\Http\Controllers;

use App\Models\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class StoreController extends Controller
{
    public function index($subdomain)
    {
        $store = Store::with(['themes' => function ($query) {
            $query->where('is_published', true);
        }])
        ->where('subdomain', $subdomain)->first();

        if (!$store) {
            return abort(404);
        }

        $fulldomain = str_replace('.', '_', $store->subdomain . '.' . $store->domain);

        return view("stores.$fulldomain.index", [
            'store' => $store,
            // load assets from the store theme
            'path' => asset("stores/$fulldomain")
        ]);
    }
}
