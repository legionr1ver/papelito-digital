<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use App\Models\ItemFile;

class ItemFileController extends Controller
{
    public function __invoke(ItemFile $file)
    {
        return Storage::get($file->source);
    }
}
