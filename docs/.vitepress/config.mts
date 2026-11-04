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
            { text: 'Secrets (MJ)', link: '/secrets/genesis', activeMatch: '/secrets/' },
        ],

        sidebar: {
            '/rulebook/': [
                {
                    text: 'Règles',
                    items: [
                        { text: 'Création de personnage', link: '/rulebook/rules/character-creation' },
                        { text: 'Comment jouer ?', link: '/rulebook/rules/how-to-play' },
                        { text: 'Exploration', link: '/rulebook/rules/exploration' },
                        { text: 'Combat', link: '/rulebook/rules/combat' },
                        { text: 'Négociation', link: '/rulebook/rules/negociation' },
                        { text: 'États', link: '/rulebook/rules/conditions' },
                        { text: 'Équipement', link: '/rulebook/rules/equipment' },
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
            ],
            '/universe/': [
                {
                    text: 'Univers',
                    items: [
                        { text: 'Accueil Univers', link: '/universe/' },
                        { text: 'Contexte Global', link: '/universe/global' },
                        { text: 'Chronologie Complète', link: '/universe/chronology' },
                        { text: 'Feuille de Route du Lore', link: '/universe/todo-roadmap' },
                        { text: 'Astronomie & Physique', link: '/universe/astronomy' },
                        { text: 'Géographie', link: '/universe/geography' },
                        { text: 'Nations & Politique', link: '/universe/nations' },
                        { text: 'Cultures & Sociétés', link: '/universe/cultures' },
                        { text: 'Divinités & Croyances', link: '/universe/religion' },
                        { text: 'Organisations & Factions', link: '/universe/factions' },
                    ]
                },
                {
                    text: 'Personnages Clés',
                    collapsed: false,
                    items: [
                        { text: 'Index & Galerie des PNJ', link: '/universe/characters/' },
                        { text: 'Émilien Leschères (Le Cavalier)', link: '/universe/characters/emilien-lescheres' },
                        { text: 'Zacharias Avicenne (Le Fou)', link: '/universe/characters/zacharias-avicenne' },
                        { text: 'Azaline Dessendre (La Dame)', link: '/universe/characters/azaline-dessendre' },
                        { text: 'Jenelle Garcenais (Compagnie du Grès)', link: '/universe/characters/jenelle-garcenais' },
                        { text: 'Hubertin Lesquin (Alchimiste)', link: '/universe/characters/hubertin-lesquin' },
                        { text: 'Judelia Rosière (Édiles de la Miste)', link: '/universe/characters/judelia-rosiere' },
                        { text: 'Adermin Rostand (Recteur d’Edrain)', link: '/universe/characters/adermin-rostand' },
                        { text: 'Octaire (Majordome de l’Académie)', link: '/universe/characters/octaire' },
                        { text: 'Colonel Gontard Estraquin (Gouverneur)', link: '/universe/characters/gontard-estraquin' },
                        { text: 'Ranag Yoav (Enquêteur du Faisceau)', link: '/universe/characters/ranag-yoav' },
                        { text: 'Adelphine Aubry (Inquisitrice)', link: '/universe/characters/adelphine-aubry' },
                        { text: 'Inquisiteur Esidore (Haut-Office)', link: '/universe/characters/inquisiteur-esidore' },
                        { text: 'Megujin (Prince des Cendres)', link: '/universe/characters/megujin-prince-des-cendres' },
                        { text: 'Anaïde (Incarnation de Sophia)', link: '/universe/characters/anaide' },
                        { text: 'Elorien (Sentinelle d’Anaïde)', link: '/universe/characters/elorien' },
                        { text: 'Vilaire (Chemins Noirs)', link: '/universe/characters/vilaire' },
                        { text: 'Henrien Sandelier (Vieille Foi)', link: '/universe/characters/henrien-sandelier' },
                        { text: 'Priscille (Chasseresse Lycanthrope)', link: '/universe/characters/priscille' },
                    ]
                }
            ],
            '/secrets/': [
                {
                    text: 'Vérités Cachées (MJ)',
                    items: [
                        { text: 'La Genèse', link: '/secrets/genesis' },
                        { text: "L'Alchimie & Le Grand Œuvre", link: '/secrets/alchemy' },
                    ]
                }
            ]
        },

        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    },
});
