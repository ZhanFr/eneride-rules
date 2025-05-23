# Combat

Dans ce système de jeu, le combat n'est jamais un choix anodin. Chaque affrontement est un défi tactique où les erreurs se payent cher, et où la préparation et l'exécution sont cruciales.

Les personnages sont des __adeptes__, des êtres dotés de talents exceptionnels, mais même eux doivent respecter les lois de la survie.

Face à des monstres terrifiants ou des ennemis aguerris, une planification rigoureuse et une coordination parfaite peuvent faire la différence entre la victoire et une fin tragique.

:::tip Méfiez-vous
Engager un combat, c'est accepter de prendre des risques. Les joueurs doivent comprendre leurs forces et leurs limites, utiliser l'environnement, exploiter leurs capacités, et prendre des décisions audacieuses.

Si vous pensiez pouvoir foncer tête baissée, détrompez-vous : ici, la stratégie est reine, et le champ de bataille est sans pitié pour les imprudents.
:::

Bienvenue dans l’arène. Soyez prêts, et choisissez vos batailles avec soin.

## Déroulement {#course}

La phase de combat suit une structure précise destinée à maintenir le rythme et l'équilibre entre les participants. Le combat est découpé en plusieurs phases successives : __Initiative, Surprise, Rounds et Tours__.

### Initiative {#course-initiative}

Au début d'un combat, chaque participant détermine son ordre d'action en réalisant un test d'Initiative.

* Lancez `1d10` et ajoutez votre `Coordination`.
* Le MJ effectue ce test pour les alliés et les adversaires des joueurs.

Les participants sont ensuite placés dans l'Initiative du plus élevé au plus faible.

:::tip Égalité ?
En cas d'égalité, le participant ayant la Coordination la plus élevée agit en premier.
Si l'égalité persiste, tirez au hasard pour départager.
:::

### Surprise {#course-surprise}

Si une embuscade ou un événement non anticipé déclenche le combat, un __round de surprise__ est joué immédiatement :

* Seuls les participants __non surpris__ peuvent prendre un tour durant ce round.
* Les participants surpris sont [pris au dépourvu](#off-guard) jusqu'au début du prochain round.

À l'issue du round de surprise, le combat reprend normalement avec tous les participants.

### Rounds {#course-rounds}

Le combat est ensuite structuré en __Rounds__ successifs.

Chaque round représente une courte période (environ 10 secondes) et est composé des __Tours__ de chacun des participants, selon l'Initiative.

* À la fin d'un round, on commence un nouveau round avec la même initiative.

### Tours {#course-turns}

Lors de son __Tour__, chaque participant peut effectuer un nombre limité d'activités :

* __1 Action__ : par exemple, attaquer, lancer un sort, utiliser une compétence, etc.
* __1 Manoeuvre__ : par exemple, se déplacer, se relever, dégainer une arme, etc.

:::tip Plus d'Activités
Il est possible d'effectuer des activités supplémentaires en échange de coûts spécifiques (comme du Stress). Ces conditions sont expliquées plus loin dans ce chapitre. 
:::

Une fois son tour terminé, on passe au participant suivant dans l'Initiative.

## Activités en combat {#activities}

Les activités que peuvent entreprendre les participants lors d'un combat sont divisées en trois catégories : les __Actions__, les __Manœuvres__ et les __Réactions__.

### Action {#action}

Les __Actions__ représentent les activités majeures qu'un participant peut entreprendre pendant son tour.

Elles impliquent presque toujours un test, car elles ont une issue incertaine. Exemples d'actions :

- Attaquer un ennemi.
- Lancer un sort.
- Convaincre un adversaire de baisser les armes.

Chaque participant peut effectuer __une Action par tour__, sauf aptitudes spéciales permettant d’en effectuer davantage.

### Manœuvre {#maneuver}

Les __Manœuvres__ sont des activités plus simples et rapides qui ne nécessitent pas de test.

Elles sont souvent liées à des activités tactiques ou de positionnement. Exemples de manœuvres :

- Se déplacer.
- Changer d'arme.
- Boire une potion.
- Interagir avec un objet (ouvrir un porte, actionner un levier)

Chaque participant peut effectuer __une Manœuvre par tour__, mais également :

- Sacrifier son __Action__ du tour pour réaliser une __Manœuvre__ à la place
- Effectuer une __Manœuvre additionnelle__ en prenant `1 Stress` (voir [Se Presser](#maneuvers-hurry)).

### Réaction {#reaction}

Les __Réactions__ représentent les activités entreprises hors du tour des participants en réponse à un événement. Exemples de réactions :

- Se défendre contre une attaque.
- Tenter d'éviter un projectile ou une explosion.
- Se jeter au sol pour se mettre à couvert.

Après avoir utiliser une __Réaction__, un participant confère un bonus de `+1D` cumulatif à ses adversaires lors des Réactions prises avant le début de son prochain tour.

S'il est la cible d'un test opposé sans pouvoir prendre de Réaction, il doit utiliser [Encaisser](#reactions-brace).

### Exemple pratique

Vous affrontez un groupe d'adversaires dans un entrepôt abandonné.

__Votre tour :__

* Vous utilisez une __Manœuvre__ pour [vous déplacer](#maneuvers-move) derrière une caisse, cherchant à vous mettre à couvert.
* Vous effectuez une __Action__ pour tirer sur votre adversaire avec votre arme, réussissant un test de `Tir (Coordination)`.

__Tour de l'adversaire :__

* Il vous attaque avec son arme à distance. Vous utilisez une __Réaction__ pour [Esquiver](#reaction-dodge) et choisissez de vous jeter au sol pour obtenir un bonus sur votre test de `Coordination`.


## Liste des Actions {#actions}

### Attaquer {#actions-attack}

> L'action __Attaquer__ est traitée en détail [ici](#attack).

__Attaquer__ permet de s'en prendre directement à un ou plusieurs adversaire avec une arme, un sort ou encore avec une compétence comme l'Intimidation.

Il existe plusieurs types d'attaques :

- __Attaque de contact au corps à corps__ : vous cherchez à toucher votre cible à l'aide d'une arme ou d'un sort. La cible doit être dans votre allonge. Il est possible de réagir à cette catégorie d'attaque avec [Parer](#reactions-parry), [Esquiver](#reactions-dodge) ou [Encaisser](#reactions-brace).
- __Attaque de contact à distance__ : vous cherchez à toucher votre cible à l'aide d'un projectile (qui peut être un sort). La cible doit être à portée de votre arme ou de votre sort. Il est possible de réagir à cette catégorie d'attaque avec [Esquiver](#reactions-dodge) ou [Encaisser](#reactions-brace).
- __Attaque sans contact__ : vous n'avez pas besoin de toucher votre cible. En général, vous devez voir votre cible et cette dernière doit être à votre portée. Il est possible de réagir à cette catégorie d'attaque avec [Résister](#reactions-resist) ou [Encaisser](#reactions-brace).

Une attaque n'a pas uniquement pour but d'infliger des dégâts, vous pouvez choisir l'objectif de votre attaque parmi les catégories suivantes :

- __Affaiblir__ : appliquez un état aux adversaires.
- __Blesser__ : infligez des dégâts aux adversaires.
- __Désarmer__ : faites lâcher son arme à un adversaire.
- __Distraire__ : conférez un avantage à vos alliés contre des adversaires.
- __Renverser__ : faites aller au sol des adversaires.
- __Repousser__ : déplacez des adversaires.
- __Saisir__ : saisissez un adversaire pour le restreindre ou le neutraliser.

### Se désengager {#actions-disengage}

__Se désengager__ permet de quitter l'allonge d'un ou de plusieurs adversaires.

Pour cela, réussissez un test opposé contre tous vos adversaires souhaitant [parer](#reactions-parry) en réaction. Si aucun adversaire ne peut ou ne veut parer, se désengager n'est pas nécessaire.

Pour se désengager, vous pouvez utiliser :

- __Mêlée (Coordination)__ : utilisez vos armes pour vous extirper de l'allonge de vos adversaires sans danger.
- __Pugilat (Coordination)__ : utilisez vos aptitudes martiales pour quitter l'allonge de vos adversaires sans risque.
- __Adresse (Coordination)__ : faufilez-vous habilement pour sortir de l'allonge de vos adversaires sans prendre de coup.

Si le test est une réussite contre tous vos adversaires, vous pouvez vous déplacer comme si vous utilisiez la manœuvre [se déplacer](#maneuver-move) dans le cadre de cette action.

:::tip Dans l'allonge ou non ?
On considère l'allonge des adversaires au début de votre tour.

* Si vous être dans une case qui n'est dans l'allonge d'aucun adversaire au début de votre tour, vous pouvez vous déplacer librement à travers n'importe quel nombre de cases se trouvant dans l'allonge d'adversaires sans besoin de vous désengager.
* Si vous êtes dans une case qui se trouve dans l'allonge d'un ou de plusieurs adversaires au début de votre tour, vous devez vous désengager pour quitter votre case si au moins un adversaire souhaite vous en empêcher.
::: 

### Lancer un sort {#actions-spellcast}

__Lancer un sort__ peut fonctionner comme l'action [Attaquer](#actions-attack) s'il s'agit d'un sort d'attaque ou comme l'action [Utiliser une compétence](#actions-skillcheck) s'il s'agit d'un sort utilitaire.

Le déroulement de cette action est expliqué en détail dans l'article sur la [Magie](/magic).

### Utiliser une compétence {#actions-skillcheck}

__Utiliser une compétence__ couvre toutes les actions qui ne sont pas des attaques.

Par exemple :

* Faire un saut difficile au dessus d'un obstacle pour atteindre votre adversaire.
* Identifier un effet magique en cours.
* Lancer un sort utilitaire.

## Liste des Manœuvres {#maneuvers}

### Aider {#maneuvers-help}

__Aider__ confère un bonus de `+1D` au prochain test d'un allié dans votre allonge.

Ce bonus est valable jusqu'à utilisation ou pendant 1 round.

### Aller à terre / Se relever {#maneuvers-prone-stand}

Permet d'aller [à terre](/lexicon/states#prone) depuis la position debout ou de vous relever si vous êtes à terre.

### Avancer/Retarder son tour {#maneuvers-hasten-delay}

__Avancer votre tour__ permet d'augmenter votre `initiative` d'un nombre inférieur ou égal à votre `Coordination`. __Retarder votre tour__ permet de la diminuer d'autant.

La nouvelle initiative est prise en compte à partir du prochain round.

### Se déplacer {#maneuvers-move}

Permet au personnage de se déplacer en utilisant une des méthodes suivants :

- __Marcher/Courir__ : c'est le déplacement par défaut si vous êtes debout. Déplacez-vous d'une distance inférieure ou égale à votre `Vitesse`. Par exemple, avec une `Vitesse` de 5, vous pouvez vous déplacer de 1 à 5 cases (ou de 1.5 à 7.5 mètres).
- __Monter__ : permet de monter sur une monture, un véhicule ou un support équivalent.
- __Descendre__ : permet de descendre d'une monture, d'un véhicule ou d'un support équivalent.
- __Ramper__ : c'est le déplacement par défaut si vous êtes au sol. Déplacez-vous d'1 case (ou d'1.5 mètres) peu importe votre `Vitesse`.

Sauter, rouler ou tout autre déplacement doit être associé à une des méthodes ci-dessus.

:::info Exemple
Un saut en longueur est l'équivalent de __Marcher/Courir__.

Si vous faites ce saut pour éviter un obstacle ou un terrain difficile, le MJ peut vous demander de faire un test d'`Athlétisme` ou d'`Adresse`.
:::

:::danger Déplacement et Allonge
Il n'est pas possible de quitter votre case (et donc de vous déplacer) si vous êtes dans l'allonge d'un adversaire et que ce dernier souhaite vous en empêcher. Dans ce cas, vous devez [vous désengager](#actions-disengage).
:::

### Interagir {#maneuvers-interact}

Cette manoeuvre permet d'interagir avec l'environnement.

L'interaction doit être assez rapide sinon le MJ peut vous demander d'utiliser plusieurs manoeuvres pour atteindre votre objectif.

:::info Exemple
Dire quelque chose à quelqu'un, ramasser ou poser un objet, ouvrir ou fermer une porte.
:::

### Se presser {#maneuvers-hurry}

Vous subissez `1 Stress` pour effectuer immédiatement __deux manoeuvres__ de votre choix.

Vous ne pouvez vous presser qu'__une seule fois par round__.

### Posture agressive {#maneuvers-aggressive-stance}

Vous confère un bonus de `+1D` aux tests de `Mêlée` ou de `Pugilat` jusqu'à la fin de votre tour.

L'effet n'est pas cumulable avec la manoeuvre __Posture défensive__ (la dernière manoeuvre remplace la précédente).

### Posture défensive {#maneuvers-defensive-stance}

Vous confère un bonus de `+1D` aux tests des réactions [Parer](#reactions-parry) et [Esquiver](#reactions-dodge) pendant 1 round.

L'effet n'est pas cumulable avec la manoeuvre __Posture offensive__ (la dernière manoeuvre remplace la précédente).

### Révoquer un sort {#maneuvers-revoke-spell}

Mettez fin à un sort que vous contrôlez.

### Viser {#maneuvers-aim}

Vos cibles ne bénéficient pas du bonus lié au tir sans viser aux réactions contre vos __attaques de contact à distance__ jusqu'à la fin de votre tour.

## Liste des Réactions {#reactions}

### Parer {#reactions-parry}

Permet de vous défendre contre une attaque de __contact au corps à corps__ avec un test opposé utilisant `Mêlée (Coordination)` ou `Pugilat (Coordination)`.

- Si vous obtenez au moins autant de succès que l'attaquant, vous parez l'attaque.
- Si vous dépensez 3 succès, vous obtenez une [contre-attaque](#counter-attack).

### Encaisser {#reactions-brace}

__Encaisser__ ne vous permet pas de faire un test : votre adversaire fait le test contre une difficulté de 1. En échange, __encaisser__ ne confère pas de bonus de `+1D` cumulatif à vos adversaires.

Vous devez encaisser dans les situations suivantes :

- Vous ne pouvez pas prendre de Réaction.
- Vous ne souhaitez pas conférer le bonus cumulatif de Réaction à vos adversaires.

:::danger Encaisser est dangereux
Des combattants entrainés réussiront aisément un test de difficulté 1, ce qui peut vous coûter très cher. Soyez judicieux.
:::

### Esquiver {#reactions-dodge}

Permet de vous défendre contre une attaque de __contact au corps à corps__ ou de __contact à distance__ avec un test opposé utilisant uniquement `Coordination`, auquel vous ajoutez certains bonus (voir les [modificateurs de combat](##attack-modifiers)).

:::tip Se jeter au sol
Si vous n'êtes pas [entravé](/lexicon/states#restrained), vous pouvez __vous jeter au sol__ : vous subissez `1 Stress` et vous retrouvez [à terre](/lexicon/states#prone) immédiatement. Cela vous confère les [modificateurs de combat associés](#attack-modifiers-states).
:::

Si vous obtenez au moins autant de succès que l'attaquant, vous esquivez l'attaque.

### Résister {#reactions-resist}

Permet de vous défendre contre une attaque __sans contact__ avec un test opposé.

Le plus souvent, `Discipline (Volonté)` est utilisé contre les attaques mentales et `Résilience (Vigueur)` contre les attaques infligeant des effets physiques ou des dégâts internes.

Si vous obtenez au moins autant de succès que l'attaquant, vous résistez à l'attaque.

## Attaquer {#attack}

 __Attaquer__ représente toute forme d'agression dirigée contre un ou plusieurs adversaires. Cela peut être une agression __physique__, __verbale__ ou __magique__.

Les attaques sont des actions fondamentales du combat et nécessitent une approche tactique.

Leur résolution repose sur un test opposé entre l'__attaquant__ et le __défenseur__, influencé par divers __modificateurs__.

### Règles générales {#attack-rules}

Pour mener à bien une attaque, certaines conditions doivent être remplies :

- __Identifier sa cible__ : que ce soit une zone ou un adversaire, cela nécessite une ligne de vue dégagée ou de connaître sa position.
- __Être à portée__ : à une distance appropriée selon l'arme ou le pouvoir.
- __Être compétent__ : sans quoi l'arme est considérée comme improvisée.
- __Être capable__ : vous devez pouvoir utiliser une `action`.

### Réagir à une attaque {#react-to-attack}

__Toute attaque entraine une réaction__. Si vous ne vous sentez pas en danger contre un assaillant et que vous souhaitez conserver au maximum vos capacités pour une autre attaque dans un même round, vous pouvez choisir d'[encaisser](#reactions-brace) avec les risques que cela représente.

### Résolution {#attack-resolution}

La résolution d'une attaque se fait en plusieurs étapes successives qui simulent son déroulement.

Elle repose sur un test opposé, où vous et vos adversaires engagez vos expertises respectives pour tenter de toucher… ou d’éviter le coup.

1. __Déclaration de l'attaque__ : vous décrivez l'action entreprise : quel type d’attaque, quelle arme, quelle cible, et éventuellement quelles options sont utilisées.
2. __Constitution de la réserve de dés__ : constituez votre réserve de dés en prenant en compte les modificateurs contextuels (position, portée, états, visibilité, etc).
3. __Choix de la Réaction par la cible__ : votre cible (ou vos cibles) déclare sa __réaction__, c’est-à-dire la manière dont elle compte se défendre (Parer, Esquiver, Résister ou Encaisser) en prenant en compte les conditions de l'attaque.
4. __Tests__ : lancez votre réserve de dés. Si la cible a choisi une réaction active (Parer, Esquiver ou Résister), elle lance également sa réserve. Le test est une réussite si vous obtenez __plus de succès__ que la cible. En cas d’égalité, l’attaque est un échec.
5. __Calcul des dégâts__ : Si votre attaque est une réussite, elle peut inflige des dégâts. Votre cible peut alors utiliser ses ressources défensives (armure, bouclier, autres effets). Ensuite, les réductions de dégâts, résistances, vulnérabilités ou immunités sont appliquées pour ajuster le total des dégâts subis.
6. __Application des dégâts__ : Si le total des dégâts subis est positif, on applique ces dégâts à la cible (voir [Subir des dégâts](/rules/how-to-play#take-damage)).

### Catégories {#attack-categories}

Les attaques, en plus de leurs types, peuvent être séparées en plusieurs catégories. Chaque catégorie vous permet de préciser vos intentions en combat.

Pour chaque catégorie, cette section précise :
* Les conditions d'utilisation.
* Les effets d'une réussite.
* Les effets supplémentaires que l'on peut obtenir en dépensant des succès.
 
Sauf indication contraire, les effets sont cumulatifs.

:::tip Catégories et Sorts d'attaque
En général, la description d'un sort d'attaque précise quelle(s) categorie(s) il permet d'utiliser. Vous pouvez dépenser des succès pour obtenir les effets des catégories correspondantes.
:::

#### Affaiblir {#attack-weaken}

Diminue temporairement la puissance de la cible. Dépenser des succès peut ajouter des effets plus handicapants.

* __Condition__ : vous devez utiliser une __attaque sans contact__ ou un __sort__.
* __Réussite__ : la cible est [affaiblie](/lexicon/states#weakened) pendant 1 round.
* __2 Succès__ : la cible est [étourdie](/lexicon/states#stunned) pendant 1 round.

:::tip Affaiblir sans contact ?
Cette catégorie représente des actions qui visent à saper le moral ou à fatiguer vos adversaires. Par exemple :
- Utilisez `Intimidation (Charisme)` pour démoraliser vos adversaires.
- Utilisez un __sort de fatigue__ pour réduire l'efficacité de vos adversaires.
::: 

#### Blesser {#attack-harm}

Inflige des dégâts à la cible. Dépenser des succès inflige des dégâts supplémentaires.

* __Réussite__ : inflige les dégâts de l’arme.
* __1 Succès__ : inflige 1 dégat d'arme supplémentaire.

#### Désarmer {#attack-disarm}

Force la cible à lâcher son arme. Dépenser des succès éloigne l'arme ou permet de la récupérer.

* __Réussite__ : la cible lache son arme qui tombe à ses pieds.
* __1 Succès__ : l'arme est projetée à 1 case de distance au choix de l'attaquant.
* __2 Succès__ : vous pouvez récupérer l'arme immédiatement si vous pouvez la tenir.

#### Distraire {#attack-distract}

Détourne l'attention de la cible pour aider vos alliés.

* __Réussite__ : la cible est [prise au dépourvu](#off-guard) jusqu'à la fin du tour du prochain allié contre lequel elle prend une réaction ou jusqu'au début de son prochain tour le cas échéant.
* __2 Succès__ : la cible est [prise au dépourvu](#off-guard) pendant 1 round.

#### Renverser {#attack-throw}

Cherche à faire tomber la cible à terre. Dépenser des succès peut étourdir la cible dans sa chute.

* __Réussite__ : la cible est [à terre](/lexicon/states#prone).
* __2 Succès__ : la cible est également [étourdie](/lexicon/states#stunned) pendant 1 round.

#### Repousser {#attack-repel}

Déplace la cible sur une ou plusieurs cases. Dépenser des succès peut déséquilibrer.

* __Condition__ : la cible doit pouvoir être déplacée.
* __Réussite__ : repoussez la cible d'1 case en ligne droite vers une case non occupée.
* __1 Succès__ : repoussez la cible d'1 case supplémentaire.
* __2 Succès__ : la cible est [déséquilibrée](#off-balance) pendant 1 round.

#### Saisir {#attack-seize}

Tente de limiter les mouvements de la cible. Dépenser des succès peut neutraliser.

* __Condition__ : vous devez avoir les mains libres ou utiliser une arme de saisie si vous n'utilisez pas de sort ; vous devez avoir une seule cible.
* __Réussite__ : la cible est [entravée](/lexicon/states#restrained) pendant 1 round.
* __2 Succès__ : la cible est [neutralisée](/lexicon/states#neutralized) pendant 1 round.

:::tip Saisies subséquentes
Si vous parvenez à neutraliser plusieurs rounds de suite une même cible avec Saisir, vous pouvez dépenser 1 succès pour :
* Mettre la cible [à terre](/lexicon/states#prone).
* Désarmer la cible et récupérer l'arme immédiatement si vous le souhaitez et si vous pouvez la tenir (cela peut mettre fin à la saisie).
* Asphyxier la cible (voir TODO asphyxie). 
:::

## Situations de combat {#combat-situations}

### Abri {#cover}

### Allonge {#reach}

Votre allonge représente le nombre de cases autour de vous que vous pouvez menacer. Les personnages de taille moyenne comme les humains ont une Allonge de 1. Cela veut dire que tout adversaire qui se trouve dans une case adjacente à la votre risque de devoir [se désengager](#actions-disengage) pour quitter la case qu'il occupe. Vous pouvez alors, si vous en êtes capable, [parer](#reactions-parry) en réponse.

Si vous ne souhaitez pas utiliser une __réaction__ pour [parer](#reaction-parry) le désengagement d'un adversaire dans votre allonge, alors l'adversaire n'a pas besoin de se désengager.

L'Allonge peut être supérieure à 1 pour des personnages de plus grande taille, ou si vous utilisez des armes ou des sorts qui confèrent une augmentation d'allonge.

:::tip Allonge et contrôle
Plus votre allonge est grande, plus vous obligez vos adversaires à s'opposer à vous pour se déplacer sur le champ de bataille.

Attention toutefois : chaque nouvelle [parade](#reaction-parry) ajoute un bonus de `+1D` à vos adversaires pour se désengager ou pour vous attaquer. Soyez judicieux. 
:::

### Arme improvisée {#improvised-weapon}

Si vous utilisez une arme avec laquelle __vous n'êtes pas compétent__, elle est considérée comme étant une arme improvisée de catégorie équivalente.

### Attaque multiple {#multiple-strikes}

Lors d'une attaque, vous pouvez cibler plusieurs adversaires ou cibler plusieurs fois un même adversaire. Pour cela, vous devez remplir les conditions suivantes :

* Vos armes ou votre sort doivent pouvoir être utilisés plusieurs fois dans un même tour.
* Toutes vos cibles doivent être à votre portée.
* Le nombre maximal de cible est égal à votre `Coordination`.

Pour réaliser une attaque multiple :
1. Constituez votre réserve de dés comme si vous alliez cibler un seul adversaire.
2. Appliquez les modificateurs de combat de la cible la plus difficile à toucher.
3. Divisez votre réserve par le nombre de cibles. Vous pouvez répartir les dés comme vous le souhaitez, à condition qu'aucune sous-réserve ne contienne plus de dés que votre réserve initiale moins 1 dé.
4. Opposez vos sous-réserves aux réactions de vos adversaires, notez que votre attaque multiple ne compte que comme une seule attaque.
5. Pour obtenir des réussites, chaque sous-réserve doit obtenir plus de succès que la réaction adverse.

Vous pouvez cibler plusieurs fois le même adversaire, auquel cas chaque sous-réserve doit obtenir plus de succès que l'unique réaction adverse pour être des réussites.

:::info Exemple
Vous faites face à deux adversaires (A et B) dans votre allonge. Vous décidez de faire une attaque multiple pour les blesser. Grâce à votre `Coordination` égale à 3, vous souhaitez cibler vos adversaires trois fois : deux fois sur A, une fois sur B.

* Vous constituez votre réserve de `Mêlée (Coordination)` égale à `6D`.
* Vous pouvez obtenir un bonus de `+2D` contre A et `+1D` contre B, vous ajoutez donc `+1D` pour un total de `7D`.
* Vous divisez votre réserve comme suit : `3D` contre A, `2D` contre A et `2D` contre B.
* A décide de parer votre attaque avec une réserve de `3D`.
* B décide d'équiver votre attaque avec une réserve de `2D`.
* Tous les participants lancent leurs réserves.
* Vous obtenez __3 succès__ contre A, __2 succès__ contre A et __1 succès__ contre B.
* A n'obtient __aucun succès__, B obtient __1 succès__.
* Votre attaque multiple contre A se solde par 2 réussites, vous infligez deux fois vos dégâts.
* Votre attaque multiple contre B se solde par 1 échec, vous n'infligez pas de dégâts.
:::

### Attaque de zone {#attack-area}


### Combat à deux armes {#dual-wield}

Combattre à deux armes ne confère __aucun bonus particulier__ à une réserve de dés.

Vous pouvez utiliser deux armes avec des types de dégâts et des portées différentes, vous permettant de couvrir un plus large panel de situations tactiques. Chaque arme doit pouvoir être maniée à une main, de sorte que vous puissiez les tenir en même temps.

Lorsque vous attaquez, vous choisissez avec quelle arme (ou avec les deux dans le cadre d'une attaque multiple par exemple).

### Combat aérien {#aerial-combat}

TODO Supplément

### Combat aquatique {#underwater-combat}

TODO Supplément

### Combat en aveugle {#blind-combat}

### Combat monté {#mounted-combat}

TODO Supplément

### Déséquilibré {#off-balance}

Si une situation vous empêche de combattre efficacement, vous êtes __déséquilibré__. Dans cette condition :

* Vos adversaires ont un bonus de `+1D` contre vos attaque de __contact au corps à corps__ et de __contact à distance__.
* Vos adversaires ont un bonus de `+1D` aux attaques de __contact au corps à corps__ et de __contact à distance__ contre vous.

### Pris au dépourvu {#off-guard}

Si vous êtes est surpris par vos adversaires, vous êtes __pris au dépourvu__. Dans cette condition :

* Vos adversaires ont un bonus de `+1D` aux attaques contre vous.
* Vous ne pouvez pas [parer](#reactions-parry) en réponse à l'action [se désengager](/rules/combat#actions-disengage).

### Sans défense {#defenseless}

Si vous n'êtes plus en mesure de vous défendre, vous êtes __sans défense__. Dans cette condition :

* Vous devez [encaisser](/rules/combat#reactions-brace) systématiquement dans le cadre de vos réactions.

Vous êtes sans défense si vous êtes [inconscient](/lexicon/states#unconscious).

### Terrain difficile {#difficult-terrain}

Un terrain difficile représente un espace qui gêne vos mouvements et qui est suffisamment inégal ou instable pour que votre équilibre y soit précaire.

* Vous êtes [déséquilibré](#off-balance) sur un terrain difficile.
* Quitter une case de terrain difficile nécessite deux fois plus de déplacement.

:::info Exemple : Terrain difficile et déplacement
Si vous parcourez 4 cases numérotées 1, 2, 3 et 4, et que les cases 2 et 3 sont des terrains difficiles, voici comment calculer votre déplacement avec une `Vitesse` de 5 :
- Vous vous trouvez initialement dans la case 1.
- La case 1 n'étant pas un terrain difficile, vous déplacer vers la case 2 coûte 1 case (ou 1.5 mètres).
- La case 2 est un terrain difficile, vous déplacer vers la case 3 coûte 2 cases (ou 3 mètres).
- La case 3 est un terrain difficile, vous déplacer vers la case 4 coûte également 2 cases (ou 3 mètres).
- Vous atteignez la case 4 en ayant consommé tout votre déplacement (5 cases / 7.5 mètres).
:::

:::tip Ramper en terrain difficile
Dans la majorité des cas, ramper ignore le terrain difficile : ramper sur un sol glissant ou sur un terrain instable ne représente pas de difficultés particulières.

Votre MJ peut décider que son terrain difficile n'est pas pratiquable en rampant. Dans ce cas, il peut vous demander de consommer deux manœuvres ou de réaliser un test pour quitter une case.
:::

### Tirer sans viser {#hipfire}

si un personnage tente une attaque de contact à distance sans avoir préalablement [visé](/rules/combat#maneuvers-aim) dans le même tour, la cible obtient un bonus de `+2D` à son test.

### Tirer à bout portant {#point-blank-shot}

## Modificateurs {#attack-modifiers}

Lorsqu’un personnage prépare sa réserve de dés pour attaquer ou se défendre, divers modificateurs peuvent s’appliquer. Ils reflètent des éléments tactiques et narratifs.

### État du personnage {#attack-modifiers-states}

| État | Description | Modificateurs |
| - | - | - |
| __[À Terre](/lexicon/states#prone)__ | Combat difficilement au corps à corps mais est moins exposé. | `–1D` pour et contre le contact au corps à corps.<br>`+1D` contre le contact à distance. |
| __[Affaibli](/lexicon/states#weakened)__ | Combat moins efficacement. | `–1D` par degré d'affaiblissement. |
| __[Aveuglé](/lexicon/states#blinded)__ | Ne voit pas ses adversaires. | `-2D` aux tests de combat nécessitant de voir l'adversaire. |
| __[Effrayé](/lexicon/states#frightened)__ | Est effrayé par quelque chose. | `-1D` aux tests de combat (Affaibli). |
| __[Entravé](/lexicon/states#restrained)__ | Est immobilisé par quelque chose. | `-1D` à certains tests¹.<br/>Ne peut pas Esquiver. |
| __[Épuisé](/lexicon/states#exhausted)__ | Est fatigué. | `–1D` aux tests de combat (Affaibli). |
| __[Étourdi](/lexicon/states#stunned)__ | Est sonné. | `–1D` aux tests de combat (Affaibli). |
| __[Ralenti](/lexicon/states#slowed)__ | Combat moins efficacement car ralenti. | `–1D` à certains tests². |

> ¹ ² <sub>Voir le détail des états [entravé](/lexicon/states#restrained) et [ralenti](/lexicon/states#slowed)</sub>

### Environnementaux

| Condition | Description | Effet mécanique |
| - | - | - |
| Terrain difficile | Boue, gravats, neige, etc. | Réduction de la vitesse, ou malus –1D à certains tests. |
| Hauteur | Attaquant en hauteur | +1D à l’attaque. |
| Faible visibilité | Brouillard, fumée, lumière faible. | –2D aux jets liés à la perception ou la précision. |
| Obscurité totale | Absence de lumière. | Impossible d’utiliser la vue (état Aveuglé). |
| Conditions météo | Pluie, vent, froid extrême… | Malus –1D à –3D selon la situation. |

### Tactiques

| Situation | Description | Effet mécanique |
| - | - | - |
| Flanc | Attaque coordonnée depuis plusieurs directions. | +1D ou succès automatique si règle spéciale. |
| Attaque surprise | Attaque avant que la cible ne réagisse. | –2D à la défense ou réaction impossible. |
| Portée | Hors de portée optimale. | –1D à –3D selon la distance. |
| Taille de la cible | Cible plus petite ou plus grande. | –1D (petite) ou +1D (grande). |

### Équipements et Aptitudes

| Élément | Description | Effet mécanique |
| - | - | - |
| Arme de qualité | Arme exceptionnelle ou bien fabriquée. | +1D à l’attaque. |
| Armure renforcée | Armure améliorée ou magique. | +1D à la réduction de dégâts. |
| Bouclier actif | Utilisation tactique d’un bouclier. | +1D ou +2D à la défense selon type. |
| Aptitudes spéciales | Talent actif ou passif. | Bonus variable (dés, succès auto, etc). |
| Renforcement magique | Buff temporaire. | +1D à certaines actions, ou immunité ciblée. |

### Narratifs

| Situation | Description | Effet mécanique |
| - | - | - |
| Aide d’un allié | Coordination ou aide directe. | +1D à l’action concernée. |
| Destin | Motivation héroïque, point de destin utilisé. | +1D ou relance, selon la règle maison. |


