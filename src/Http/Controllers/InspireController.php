<?php

namespace Kristories\Inspire\Http\Controllers;

class InspireController
{
    public function show($topic = null)
    {
        return randomInspire($topic);
    }
}
