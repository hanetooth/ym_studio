<?php

namespace App\Http\Controller\Api;

use App\Http\Controller\Api\Concerns\HasErrorResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserLoginRequest;
use App\Repositories\Contracts\UserRepository as Repo;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    use HasErrorResponse;

    /**
     * @var \App\Repositories\Eloquents\UserRepository
     */
    private $repo;


    public function __construct(Repo $repo)
    {
        $this->repo = $repo;
    }

    /**
     * Get the authenticated User
     *
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }
}
