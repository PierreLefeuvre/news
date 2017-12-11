<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $url = 'https://blog.pierrelefeuvre.fr';
        if (config('app.env') == 'local') {
            $url = 'http://localhost:4200';
        }
        return $next($request)
            ->header('Access-Control-Allow-Origin',$url)
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE,  OPTIONS')
            ->header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Content-Type,  Accept, Authorization, X-Requested-With,  Application');
    }
}
