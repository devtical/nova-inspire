<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/random/{topic?}', function (Request $request, $topic = null) {
    return randomInspire($topic);
});
