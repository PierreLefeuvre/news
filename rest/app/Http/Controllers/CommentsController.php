<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Comments;
use Illuminate\Support\Facades\Validator;

class CommentsController extends Controller
{
    public function index(){}

    public function update(Request $request, $id){

    }

    public function store(Request $request)
    {
        $rules = ['comment' => 'required', 'user_id' => 'required', 'news_id' => 'required'];

        $validator = Validator::make($request->all(), $rules);

        if($validator->fails()){
            return response('Request Incorrect', 500);
        }

        $comments = new Comments();
        $comments->comment = $request->get('comment');
        $comments->user_id = $request->get('user_id');
        $comments->news_id = $request->get('news_id');
        $result = $comments->save();

        if(!$result)
            $response = ['success' => false];
        else
            $response = ['success' => true , 'comments_id' => $comments->id];


        return response(json_encode($response),200)
            ->header('Content-Type' , 'application/json');
    }

    public function show($news_id)
    {
        $query = 'SELECT * FROM comments JOIN user on user.id = user_id';


        $comments = DB::table('comments')
        ->join('users', 'users.id','=','comments.user_id')
        ->where('news_id', $news_id)
        ->select('comments.*', 'users.name', 'users.email')
        ->get();

        return response(json_encode($comments), 200)->header('Content-Type', 'application/json');
    }

    public function destroy($comment_id){
       
        $comments = Comments::find($comment_id);
        $result = $comments->delete();

        if(!$result)
            $response = ['success' => false];
        else
            $response = ['success' => true];

            return response(json_encode($response),200)
                ->header('Content-Type' , 'application/json');
    }

}
