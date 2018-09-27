# Nova Inspire

![Inspire](https://i.imgur.com/vqc5xFH.png)
![Example](https://i.imgur.com/A8F1R8j.png)

> The best way to connect with your customers is by reaching out and inspiring them.
>
> ~ Me

## Installation 

You can install the package in to a [Laravel](http://laravel.com) app that uses [Nova](http://nova.laravel.com) via composer :

```cli
composer require kristories/nova-inspire
```


## Usage

Add the card to your `NovaServiceProvider.php`


```php

use Kristories\Inspire\Inspire;

// ...

public function cards()
{
    return [
        // ...
        (new Inspire())->options([
            'topic' => 'peace',   // null, motivational, learning, etc
            'style' => 'stacked', // default, stacked, horizontal
        ]),
    ];
}
```

### Topics

- Experience
- Humor
- Learning
- Life
- Morning
- Motivational
- Music
- Peace
- Poetry
- Teacher
- Thankful
- Time
- More (soon..)

## License

The MIT License (MIT).