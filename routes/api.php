<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Routing\Router;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group([
    "as" => "api.",
    "namespace" => "Api"
], function (Router $route) {

    $route->group([
        "as" => "auth.",
        "prefix" => 'auth'
    ], function (Router $route) {

        $route->post('login', [
            'as' => 'login',
            'uses' => 'AuthController@login'
        ]);

        $route->post('signup', [
            'as' => 'login',
            'uses' => 'AuthController@signup'
        ]);

    });

    $route->group([
        "middleware" => 'auth:api'
    ], function (Router $route) {

        $route->get('validate-access-token', function () {
            return response()->successJsonResponse([]);
        });

        $route->get('me', [
            'as' => 'me',
            'uses' => 'AuthController@me'
        ]);

        $route->group([
            "as" => "packages.",
            'prefix' => 'packages',
        ], function (Router $route) {
            $route->get('/', [
                'as' => 'index',
                'uses' => 'PackageController@all'
            ]);
            $route->get('/{alias}', [
                'as' => 'get_by_alias',
                'uses' => 'PackageController@getByAlias'
            ]);
            $route->post('/purchase', [
                'as' => 'purchase',
                'uses' => 'PackageController@purchase'
            ]);

        });

        $route->group([
            "as" => "discounts.",
            'prefix' => 'discounts',
        ], function (Router $route) {
            $route->get('/', [
                'as' => 'index',
                'uses' => 'DiscountController@all'
            ]);
            $route->post('/get', [
                'as' => 'get',
                'uses' => 'DiscountController@get'
            ]);
        });

    });

});
