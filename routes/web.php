<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::domain('{subdomain}.' . env('APP_DOMAIN'))->group(function () {
//     Route::get('/', 'StoreController@index');

//     Route::get('/{pageSlug}', 'PageController@show');
// });

// Route::domain('teststore.mpowerpromo.localhost')->group(function () {
//     Route::get('/', function () {
//         return response()->json([
//             'message' => 'Welcome to teststore!',
//             'store' => 'teststore',
//             'domain' => env('APP_DOMAIN')
//         ], 200);
//     });
// });

Route::domain('{subdomain}.mpowerpromo.localhost')->group(function () {
    Route::any('{all}', 'SubdomainController@handle')->where('all', '.*');
});

// Route::domain('{subdomain}.mpowerpromo.localhost')->group(function () {
//     Route::any('{all}', function ($subdomain) {
//         return app(\App\Http\Middleware\SubdomainMiddleware::class)->handle($request, function ($subdomain) {
//             // Handle subdomain routing here
//         });
//     });
// });


Route::get('/publish-theme-assets', 'HomeController@publishThemeAssets');
Route::get('/{any}', 'HomeController@index')->where('any', '.*');