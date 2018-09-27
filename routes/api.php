<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/random', function (Request $request) {
    return randomInspire();
});
