<?php

namespace App\Http\Controllers;

use App\Models\Store;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;

use Hyn\Tenancy\Contracts\Repositories\WebsiteRepository;
use Hyn\Tenancy\Models\Website;

use Hyn\Tenancy\Models\Hostname;
use Hyn\Tenancy\Contracts\Repositories\HostnameRepository;

use Hyn\Tenancy\Environment;

class HomeController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function deployTenantStore(Request $request)
    {
        $domain = $request->header('X-Tenant-UUID');
        $subdomain = explode('.', $domain)[0];

        $user = User::find($request->user_id);
        if (!$user) return response()->json([
            'message' => 'User not found.'
        ], 404);

        // check if user password is correct
        if (!Hash::check($request->password, $user->password)) return response()->json([
            'message' => 'Incorrect password.'
        ], 401);

        // check if user has a website with the given uuid
        $website = $user->websites()->where('uuid', $request->header('X-Tenant-UUID'))->first();
        if (!$website) return response()->json([
            'message' => 'Website not found.'
        ], 404);

        app(Environment::class)->tenant($website);

        $store = Store::where('subdomain', $subdomain)->first();
        if (!$store) return response()->json([
            'message' => 'Store not found.'
        ], 404);

        // create store assets directory in public/stores
        $storeAssetsPath = public_path("stores/$store->subdomain");
        if (!file_exists($storeAssetsPath)) mkdir($storeAssetsPath, 0777, true);

        // create store views directory in resources/views/stores
        $storeViewsPath = resource_path("views/stores/$store->subdomain");
        if (!file_exists($storeViewsPath)) mkdir($storeViewsPath);

        // copy the example store assets to public/stores/$store->subdomain
        $exampleStoreAssetsPath = public_path("stores/example");
        File::copyDirectory($exampleStoreAssetsPath, $storeAssetsPath);

        // copy the example store views to resources/views/stores/$store->subdomain
        $exampleStoreViewsPath = resource_path("views/stores/example");
        $storeViewsPath = resource_path("views/stores/$store->subdomain");
        File::copyDirectory($exampleStoreViewsPath, $storeViewsPath);
        
        return response()->json([
            'message' => 'Successfully deployed tenant store.'
        ], 200);
    }
}
