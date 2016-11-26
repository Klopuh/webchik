<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// GET POST PUT DELETE

$app->get('/api/public', function () use ($app) { return $app->version(); });

// Photos

$app->get('/api/public/photos', 'PhotosController@index');

// Portfolio

$app->get('/api/public/portfolio', 'PortfolioController@index');
$app->get('/api/public/portfolio/categories', 'PortfolioController@index_category');

// Portfolio Categories

$app->get('/api/public/portfolio/categories', 'PortfolioCategoriesController@index');

// Subscriptions

$app->post('/api/public/subscribe', 'SubscriptionsController@subscribe');


// Protected resources

$app->post('/api/public/oauth/access_token', function () {
    return response()->json(Authorizer::issueAccessToken());
});

$app->get('/api/public/subscriptions', 'SubscriptionsController@index');




