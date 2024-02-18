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

Route::domain('{subdomain}.' . config('app.url'))->group(function () {
    Route::group(['middleware' => 'set.tenant.connection'], function () {
        Route::get('', 'StoreController@index');
        Route::get('{pageSlug}', 'PageController@show');

        Route::get('cat/{categorySlug}', 'CategoryController@show');
        Route::get('products/{productSlug}', 'ProductController@show');
    });
});

Route::post('/deploy-tenant-store', 'HomeController@deployTenantStore');
Route::get('/{any}', 'HomeController@index')->where('any', '.*');