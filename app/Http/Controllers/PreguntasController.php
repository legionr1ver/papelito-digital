<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;

class PreguntasController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Preguntas/Show');
    }
}