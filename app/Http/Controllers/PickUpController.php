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
        return PickUp::all();
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
        return PickUp::find($id);
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
        $pickup = PickUp::find($id);
        $pickup->update($request->all());
        return $pickup;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return PickUp::destroy($id);
    }

    /**
     * Display the specified pickup based on weekday.
     *
     * @param  int  $weekday
     * @return \Illuminate\Http\Response
     */
    public function search($weekday)
    {
        return PickUp::where('weekday', $weekday)->get();
    }
}
