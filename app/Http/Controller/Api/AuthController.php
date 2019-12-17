<?php

namespace App\Http\Controller\Api;

use App\Http\Controller\Api\Concerns\HasErrorResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserLoginRequest;
use App\Repositories\Contracts\UserRepository as Repo;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
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
     * Create user
     *
     * @param UserCreateRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function signup(UserCreateRequest $request)
    {
        DB::beginTransaction();
        try {
            $this->repo->create($request->validated());
            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            return $this->responseError($e);
        }
        return response()->json([
            'message' => 'Successfully signed up!'
        ], 201);
    }

    /**
     * Login user
     *
     * @param \App\Http\Requests\UserLoginRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(UserLoginRequest $request)
    {
        if(!Auth::attempt($request->validated())) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        $user = $request->user();

        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        $token->expires_at = Carbon::now()->addWeeks(2);
        $token->save();

        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'user' => $user
        ]);
    }

    /**
     * Get authenticated user
     */
    public function me()
    {
        return auth()->user();
    }
}
