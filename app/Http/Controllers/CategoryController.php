<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\GoogleProductCategory;
use App\Models\HeadTag;
use App\Models\Store;

use Illuminate\Http\Request;
use RicorocksDigitalAgency\Soap\Facades\Soap;

class CategoryController extends Controller
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

    public function show($subdomain, $categorySlug)
    {
        $subdomain = $this->store->subdomain;
        $host = str_replace('.', '_', $this->store->subdomain . '.' . $this->store->domain);

        $category = GoogleProductCategory::where('slug', $categorySlug)->first();
        if (!$category)  return abort(404);

        $headTag = HeadTag::first();

        return view("stores.$subdomain.pages.categories.show", [
            'store' => $this->store,
            'category' => $category,
            'headTag' => $headTag,
            'subdomain' => $subdomain,
            'host' => $host,
            // load assets from the store theme
            'public_path' => asset("stores/$host")
        ]);
    }
}
