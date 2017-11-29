@extends('panel')

@section('main')

@if($listNews)

    @foreach($listNews as $news)
        <div class="">
            <h2>{{ $news->title }}</h2>
            <p>{{  $news->content }}</p>

            <div class="pull-right">
                <form style="display:inline-block" method="POST" action="/home/news/{{ $news->id }}">
                    <input type="hidden" name="_method" value="DELETE">
                    <input type="submit" class="btn btn-danger" name="edit" value="Delete"/>
                </form>
                <a style="display:inline-block" href="/home/news/{{ $news->id }}/edit" class="btn btn-info" >Edit</a>
            </div>
            <br>
        </div>
        <hr>
        @endforeach

@endif

@endsection
