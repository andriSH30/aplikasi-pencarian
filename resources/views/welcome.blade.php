@extends('layout/layout')
@section('title','Film')

@section('body')

<div class="container">
    <div class="row mt-3 justify-content-center">
        <div class="col-md-8">
            <h1 class="text-center">Pencarian Film</h1>
            <div class="input-group mb-3 mt-2">
                <input type="text" class="form-control" id="search_film" placeholder="Tulis Judul Film">
                <div class="input-group-append">
                    <button class="btn btn-dark" type="button" id="search_film_button">Cari Film</button>
                </div>
            </div>
        </div>
    </div>
    <hr>

    <div class="row" id="list-pencarian"></div>
</div>

@endsection
