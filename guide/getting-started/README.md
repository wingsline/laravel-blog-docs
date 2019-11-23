# Installation

## Server Requirements

The blog package uses [Laravel 6](https://laravel.com/docs/6.x) as it's base requirements, however it has some extra requirements also:

* Laravel 6.x
* PHP 7.3+
* Database that supports JSON fields such as MySQL v5.7.8 or higher
* Exif PHP Extension
* Imagick PHP Extension (optional)

## Installing the blog

The `wingsline/laravel-blog` package uses [Composer](https://getcomposer.org/) to install it's dependencies. It is installed the same way as any other composer package:

```sh
composer require wingsline/blog
```

After composer finishes installing the package, you need to install a blog theme. 

There is a default theme available at [laravel-blog-theme](https://github.com/wingsline/laravel-blog-theme).
The theme folder should be at `theme` in the base Laravel directory.

Cloning the default theme into the default `theme` folder:

```sh
git clone https://github.com/wingsline/blog-theme.git theme
```

Configure the Laravel installation, making sure the cache driver supports tags and the database is configured.

Finally run the blog installer:

```sh
php artisan blog:install
```

The installer will publish the blog assets, default configuration files. Also it will migrate the database.
