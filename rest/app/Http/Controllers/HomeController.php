<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\Routing\ResponseFactory;


class HomeController extends Controller
{
    private $header;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $user = "lefpierre@hotmail.fr";
        $password = "lestilo14";

        $this->header = [
            'Authorization' => 'Basic ' . base64_encode($user . ':' . $password)
        ];
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $listNews = News::all();
        //dd($listNews);
        return view('home', ['listNews' => $listNews]);
    }

    public function createNews()
    {
        return view('news/create');
    }
    public function storeNews(Request $request)
    {
        $news = new News();
        $news->title = $request->get('title');
        $news->content = $request->get('content');
        $result = $news->save();

        return redirect('home');
    }

    public function destroyNews($id)
    {
        $news = News::find($id);
        $result = $news->delete();

        return redirect('home');
    }

    public function editNews($id)
    {
        $news = News::find($id);

        return view('news/edit')->with('news',  $news);
    }
    public function updateNews(Request $request, $id)
    {
        $news = News::find($id);
        $news->title = $request->get('title');
        $news->content = $request->get('content');
        $news->save();

        return redirect('home');
    }
}
