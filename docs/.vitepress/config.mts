import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Eneride',
    description: 'Règles du système',
    base: '/eneride/',

    locales: {
        root: {
            label: 'Français',
            lang: 'fr',
        },
    },

    themeConfig: {
        outline: {
            level: [2, 3],
            label: 'Table des matières',
        },

        docFooter: {
            prev: 'Page précédente',
            next: 'Page suivante',
        },

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Règles', link: '/rulebook', activeMatch: '/rules|careers/' },
            { text: 'Univers', link: '/universe', activeMatch: '/universe/' },
        ],

        sidebar: [
            {
                text: 'Règles',
                items: [
                    { text: 'Création de personnage', link: '/rulebook/rules/character-creation' },
                    { text: 'Comment jouer ?', link: '/rulebook/rules/how-to-play' },
                    { text: 'Magie', link: '/rulebook/rules/magic' },
                    { text: 'Exploration', link: '/rulebook/rules/exploration' },
                    { text: 'Combat', link: '/rulebook/rules/combat' },
                    { text: 'Négociation', link: '/rulebook/rules/negociation' },
                    { text: 'États', link: '/rulebook/rules/conditions' },
                    { text: 'Glossaire', link: '/rulebook/rules/glossary' },
                ],
            },
            {
                text: 'Carrières',
                items: [
                    { text: 'Alchimiste', link: '/rulebook/careers/alchemist' },
                    { text: 'Artificier', link: '/rulebook/careers/artificer' },
                    { text: 'Pyromancien', link: '/rulebook/careers/pyromancer' },
                    { text: 'Espion', link: '/rulebook/careers/spy' },
                    { text: 'Tacticien', link: '/rulebook/careers/tactician' },
                ],
            },
            {
                text: 'Équipement',
                items: [],
            },
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    },
});
