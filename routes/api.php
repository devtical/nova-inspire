<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Devtical\Inspire\Http\Controllers\InspireController;

Route::get('/random/{topic?}', [InspireController::class, 'show']);
