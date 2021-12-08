<?php

namespace App\Http\Controllers;

use App\Models\PickUp;
use Illuminate\Http\Request;

class PickUpController extends Controller
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
            ->pickups;
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
            'type' => 'required',
            'weekday' => 'required',
            'start' => 'required',
            'end' => 'required',
        ]);

        $request['user_id'] = auth()->id();

        return PickUp::create($request->all());
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
            ->pickups
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
            ->pickups
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
            ->pickups
            ->where('id', $id)
            ->first()
            ->destroy($id);
    }

    /**
     * Display the specified pickup based on weekday.
     *
     * @param  int  $weekday
     * @return \Illuminate\Http\Response
     */
    public function search($weekday)
    {
        return auth()
            ->user()
            ->pickups
            ->where('weekday', $weekday);
    }
}
