module.exports = {
    title: 'PermaHub',
    description: 'Permaculture enthusiasts community application',
    plugins: ["vuetify"],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Sign Up', link: '/signup' },
        ]
    },

    markdown: {
        anchor: {
            permalink: false
        },
    },
    head: [
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' }],
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css' }]
    ]
}