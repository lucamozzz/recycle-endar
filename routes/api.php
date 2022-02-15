<?php

use App\Http\Controllers\PickUpController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CalendarController;
use App\Models\Calendar;
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

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::resource('pickups', PickUpController::class);
    Route::get('/pickups/search/{weekday}', [PickUpController::class, 'search']);
    Route::get('/pickups/calendar/{calendar}', [PickUpController::class, 'searchByCalendar']);

    Route::resource('calendars', CalendarController::class);
    Route::get('/calendars/name/{name}', [CalendarController::class, 'searchByName']);

    Route::post('/logout', [AuthController::class, 'logout']);
});
