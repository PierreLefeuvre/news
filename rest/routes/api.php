<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//, 'auth.basic'
Route::group(['middleware' => ['cors','auth.basic']], function(){
    Route::resource('news',  'NewsController');

    Route::get('/news/{news_id}/comments', 'CommentsController@show');
    Route::post('/comments', 'CommentsController@store');
});

// Route::group(['middleware' => ['cors','auth.basic']], function(){
//     Route::ressource('comments', 'CommentsController');
// });


/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

*/