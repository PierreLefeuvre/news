@extends('panel')

@section('main')

    <form method="POST" action="/home/news/{{ $news->id }}">
        <input type="hidden" name="_method" value="PUT">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="title" name="title" value="{{ $news->title }}">
        </div>
        <div class="form-group">
            <textarea  class="form-control" placeholder="" name="content">{{ $news->content }}</textarea>
        </div>
        <input type="submit" class="btn btn-default" name="save" value="save"/>
    </form>

@endsection