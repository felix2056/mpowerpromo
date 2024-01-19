<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

use Hyn\Tenancy\Contracts\Repositories\WebsiteRepository;
use Hyn\Tenancy\Models\Website;

use Hyn\Tenancy\Models\Hostname;
use Hyn\Tenancy\Contracts\Repositories\HostnameRepository;

use Hyn\Tenancy\Environment;

class SetTenantConnection
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $host = $request->getHost();
        $website = Website::where('uuid', $host)->first();

        if (!$website)  return abort(404);

        app(Environment::class)->tenant($website);

        // $store = \App\Models\Store::first();
        // return response()->json([
        //     'message' => 'Successfully set tenant connection.',
        //     'store' => $store
        // ]);

        return $next($request);
    }
}
