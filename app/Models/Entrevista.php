<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entrevista extends Model
{
    use HasFactory;
    protected $fillable = ['vacante', 'prospecto', 'fecha_entrevista', 'notas', 'reclutado'];
}
