<?php

namespace App\Providers;

use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Support\ServiceProvider;

class ResponseServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(ResponseFactory $factory)
    {
        $factory->macro('successJsonResponse', function ($data) use ($factory) {
            return $factory->make([
                'errorCode' => 0,
                'message' => 'Success',
                'data' => $data
            ]);
        });
        $factory->macro('errorJsonResponse', function (\Exception $e) use ($factory) {
            // some of QueryBuilder errors are not int and zero.
            $errorCode = (int) $e->getCode();
            $errorCode = ($errorCode) ? ( is_int($errorCode) ? ($e->getCode()) : '500') : '500';
            return $factory->make([
                'errorCode' => $errorCode,
                'message' => $e->getMessage(),
                'data' => []
            ], $errorCode);
        });
    }
}
