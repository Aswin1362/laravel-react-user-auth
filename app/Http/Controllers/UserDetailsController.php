<?php

namespace App\Http\Controllers;

use App\Models\UserDetails;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;

class UserDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user();

        return UserResource::collection(
            UserDetails::select("user_details.*", 'users.name as user_name', 'users.email as user_email')
                ->leftJoin('users', 'user_details.user_id', '=', 'users.id')
                ->where('user_details.user_id', $user->id)
                ->orderBy('created_at', 'desc')
                ->get()
        );
    }
}
