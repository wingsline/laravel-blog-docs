# Customization

You can customize the admin interface by adding more features for the main application. All the configuration options can be found in the `config/blog.php` file.

## Top Navigation

Edit the `blog.navHeader` config value. The navigation items are [Laravel blade ](https://laravel.com/docs/6.x/blade) view files.

The default value is:

```php
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
```

## Main Navigation

Similar to the top navigation, editing the `blog.navAdmin` value will change the main navigation items. The navigation items are [Laravel blade ](https://laravel.com/docs/6.x/blade) view files.

Here is the default value:

```php
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
```