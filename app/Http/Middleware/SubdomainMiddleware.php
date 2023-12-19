<?php

namespace App\Http\Middleware;

use App\Models\Store;
use Closure;
use Illuminate\Http\Request;

class SubdomainMiddleware
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
        $subdomain = $request->route('subdomain');

        // Get the project path for the subdomain
        $storePath = $this->getStorePathForSubdomain($subdomain);

        // Check if the project path exists
        if (!file_exists($storePath)) {
            abort(404);
        }

        // Change the current working directory to the project path
        chdir($storePath);

        // Load the project's index.php file
        include_once $storePath . '/index.php';

        exit;
    }

    /**
     * Get the project path for the subdomain
     *
     * @param string $subdomain
     * @return string
     */
    private function getStorePathForSubdomain(string $subdomain): string
    {
        $fullDomain = $subdomain . '.' . env('APP_DOMAIN');

        // Get the project path for the subdomain
        $storePath = base_path("public/stores/{$fullDomain}");

        // Check if the store path exists
        if (!file_exists($storePath)) {
            // If the project path does not exist, check if the subdomain is a custom domain
            $store = Store::where('subdomain', $subdomain)->first();

            // If the subdomain is a custom domain, get the project path for the custom domain
            if ($store) {
                $storePath = base_path("public/stores/{$store->fullDomain}");
            }
        }

        return $storePath;
    }

    // function getProjectPathForSubdomain($subdomain)
    // {
    //     // Define a mapping between subdomains and project paths
    //     $subdomainToProjectPathMap = [
    //         'kids' => '/var/www/projects/kids.mywebsite.com',
    //     ];

    //     // Return the project path for the given subdomain
    //     if (isset($subdomainToProjectPathMap[$subdomain])) {
    //         return $subdomainToProjectPathMap[$subdomain];
    //     } else {
    //         return null;
    //     }
    // }
}
