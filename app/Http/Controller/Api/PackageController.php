<?php

namespace App\Http\Controller\Api;

use App\Http\Controller\Api\Concerns\HasErrorResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\PurchasePackageRequest;
use App\Http\Resources\PackageCollection;
use App\Http\Resources\PackageResource;
use App\Http\Resources\PackageResourceCollection;
use App\Repositories\Contracts\PackageRepository as Repo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PackageController extends Controller
{
    use HasErrorResponse;

    /**
     * @var \App\Repositories\Eloquents\PackageRepository
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
        $packages = $this->repo->all(6);
        return response()->successJsonResponse(
            new PackageResourceCollection($packages)
        );
    }

    public function getByAlias(Request $request, $alias)
    {
        try {
            $package = $this->repo->findByAlias($alias);
            return response()->successJsonResponse(
                new PackageResource($package)
            );
        } catch (\Exception $e) {
            Log::error($e->getMessage(), $e->getTrace())    ;
            return response()->errorJsonResponse($e);
        }
    }

    public function purchase(PurchasePackageRequest $request)
    {
        try {
            $this->repo->purchase($request->validated());
            return response()->successJsonResponse([]);
        } catch (\Exception $e) {
            Log::error($e->getMessage(), $e->getTrace());
            return response()->errorJsonResponse($e);
        }

    }
}
