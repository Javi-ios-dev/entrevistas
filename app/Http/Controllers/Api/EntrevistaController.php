<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\EntrevistaRequest;
use App\Http\Resources\EntrevistaResource;
use App\Models\Entrevista;
use Illuminate\Http\Request;

class EntrevistaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return EntrevistaResource::collection(Entrevista::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EntrevistaRequest $request)
    {
        $entrevista = Entrevista::create($request->validated());
        return new EntrevistaResource($entrevista);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Entrevista  $entrevista
     * @return \Illuminate\Http\Response
     */
    public function show(Entrevista $entrevista)
    {
        return new EntrevistaResource($entrevista);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Entrevista  $entrevista
     * @return \Illuminate\Http\Response
     */
    public function update(EntrevistaRequest $request, Entrevista $entrevista)
    {
        $entrevista->update($request->validated());
        return new EntrevistaResource($entrevista);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Entrevista  $entrevista
     * @return \Illuminate\Http\Response
     */
    public function destroy(Entrevista $entrevista)
    {
        $entrevista->delete();
        return response()->noContent();
    }
}
