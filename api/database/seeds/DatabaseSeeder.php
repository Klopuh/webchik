<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('portfolio_categories')->insert(['name' => 'Category 1']);
        DB::table('portfolio_categories')->insert(['name' => 'Category 2']);
        DB::table('portfolio_categories')->insert(['name' => 'Category 3']);

        DB::table('oauth_client')->insert(['id' => 'login', 'secret' => 'password', 'name' => 'theRealMrGott']);

        DB::table('portfolio')->insert(['category_id' => 1, 'image_url' => '/images/1.jpg', 'title' => str_random(10)]);
        DB::table('portfolio')->insert(['category_id' => 1, 'image_url' => '/images/2.jpg', 'title' => str_random(10)]);
        DB::table('portfolio')->insert(['category_id' => 1, 'image_url' => '/images/3.jpg', 'title' => str_random(10)]);
        DB::table('portfolio')->insert(['category_id' => 1, 'image_url' => '/images/4.jpg', 'title' => str_random(10)]);
        DB::table('portfolio')->insert(['category_id' => 2, 'image_url' => '/images/5.gif', 'title' => str_random(10)]);
        DB::table('portfolio')->insert(['category_id' => 2, 'image_url' => '/images/6.png', 'title' => str_random(10)]);
        DB::table('portfolio')->insert(['category_id' => 2, 'image_url' => '/images/7.jpg', 'title' => str_random(10)]);
        DB::table('portfolio')->insert(['category_id' => 3, 'image_url' => '/images/8.png', 'title' => str_random(10)]);
        DB::table('portfolio')->insert(['category_id' => 3, 'image_url' => '/images/9.jpg', 'title' => str_random(10)]);
        DB::table('portfolio')->insert(['category_id' => 2, 'image_url' => '/images/10.gif', 'title' => str_random(10)]);
        DB::table('portfolio')->insert(['category_id' => 3, 'image_url' => '/images/11.jpg', 'title' => str_random(10)]);
        DB::table('portfolio')->insert(['category_id' => 1, 'image_url' => '/images/p2.png', 'title' => str_random(10)]);
        DB::table('portfolio')->insert(['category_id' => 3, 'image_url' => '/images/p4.png', 'title' => str_random(10)]);
        DB::table('portfolio')->insert(['category_id' => 3, 'image_url' => '/images/p5.png', 'title' => str_random(10)]);
        DB::table('portfolio')->insert(['category_id' => 3, 'image_url' => '/images/p44.png', 'title' => str_random(10)]);
        DB::table('portfolio')->insert(['category_id' => 1, 'image_url' => '/images/p55.png', 'title' => str_random(10)]);

        DB::table('photos')->insert(['image_url' => '/images/1.jpg']);
        DB::table('photos')->insert(['image_url' => '/images/2.jpg']);
        DB::table('photos')->insert(['image_url' => '/images/3.jpg']);
        DB::table('photos')->insert(['image_url' => '/images/4.jpg']);
        DB::table('photos')->insert(['image_url' => '/images/5.gif']);
        DB::table('photos')->insert(['image_url' => '/images/6.png']);
        DB::table('photos')->insert(['image_url' => '/images/7.jpg']);
        DB::table('photos')->insert(['image_url' => '/images/8.png']);
        DB::table('photos')->insert(['image_url' => '/images/9.jpg']);
        DB::table('photos')->insert(['image_url' => '/images/10.gif']);
        DB::table('photos')->insert(['image_url' => '/images/11.jpg']);
        DB::table('photos')->insert(['image_url' => '/images/p2.png']);
        DB::table('photos')->insert(['image_url' => '/images/p4.png']);
        DB::table('photos')->insert(['image_url' => '/images/p5.png']);
        DB::table('photos')->insert(['image_url' => '/images/p44.png']);
        DB::table('photos')->insert(['image_url' => '/images/p55.png']);
    }
}
