<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $data = $request->validated();

        if (!Auth::attempt($data)) {
            return response([
                'error' => 'Provided credentials do not match our records..!'
            ], 422);
        }

        /** @var User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'token' => $token
        ]);
    }
}
