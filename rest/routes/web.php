<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/home/news/create', 'HomeController@createNews');
Route::post('/home/news', 'HomeController@storeNews');
Route::delete('/home/news/{id}', 'HomeController@destroyNews');
Route::get('/home/news/{id}/edit', 'HomeController@editNews')->name('news.edit');
Route::put('/home/news/{id}', 'HomeController@updateNews')->name('news.update');


