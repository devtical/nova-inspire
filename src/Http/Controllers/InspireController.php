<?php

namespace Kristories\Inspire\Http\Controllers;

use Illuminate\Support\Arr;

class InspireController
{
    public function show($topic = null)
    {
        $data['topic'] = Arr::random(array_keys(config('quotes')));

        if ($topic) {
            if (config('quotes.' . $topic)) {
                $data['topic'] = $topic;
            }
        }

        $data['image'] = config('quotes.' . $data['topic'] . '.image');
        $data          = array_merge($data, Arr::random(config('quotes.' . $data['topic'] . '.quotes')));
        $key           = md5(serialize($data));

        return \Cache::remember('inspire.item.' . $key, 1440, function () use ($data) {
            return response()->json($data);
        });
    }
}
