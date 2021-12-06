<?php

use App\Http\Controllers\PickUpController;
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

// Route::get('/pickups', [PickUpController::class, 'index']);
// Route::post('/pickups', [PickUpController::class, 'store']);
// Route::get('/pickups/{id}', [PickUpController::class, 'show']);
// Route::put('/pickups/{id}', [PickUpController::class, 'update']);

Route::resource('pickups', PickUpController::class);
Route::get('/pickups/search/{weekday}', [PickUpController::class, 'search']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });