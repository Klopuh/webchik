<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class PortfolioController extends Controller
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
        $portfolio = DB::table('portfolio')
            ->join('portfolio_categories', 'portfolio.category_id', '=', 'portfolio_categories.id')
            ->get();
        return response()->json($portfolio);
    }
}
