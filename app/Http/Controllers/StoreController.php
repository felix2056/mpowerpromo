<?php

namespace App\Http\Controllers;

use App\Models\HeadTag;
use App\Models\Store;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\View;

class StoreController extends Controller
{
    public $store;

    public function __construct()
    {
        // $this->middleware('set.tenant.connection');
        $fulldomain = request()->getHost();
        $subdomain = explode('.', $fulldomain)[0];
        
        $store = Store::where('subdomain', $subdomain)->first();
        if (!$store)  return abort(404);

        $this->store = $store;
    }

    public function index()
    {
        return response()->json([
            'store' => $this->store,
            'host' => request()->getHost(),
            'fulldomain' => $this->store->subdomain . '.' . $this->store->domain
        ], 200);
        
        $subdomain = $this->store->subdomain;
        $host = str_replace('.', '_', $this->store->subdomain . '.' . $this->store->domain);

        $headTag = HeadTag::first();

        return view("stores.$subdomain.pages.index", [
            'store' => $this->store,
            'headTag' => $headTag,
            'subdomain' => $subdomain,
            'host' => $host,
            // load assets from the store theme
            'public_path' => asset("stores/$host")
        ]);
    }
}
