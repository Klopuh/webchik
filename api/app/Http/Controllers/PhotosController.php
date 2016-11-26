<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class PhotosController extends Controller
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
        $photos = DB::table('photos')->get();
        return response()->json($photos);
    }
}
