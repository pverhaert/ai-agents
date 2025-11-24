import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "AI Agents",
    description: "A curated guide to AI tools, browsers, and agents",

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/favicon.svg',
        lastUpdated: true,
        cleanUrls: true,
        ignoreDeadLinks: true,
        externalLinkIcon: true,

        nav: [
            {text: 'Home', link: '/'},
            {
                text: 'Introduction', items: [
                    {text: 'From GenAI to AI Agents', link: '/introduction/'}
                ]
            },
            {text: 'Introduction', link: '/introduction'},
            {text: 'AI Models', link: '/models'},
            {text: 'Use Cases', link: '/use-cases'},
            {text: 'Benchmarks', link: '/benchmarks'}
        ],

        /*sidebar: [
            {
                text: 'Getting Started',
                items: [
                    {text: 'Home', link: '/'}
                ]
            },
            {
                text: 'AI Tools',
                items: [
                    {text: 'Popular AI Models', link: '/models'},
                    {text: 'AI Browsers', link: '/browsers'},
                    {text: 'Benchmarks & Testing', link: '/benchmarks'}
                ]
            },
            {
                text: 'Applications',
                items: [
                    {text: 'Use Cases', link: '/use-cases'},
                    {text: 'Abacus.AI Platform', link: '/abacus'}
                ]
            }
        ],*/

        outline: {
            level: 'deep'
        },

        aside: 'right',

        socialLinks: [
            {icon: 'github', link: 'https://github.com/pverhaert/ai-agents'}
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025 AI Agents Hub'
        },

        search: {
            provider: 'local'
        }
    },

    head: [
        ['link', {rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml'}]
    ],

    vite: {
        server: {
            port: 5225
        }
    }
})

