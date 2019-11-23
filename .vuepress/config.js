module.exports = {
    title: 'wingsline/laravel-blog',
    description: 'A simple blog package written for Laravel.',
    dest: 'public/docs/laravel-blog/',
    base: '/docs/laravel-blog/',
    themeConfig: {
        logo: '/hero.png',
        searchPlaceholder: 'Search...',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Docs', link: 'https://wingsline.net/docs/' },
            { text: 'Blog', link: 'https://arpadolasz.com' },
            { text: 'Wingsline', link: 'https://wingsline.com' },
            { text: 'GitHub', link: 'https://github.com/wingsline/laravel-blog' }
        ],
        sidebar: [
            {
                collapsable: false,
                children: [
                    '/guide/'
                ]
            },
            {
                title: 'Getting Started',
                collapsable: false,
                children: [
                    '/guide/getting-started/',
                    '/guide/getting-started/configuration',
                    '/guide/getting-started/upgrade',
                    '/guide/getting-started/changelog',
                ]
            },
            {
                title: 'Admin interface',
                collapsable: false,
                children: [
                    '/guide/admin/',
                    '/guide/admin/posts',
                    '/guide/admin/account-profile',
                    '/guide/admin/customization',
                ]
            },
            {
                title: 'Theme',
                collapsable: false,
                children: [
                    '/guide/theme/',
                    '/guide/theme/configuration',
                    '/guide/theme/writing-a-theme',
                ]
            },
        ]

    },

};
