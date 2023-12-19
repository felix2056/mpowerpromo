<?php

namespace App\Http\Controllers;

use App\Models\Store;
use App\Models\Theme;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class HomeController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function publishThemeAssets(Request $request)
    {
        // get query params
        $store_id = $request->query('store_id');
        $theme_id = $request->query('theme_id');

        $store = Store::find($store_id);
        $theme = Theme::find($theme_id);

        if (!$store) {
            return response()->json([
                'message' => 'Store not found!'
            ], 404);
        }

        if (!$theme) {
            return response()->json([
                'message' => 'Theme not found!'
            ], 404);
        }

        $store_theme = $store->themes()->find($theme->id);

        // create a new directory with the store subdomain name
        $storeDirectory = resource_path('views') . '/stores/' . str_replace('.', '_', $store->subdomain . '.' . $store->domain);

        if (file_exists($storeDirectory)) {
            return response()->json([
                'message' => 'Store directory already exists!'
            ], 200);
        }

        mkdir($storeDirectory, 0777, true);

        // copy the contents of the theme to the store directory
        $themeDirectory = resource_path('views') . '/themes/' . $theme->directory;

        File::copyDirectory($themeDirectory, $storeDirectory);

        // move the assets folder to the public directory
        $publicDirectory = public_path('stores') . '/' . str_replace('.', '_', $store->subdomain . '.' . $store->domain);
        File::copyDirectory($themeDirectory . '/assets', $publicDirectory);

        // update the store theme
        $store->themes()->update([
            'is_published' => true
        ]);

        return response()->json([
            'message' => 'Assets published successfully!',
            'store' => $store,
            'theme' => $theme
        ], 200);
    }
}
