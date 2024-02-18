<?php

namespace App\Http\Controllers;

use App\Models\HeadTag;
use App\Models\Page;
use App\Models\Store;
use Illuminate\Http\Request;

class PageController extends Controller
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

    public function show($subdomain, $pageSlug)
    {
        $subdomain = $this->store->subdomain;
        $host = str_replace('.', '_', $this->store->subdomain . '.' . $this->store->domain);

        $page = Page::where('slug', $pageSlug)->first();
        // if (!$page)  return abort(404);

        $headTag = HeadTag::first();

        return view("stores.$subdomain.pages.$pageSlug", [
            'store' => $this->store,
            'page' => $page,
            'headTag' => $headTag,
            'subdomain' => $subdomain,
            'host' => $host,
            // load assets from the store theme
            'public_path' => asset("stores/$host")
        ]);
    }
}