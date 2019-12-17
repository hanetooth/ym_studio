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
if (request()->header('Content-Type') !== 'application/x-www-form-urlencoded') {
    Route::get('/{first_vue_router_capture?}/{second_vue_router_capture?}/{third_vue_router_capture?}', function () {
        return view('index');
    });
}
