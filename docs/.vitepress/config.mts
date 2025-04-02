import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Eneride',
    description: 'Règles du système',

    locales: {
        root: {
            label: 'Français',
            lang: 'fr',
        },
    },

    themeConfig: {
        docFooter: {
            prev: 'Page précédente',
            next: 'Page suivante',
        },

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Règles', link: '/rules', activeMatch: '/rules|lexicon/' },
            { text: 'Univers', link: '/universe', activeMatch: '/universe/' },
        ],

        sidebar: [
            {
                text: 'Règles',
                items: [
                    { text: 'Création de personnage', link: '/rules/character-creation' },
                    { text: 'Comment jouer ?', link: '/rules/how-to-play' },
                    { text: 'Magie', link: '/rules/magic' },
                    { text: 'Exploration', link: '/rules/exploration' },
                    { text: 'Combat', link: '/rules/combat' },
                    { text: 'Négociation', link: '/rules/negociation' },
                ],
            },
            {
                text: 'Lexique',
                items: [{ text: 'États', link: '/lexicon/states' }],
            },
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    },
});
