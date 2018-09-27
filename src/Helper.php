<?php

function randomInspire()
{
    $json = file_get_contents(__DIR__ . '/../resources/quotes/data.json');
    $data = collect(json_decode($json, true))
        ->map(function ($item) {
            // Dev note : You need to clear inspire cache
            return \Cache::rememberForever('inspire.quote.' . md5($item['quote']), function () use ($item) {
                $item['image'] = 'data:image/jpg;base64,' . base64_encode(file_get_contents($item['image']));

                return $item;
            });
        })
        ->random();

    return response()->json($data);
}
