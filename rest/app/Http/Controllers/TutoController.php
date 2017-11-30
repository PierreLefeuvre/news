<?php

namespace App\Http\Controllers;


use App\News;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class TutoController extends Controller
{
    public function __construct()
    {
       /* $this->middleware('cors');
        $this->middleware('auth.basic'); */
    }
    
    public function index()
    {
        $listNews = News::where('type', 2)->orderBy('updated_at', 'desc')->get();
        return response(json_encode($listNews), 200)->header('Content-Type', 'application/json');;
    }
    public function show($id)
    {
        $news = News::find($id);
        return response(json_encode($news), 200)->header('Content-Type', 'application/json');
    }

    public function destroy($id)
    {
        $news = News::find($id);
        $result = $news->delete();

        if(!$result)
            $response = ['success' => false];
        else
            $response = ['success' => true];

            return response(json_encode($response),200)
                ->header('Content-Type' , 'application/json');
    }

    public function update(Request $request, $id)
    {
        $news = News::find($id);
        if($request->get('title')) $news->title = $request->get('title');
        if($request->get('content')) $news->content = $request->get('content');
        $result = $news->save();

        if(!$result)
            $response = ['success' => false];
        else
            $response = ['success' => true , 'news_id' => $news->id];

        return response(json_encode($response),200)
            ->header('Content-Type' , 'application/json');
    }

    public function store(Request $request)
    {
        $rules = ['title' => 'required', 'content' => 'required'];

        $validator = Validator::make($request->all(), $rules);

        if($validator->fails()){
            return response('Request Incorrect', 500);
        }

        $news = new News();
        $news->title = $request->get('title');
        $news->content = $request->get('content');
        $news->type = 2;
        $result = $news->save();

        if(!$result)
            $response = ['success' => false];
        else
            $response = ['success' => true , 'news_id' => $news->id];


        return response(json_encode($response),200)
            ->header('Content-Type' , 'application/json');
    }
}
