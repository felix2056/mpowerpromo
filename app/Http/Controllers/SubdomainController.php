<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Hyn\Tenancy\Contracts\Repositories\WebsiteRepository;
use Hyn\Tenancy\Models\Website;

use Hyn\Tenancy\Models\Hostname;
use Hyn\Tenancy\Contracts\Repositories\HostnameRepository;

use Hyn\Tenancy\Environment;

class SubdomainController extends Controller
{
    public function handle($subdomain, Request $request)
    {
        // return response()->json([
        //     'message' => 'Welcome to ' . $subdomain . '!',
        //     'store' => $subdomain,
        //     'host' => $request->getHost(),
        //     'fulldomain' => $subdomain . '.' . env('APP_DOMAIN')
        // ], 200);

        $fullDomain = $subdomain . '.' . env('APP_DOMAIN') ?? $request->getHost() ?? $subdomain . '.' . 'mpowerpromo.localhost';

        $website = Website::where('uuid', $fullDomain)->first();
        if (!$website)  abort(404);

        // switch to the website's database
        app(Environment::class)->tenant($website);
    }
}
