<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class PortfolioCategoriesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index()
    {
        $categories = DB::table('portfolio_categories')->get();
        return response()->json($categories);
    }
    //
}
