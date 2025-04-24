<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    public function handle($request, Closure $next, ...$roles)
    {
        $user = Auth::user();

        if (!$user) {
            abort(403);
        }

        if (!in_array($user->role, $roles)) {
            if ($user->role === 'admin' || $user->role === 'owner') {
                return abort(403);
            }

            return abort(404);
        }

        return $next($request);
    }
}
