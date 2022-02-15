<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return auth()
            ->user()
            ->calendars;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        return Calendar::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return auth()
            ->user()
            ->calendars
            ->where('id', $id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return auth()
            ->user()
            ->calendars
            ->where('id', $id)
            ->first()
            ->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return auth()
            ->user()
            ->calendars
            ->where('id', $id)
            ->first()
            ->destroy($id);
    }

    /**
     * Display the specified calendar based on name.
     *
     * @param  int  $weekday
     * @return \Illuminate\Http\Response
     */
    public function searchByName($name)
    {
        return auth()
            ->user()
            ->calendars
            ->where('name', $name);
    }
}
