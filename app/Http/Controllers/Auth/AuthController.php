<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function showLoginAdminOwner()
    {
        return Inertia::render('Auth/LoginAdminOwner');
    }

    public function showLoginCustomer()
    {
        return Inertia::render('Auth/LoginCustomer');
    }

    public function loginAdminOwner(Request $request)
    {
        return $this->handleLogin($request, ['admin', 'owner'], 'login.admin');
    }

    public function loginCustomer(Request $request)
    {
        return $this->handleLogin($request, ['customer'], 'login');
    }

    protected function handleLogin(Request $request, array $allowedRoles, string $redirectIfFail)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            if (!in_array($user->role, $allowedRoles)) {
                Auth::logout();
                return redirect()->route($redirectIfFail)->withErrors([
                    'email' => 'Email atau password salah.'
                ]);
            }

            $request->session()->regenerate();

            if ($user->role === 'admin') {
                return redirect()->route('admin.index');
            } elseif ($user->role === 'owner') {
                return redirect()->route('owner.index');
            } else {
                return redirect()->route('customer.home');
            }            
        }

        return back()->withErrors(['email' => 'Email atau password salah.']);
    }

    public function logout(Request $request)
    {
        $role = Auth::user()->role ?? 'customer';

        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return in_array($role, ['admin', 'owner'])
            ? redirect()->route('login.admin')
            : redirect()->route('login');
    }
}
