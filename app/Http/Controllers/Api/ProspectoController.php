<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProspectoRequest;
use App\Http\Resources\ProspectoResource;
use App\Models\Prospecto;
use Illuminate\Http\Request;

class ProspectoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProspectoResource::collection(Prospecto::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProspectoRequest $request)
    {
        $prospecto = Prospecto::create($request->validated());
        return new ProspectoResource($prospecto);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Prospecto  $prospecto
     * @return \Illuminate\Http\Response
     */
    public function show(Prospecto $prospecto)
    {
        return new ProspectoResource($prospecto);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Prospecto  $prospecto
     * @return \Illuminate\Http\Response
     */
    public function update(ProspectoRequest $request, Prospecto $prospecto)
    {
        $prospecto->update($request->validated());
        return new ProspectoResource($prospecto);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Prospecto  $prospecto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Prospecto $prospecto)
    {
        $prospecto->delete();
        return response()->noContent();
    }
}
