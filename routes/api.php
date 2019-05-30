<?php

use Illuminate\Support\Facades\Route;

Route::get('/random/{topic?}', 'InspireController@show');
