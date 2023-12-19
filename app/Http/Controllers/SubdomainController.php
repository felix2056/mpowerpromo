<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        $storePath = base_path("public/stores/{$fullDomain}");
        
        if (is_dir($storePath)) {
            $indexFile = $storePath . '/index.php';
            
            if (file_exists($indexFile)) {
                return view('subdomain', compact('indexFile'));
            }
        }
        return abort(404);
    }
}
