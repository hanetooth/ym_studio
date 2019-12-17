<?php

namespace App\Http\Controller\Api;

use App\Http\Controller\Api\Concerns\HasErrorResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\ApplyDiscountRequest;
use App\Http\Resources\DiscountResource;
use App\Http\Resources\PackageResource;
use App\Http\Resources\DiscountResourceCollection;
use App\Repositories\Contracts\DiscountRepository as Repo;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DiscountController extends Controller
{
    use HasErrorResponse;

    /**
     * @var \App\Repositories\Eloquents\DiscountRepository
     */
    private $repo;


    public function __construct(Repo $repo)
    {
        $this->repo = $repo;
    }

    /**
     * Get all packages
     *
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function all()
    {
        $discounts = $this->repo->all(6);
        return response()->successJsonResponse(
            new DiscountResourceCollection($discounts)
        );
    }

    public function get(ApplyDiscountRequest $request)
    {
        try {
            return response()->successJsonResponse(
                new DiscountResource($this->repo->findByCouponCode($request->get('coupon_code')))
            );
        } catch (\Exception $e) {
            Log::error($e->getMessage(), $e->getTrace());
            return response()->errorJsonResponse($e);
        }

    }
}
