<?php

namespace App\Http\Controllers;

use DateTime;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class SubscriptionsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('oauth', ['except' => ['subscribe']]);
    }

    public function index()
    {
        $subscriptions = DB::table('subscriptions')->get();
        return response()->json($subscriptions);
    }

    public function subscribe(Request $request)
    {
        $dt = new DateTime;
        DB::table('subscriptions')->insert(['email' => $request->input('email'), 'created_at' => $dt->format('m-d-y H:i:s')]);
    }

    //
}
