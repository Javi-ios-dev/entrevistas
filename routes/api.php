<?php

use App\Http\Controllers\Api\EntrevistaController;
use App\Http\Controllers\Api\ProspectoController;
use App\Http\Controllers\Api\VacanteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('entrevistas', EntrevistaController::class);
Route::apiResource('vacantes', VacanteController::class);
Route::apiResource('prospectos', ProspectoController::class);