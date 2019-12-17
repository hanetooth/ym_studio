<?php

namespace App\Http\Controller\Api\Concerns;

use Exception;
use Illuminate\Support\Facades\Log;

trait HasErrorResponse
{
    public function responseError(Exception $exception)
    {
        Log::error($exception->getMessage(), $exception->getTrace());

        return response()->json([
            'message' => $exception->getMessage()
        ], $exception->getCode());
    }
}
