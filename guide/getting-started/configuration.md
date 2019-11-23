# Configuration

The installation publishes a config file named `blog.php`. The default configuration should work in most cases, however feel free to customize to fit your needs.

* `prefix` — defines the path to the admin interface
* `maxAttempts` — maximum allowed failed login attempts
* `per_page` — How many posts to show when listing in the admin interface
* `navHeader` — header navigation blade partials
* `navAdmin` — main navigation blade partials
* `feed` — the RSS feed configuration
* `markdown_parser` — the markdown parser what handles converting the markdown to html

By default it uses the [mychelf/php-markdown](https://github.com/michelf/php-markdown) parser in the background.

In order to customize the **meta tags** for the blog, please visit the [theme configuration](../theme/configuration.html).

This is the default content of the config file:

```php
<?php

use Wingsline\Blog\Posts\Post;
use Wingsline\Blog\Markdown\Markdown;

return [
    /*
     |--------------------------------------------------------------------------
     | Admin prefix
     |--------------------------------------------------------------------------
     |
     |
     */
    'prefix' => env('ADMIN_PREFIX', 'admin'),

    /*
    |--------------------------------------------------------------------------
    | Maximum allowed failed login attempts
    |--------------------------------------------------------------------------
    |
    */
    'maxAttempts' => env('ADMIN_MAX_LOGIN_ATTEMPTS', 5),

    /*
    |--------------------------------------------------------------------------
    | Pagination
    |--------------------------------------------------------------------------
    |
    */
    'per_page' => env('ADMIN_PER_PAGE', 15),

    /*
    |--------------------------------------------------------------------------
    | Header navigation
    |--------------------------------------------------------------------------
    |
    | This is the header navigation. It uses views as menu items.
    |
    */
    'navHeader' => [
        'blog::layouts.nav.items.site',
        'blog::layouts.nav.items.account',
        'blog::layouts.nav.items.logout'
    ],

    /*
    |--------------------------------------------------------------------------
    | Admin navigation
    |--------------------------------------------------------------------------
    |
    | Main admin navigation
    |
    */
    'navAdmin' => [
        'blog::layouts.nav.dashboard',
        'blog::layouts.nav.blog',
        'blog::layouts.nav.account',
    ],

    /*
    |--------------------------------------------------------------------------
    | Feed configuration
    |--------------------------------------------------------------------------
    |
    */
    'feed' => [
        'items' => Post::class . '@getFeedItems',
        'url' => '/feed/blog',
        'title' => config('app.name'),
        'description' => config('theme.meta.description', ''),
        'language' => 'en-US',
        'view' => 'feed::atom',
        'type' => 'application/atom+xml',
    ],

    /*
    |--------------------------------------------------------------------------
    | Markdown Parser class and method name
    |--------------------------------------------------------------------------
    |
    | Set the markdown parser class and method name here
    |
    */
    'markdown_parser' => [
        'class' => Markdown::class,
        'method' => 'convertToHtml'
    ]
];
```
