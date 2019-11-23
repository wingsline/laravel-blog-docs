# Writing a theme

You can clone the [wingsline/blog-theme](https://github.com/wingsline/laravel-blog-theme) and customize it or you can write one from scratch.

The theme’s minimal directory structure is:

```
├── theme/
│   └── config.php
│   ├── views/
│   │   ├── posts/
│   │   │   ├── partials/
│   │   │   │   └── item.blade.php
│   │   │   │   └── list.blade.php
│   │   │   │   └── tags.blade.php
│   │   │   └── detail.blade.php
│   │   ├── taggedPosts/
│   │   │   └── index.blade.php
```

For theme configuration visit the [Configuration](./configuration.html) guide.

You can also use the Laravel’s `resources/views` folder with the same structure:

```
├── app/
├── bootstrap/
├── config/
├── database/
├── public/
├── resources/
│   ├── views/
│   │   ├── posts/
│   │   │   ├── partials/
│   │   │   │   └── item.blade.php
│   │   │   │   └── list.blade.php
│   │   │   │   └── tags.blade.php
│   │   │   └── detail.blade.php
│   │   ├── taggedPosts/
│   │   │   └── index.blade.php
├── resources/
├── routes/
├── storage/
├── tests/
├── theme/
│   └── config.php
```
