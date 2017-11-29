@extends('panel')

@section('main')

    <form method="POST" action="/home/news">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="title" name="title">
        </div>
        <div class="form-group">
            <textarea  class="form-control" placeholder="" name="content"></textarea>
        </div>
        <input type="submit" class="btn btn-default" name="save" value="save"/>
    </form>

@endsection