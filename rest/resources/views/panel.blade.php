@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class='jumbotron'>
                    @yield('main')
                </div>
            </div>

            <div class="col-md-2">
                <ul class="list-group">
                    <a href="/home" class="list-group-item">News</a>
                    <a href="/home/news/create" class="list-group-item">Add news</a>
                </ul>
            </div>
        </div>
    </div>
@endsection