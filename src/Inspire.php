<?php

namespace Devtical\Inspire;

use Laravel\Nova\Card;

class Inspire extends Card
{
    /**
     * The width of the card (1/3, 1/2, or full).
     *
     * @var string
     */
    public $width = 'full';

    public function options($options = [])
    {
        $defaultOptions = ['style' => 'default', 'topic' => null];
        $metaOptions = array_merge($defaultOptions, $options);

        return $this->withMeta($metaOptions);
    }

    /**
     * Get the component name for the element.
     *
     * @return string
     */
    public function component()
    {
        return 'inspire';
    }
}
