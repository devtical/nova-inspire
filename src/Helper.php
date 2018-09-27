<?php

function randomInspire($topic = null)
{
    $json = file_get_contents(__DIR__ . '/../resources/quotes/data.json');

    if ($topic) {
        $data          = json_decode($json, true)[$topic];
        $data['topic'] = $topic;
    } else {
        $data = collect(json_decode($json, true))
            ->map(function ($item, $topic) {
                $item['topic'] = $topic;

                return $item;
            })
            ->random();
    }

    $data = array_merge([
        'topic' => $data['topic'],
        'image' => 'data:image/jpg;base64,' . base64_encode(file_get_contents($data['image'])),
    ], collect($data['quotes'])->random());

    $key = md5(serialize($data));

    return \Cache::remember('inspire.item.' . $key, 1440, function () use ($data) {
        return response()->json($data);
    });
}
