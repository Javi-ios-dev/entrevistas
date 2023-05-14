<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entrevistas', function (Blueprint $table) {
            $table->id()->nullable();
            $table->unsignedBigInteger('vacante');
            $table->unsignedBigInteger('prospecto');
            $table->foreign("vacante")->references('id')->on('vacantes')->onUpdate('cascade')->onDelete('restrict');
            $table->foreign("prospecto")->references('id')->on('prospectos')->onUpdate('cascade')->onDelete('restrict');
            $table->date("fecha_entrevista")->nullable();
            $table->text("notas")->nullable();
            $table->tinyInteger('reclutado')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('entrevistas');
    }
};
