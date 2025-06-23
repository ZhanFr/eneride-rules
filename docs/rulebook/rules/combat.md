# Combat

Dans ce système de jeu, le combat n'est jamais un choix anodin. Chaque affrontement est un défi tactique où les erreurs se payent cher, et où la préparation et l'exécution sont cruciales.

Vous êtes un __adepte__, un être doté de talents exceptionnels, mais vous n'êtes pas invincible.

:::warning Méfiez-vous
Engager un combat, c'est accepter de prendre des risques.

Vous devez comprendre vos forces et vos limites, utiliser l'environnement, exploiter vos capacités, et prendre des décisions audacieuses pour sortir victorieux.
:::

Bienvenue dans l’arène. Soyez prêts, et choisissez vos batailles avec soin.

## Déroulement {#course}

La phase de combat suit une structure précise destinée à maintenir le rythme et l'équilibre entre les participants. Le combat est découpé en plusieurs phases : __Initiative, Surprise, Rounds et Tours__.

### Initiative {#course-initiative}

Au début d'un combat, vous déterminez dans quel ordre vous prenez votre tour en réalisant un test d'initiative.

* Lancez `1D10` et ajoutez votre `Coordination`.
* Le MJ effectue ce test pour les participants non-joueurs.

Les participants sont ensuite placés dans l'Initiative du plus élevé au plus faible.

:::tip Égalité ?
En cas d'égalité entre un autre participant et vous, vous choisissez qui agit en premier. Si c'est un autre joueur, prenez la décision ensemble !
:::

### Surprise {#course-surprise}

Si une embuscade ou un événement non anticipé déclenche le combat, un __round de surprise__ est joué immédiatement.

Si vous êtes surpris :

* Vous ne pouvez pas prendre de tour pendant ce round.
* Vous êtes [pris au dépourvu](#off-guard) jusqu'à la fin du round.

### Rounds {#course-rounds}

Le combat est structuré en __rounds__ successifs.

Chaque __round__ représente une courte période (environ 10 secondes) et est composé des __tours__ de chacun des participants dans l'ordre de l'initiative.

Quand tous les participants en capacité de prendre leur __tour__ l'ont fait, un __nouveau round__ commence avec la même initiative.

### Tours {#course-turns}

Lors de votre __tour__, vous pouvez effectuer un nombre limité d'activités :

* __1 Action__ : attaquer, lancer un sort, utiliser une compétence, etc.
* __1 Manoeuvre__ : se déplacer, se relever, dégainer une arme, etc.

:::tip Plus d'Activités
Certaines activités ou aptitudes peuvent vous conférer plus d'actions ou de manœuvres.
:::

Une fois votre tour terminé, le prochain participant dans l'initiative débute le sien.

## Les Points d'Aptitudes {#ability-points}

En progressant dans votre [carrière](character-creation#careers), vous allez obtenir diverses aptitudes qui peuvent consommer ou conférer des points d'aptitude. Ces points sont une ressource qui représente votre capacité à canaliser vos pouvoirs d'__Adepte__ lors des combats.

Les points d'aptitude peuvent aller de 0 à un maximum défini par vos progressions de carrière.

* Au début du combat, vous commencez avec 0 points d'aptitude.
* À la fin du combat, vous perdez tous vos points d'aptitude non dépensés.

Au début de votre aventure, votre carrière vous permet de cumuler jusqu'à 3 points d'aptitude. Cette limite augmente avec certaines progressions.

:::tip Aptitude en dehors des combats ?
Les phases de [négociation](negociation) et d'[exploration](exploration) ne répondent pas aux mêmes critères que la phase de combat. Vous n'y subissez pas la pression de l'affrontement, vous n'y ressentez pas les puissantes énergies qui s'entrechoquent.

Pour ces raisons, utiliser des points d'aptitude en dehors des combats n'a pas de sens :
* Si vous souhaitez faire la démonstration d'une aptitude qui dépense des points d'aptitude, le MJ peut vous demander un test simple.
* Si vous souhaitez utiliser un sort, vous devez utiliser un rituel équivalent (voir l'[article sur la magie](magic)).
:::

:::tip Représenter les points d'aptitude
Vous allez gagner et dépenser des points d'aptitude très fréquemment en combat. Plutôt que de noter chaque changement, vous pouvez utiliser un `D10` sur lequel vous affichez votre nombre de points.

À l'apogée de votre puissance, vous pourrez avoir jusqu'à 9 points d'aptitude, ce qui colle parfaitement avec les faces du `D10` !
:::

#### Gagner des points d'aptitude {#gain-ability-points}

* Au début de votre tour, vous gagnez 1 point d'aptitude.
* Certaines activités ou aptitudes de carrière peuvent vous faire gagner 1 ou plusieurs points d'aptitude.

:::danger Points d'aptitude et états
Si vous êtes [épuisé](conditions#exhausted), vous ne gagnez pas de point d'aptitude au début de votre tour.
:::

#### Dépenser les points d'aptitude {#use-ability-points}

* Dépensez `1 point d'aptitude` pour [vous presser](#maneuvers-hurry).
* Dépensez des points d'aptitude pour utiliser vos aptitudes et sorts les plus puissants.

## Activités en combat {#activities}

Les activités que vous pouvez entreprendre lors d'un combat sont divisées en trois catégories : les __Actions__, les __Manœuvres__ et les __Réactions__.

### Action {#action}

Les __actions__ représentent les activités majeures que vous pouvez entreprendre pendant votre tour.

Elles impliquent presque toujours un test, car elles ont une issue incertaine.
Vous pouvez effectuer __une action par tour__, sauf circonstances spéciales permettant d’en effectuer davantage.

:::info Exemples d'actions 
- Attaquer un adversaire.
- Lancer un sort.
- Désamorcer un explosif.
:::

### Manœuvre {#maneuver}

Les __manœuvres__ sont des activités plus simples et rapides qui ne nécessitent pas de test.

Elles sont souvent liées à des activités tactiques ou de positionnement. Vous pouvez effectuer __une manœuvre par tour__, mais également :

- Sacrifier une __action__ du tour pour réaliser une __manœuvre__ à la place
- Effectuer une __manœuvre additionnelle__ en dépensant 1 point d'aptitude (voir [se presser](#maneuvers-hurry)).

:::info Exemples de manœuvres
- Se déplacer.
- Changer d'arme.
- Boire une potion.
- Interagir avec un objet (ouvrir un porte, actionner un levier)
:::

### Réaction {#reaction}

Les __réactions__ représentent les activités entreprises en dehors de votre tour en réponse à un événement.

Après avoir utiliser une __réaction__, vous concédez un bonus de `+1D` cumulatif à vos adversaires pour les autres réactions prises avant le début de votre prochain tour.

Si vous êtes la cible d'un test opposé sans pouvoir prendre de __réaction__, vous devez utiliser [encaisser](#reactions-brace).

:::info Exemples de réactions
- Se défendre contre une attaque.
- Tenter d'éviter un projectile ou une explosion.
- Se jeter au sol pour se mettre à couvert.
:::

### Cas pratique {#practical-case}

Vous affrontez un groupe d'adversaires dans un entrepôt abandonné.

__Votre tour :__

* Vous utilisez une __manœuvre__ pour [vous déplacer](#maneuvers-move) derrière une caisse, cherchant à vous mettre à couvert.
* Vous effectuez une __action__ pour tirer sur votre adversaire avec votre arme, réussissant un test de `Tir (Coordination)`.

__Tour de l'adversaire :__

* Il vous attaque avec son arme à distance. Vous utilisez une __Réaction__ pour [Esquiver](#reaction-dodge) et choisissez de vous jeter au sol pour obtenir un bonus sur votre test de `Coordination`.

## Liste des Actions {#actions}

### Attaquer {#actions-attack}

> L'action __Attaquer__ est traitée en détail [ici](#attack).

__Attaquer__ permet de s'en prendre directement à un ou plusieurs adversaire avec une arme, un sort ou encore avec une compétence comme l'`intimidation`.

Il existe plusieurs types d'attaques :

- __Attaque de contact au corps à corps__ : vous cherchez à toucher votre cible à l'aide d'une arme, d'un sort ou autre. La cible doit être dans votre allonge. Vous pouvez réagir à ces attaques avec [Parer](#reactions-parry), [Esquiver](#reactions-dodge) ou [Encaisser](#reactions-brace).
- __Attaque de contact à distance__ : vous cherchez à toucher votre cible à l'aide d'un projectile (qui peut être un sort). La cible doit être dans la portée du projectile. Vous pouvez réagir à ces attaques avec [Esquiver](#reactions-dodge) ou [Encaisser](#reactions-brace).
- __Attaque sans contact__ : vous n'avez pas besoin de toucher votre cible. En général, vous devez voir votre cible et cette dernière doit être à portée de votre arme, sort ou autre. Vous pouvez réagir à ces attaques avec [Résister](#reactions-resist) ou [Encaisser](#reactions-brace).

Une attaque n'a pas uniquement pour but d'infliger des dégâts, vous pouvez choisir l'objectif de votre attaque parmi les options suivantes :

- __Affaiblir__ : diminue les capacités martiales de vos adversaires.
- __Blesser__ : inflige des dégâts à vos adversaires.
- __Désarmer__ : fait lâcher son arme à votre adversaire.
- __Distraire__ : confère un avantage à vos alliés contre vos adversaires.
- __Menacer__ : intimide et surprend vos adversaires.
- __Renverser__ : fait aller au sol vos adversaires.
- __Repousser__ : déplace vos adversaires.
- __Saisir__ : saisit un adversaire pour le restreindre ou le neutraliser.

### Se désengager {#actions-disengage}

__Se désengager__ permet de quitter l'allonge d'un ou de plusieurs adversaires.

Pour cela, réussissez un test opposé contre tous vos adversaires souhaitant [parer](#reactions-parry) en réaction. Si aucun adversaire ne peut ou ne veut parer, se désengager n'est pas nécessaire.

Pour se désengager, vous pouvez utiliser :

- __`Mêlée (Coordination)`__ : utilisez vos armes pour vous extirper de l'allonge de vos adversaires sans danger.
- __`Pugilat (Coordination)`__ : utilisez vos capacités martiales pour quitter l'allonge de vos adversaires sans risque.
- __`Adresse (Coordination)`__ : faufilez-vous habilement pour sortir de l'allonge de vos adversaires sans prendre de coup.

Si le test est une réussite contre tous vos adversaires, vous pouvez vous déplacer comme si vous utilisiez la manœuvre [se déplacer](#maneuver-move) dans le cadre de cette action.

:::tip Dans l'allonge ou non ?
On considère l'allonge des adversaires au début de votre tour.

* Si vous êtes dans une case qui n'est dans l'allonge d'aucun adversaire au début de votre tour, vous pouvez vous déplacer librement à travers n'importe quel nombre de cases se trouvant dans l'allonge d'adversaires sans besoin de vous désengager.
* Si vous êtes dans une case qui se trouve dans l'allonge d'un ou de plusieurs adversaires au début de votre tour, vous devez vous désengager pour quitter votre case si au moins un adversaire souhaite vous en empêcher.
::: 

### Lancer un sort {#actions-spellcast}

__Lancer un sort__ peut fonctionner comme l'action [Attaquer](#actions-attack) si c'est un sort d'attaque ou comme l'action [Utiliser une compétence](#actions-skillcheck) si c'est un sort utilitaire.

Le déroulement de cette action est expliqué en détail dans l'article sur la [Magie](magic).

### Utiliser une compétence {#actions-skillcheck}

__Utiliser une compétence__ couvre toutes les actions qui ne sont pas des attaques.

:::info Exemple :
* Faire un saut difficile au dessus d'un obstacle pour atteindre votre adversaire.
* Identifier un effet magique en cours.
* Lancer un sort utilitaire.
:::

## Liste des Manœuvres {#maneuvers}

### Aider {#maneuvers-help}

__Aider__ confère un bonus de `+1D` au prochain test d'un allié dans votre allonge.

Ce bonus est valable jusqu'à utilisation ou pendant 1 round.

### Aller à terre / Se relever {#maneuvers-prone-stand}

Permet d'aller [à terre](conditions#prone) depuis la position debout, ou de vous relever si vous êtes à terre.

### Se déplacer {#maneuvers-move}

Vous permet de vous déplacer en utilisant une des méthodes suivants :

- __Marcher/Courir__ : c'est le déplacement par défaut si vous êtes debout. Déplacez-vous d'une distance inférieure ou égale à votre __vitesse__. Par exemple, avec une __vitesse__ de 5, vous pouvez vous déplacer de 1 à 5 cases (ou de 1,5 à 7,5 mètres).
- __Monter__ : permet de monter sur une monture, un véhicule ou un support équivalent.
- __Descendre__ : permet de descendre d'une monture, d'un véhicule ou d'un support équivalent.
- __Ramper__ : c'est le déplacement par défaut si vous êtes [à terre](conditions#prone). Déplacez-vous d'1 case (ou d'1.5 mètres) peu importe votre __vitesse__.

:::info Exemple
Un saut est l'équivalent de __Marcher/Courir__.

Si vous faites ce saut pour éviter un obstacle ou un terrain difficile, le MJ peut vous demander de faire un test d'`Athlétisme` ou d'`Adresse`.
:::

:::tip Déplacement et bonus défensif
Chaque fois que vous utilisez cette manœuvre ou une activité qui est semblable à cette manœuvre, vous bénéficiez d'un bonus de `+1D` aux tests d'[esquive](#reactions-dodge) contre les __attaques de contact à distance__ qui vous ciblent jusqu'au début de votre prochain tour.
:::

:::danger Déplacement et Allonge
Il n'est pas possible de quitter votre case (et donc de vous déplacer) si vous êtes dans l'allonge d'un adversaire et que ce dernier souhaite vous en empêcher. Dans ce cas, vous devez [vous désengager](#actions-disengage).
:::

### Interagir {#maneuvers-interact}

Cette manoeuvre permet d'interagir avec l'environnement. Si cette interaction risque d'être longue, le MJ peut vous demander d'utiliser plusieurs manoeuvres pour atteindre votre objectif.

:::info Exemple
* Dire quelque chose à quelqu'un.
* Ramasser ou poser un objet.
* Ouvrir ou fermer une porte.
:::

### Se presser {#maneuvers-hurry}

Dépensez `1 Point d'Aptitude` pour effectuer immédiatement __deux manoeuvres__ de votre choix.

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

Vos cibles ne bénéficient pas du bonus conféré par les __attaques de contact à distance sans viser__, jusqu'à la fin de votre tour. Voir [tirer sans viser](#hipfire).

## Liste des Réactions {#reactions}

### Parer {#reactions-parry}

Permet de vous défendre contre une attaque de __contact au corps à corps__ avec un test opposé utilisant `Mêlée (Coordination)` ou `Pugilat (Coordination)`.

- Si vous obtenez au moins autant de succès que l'attaquant, vous parez l'attaque.
- Si vous dépensez `3 succès`, vous obtenez une [contre-attaque](#counter-attack).

### Encaisser {#reactions-brace}

__Encaisser__ ne vous permet pas de faire un test : votre adversaire fait le test contre une difficulté de 1. En échange, __encaisser__ ne confère pas de bonus de réactions cumulées à vos adversaires.

Vous devez __encaisser__ dans les situations suivantes :

- Vous ne pouvez pas prendre de __réaction__.
- Vous ne souhaitez pas conférer le __bonus cumulatif de réaction__ à vos adversaires.

:::danger Encaisser est dangereux
Des combattants entrainés réussiront aisément un test de difficulté 1, ce qui peut vous coûter très cher.
:::

### Esquiver {#reactions-dodge}

Permet de vous défendre contre une attaque de __contact au corps à corps__ ou de __contact à distance__ avec un test opposé utilisant uniquement `Coordination`, auquel vous ajoutez certains bonus (voir les [modificateurs de combat](##attack-modifiers)).

:::tip Se jeter au sol
Si vous n'êtes pas [entravé](conditions#restrained), vous pouvez __vous jeter au sol__ : vous perdez `1 PV` et vous retrouvez [à terre](conditions#prone) immédiatement. Cela vous confère les [modificateurs de combat associés](#attack-modifiers).
:::

Si vous obtenez au moins autant de succès que l'attaquant, vous esquivez l'attaque.

### Résister {#reactions-resist}

Permet de vous défendre contre une attaque __sans contact__ avec un test opposé.

Le plus souvent, `Discipline (Volonté)` est utilisé contre les attaques mentales et `Résilience (Vigueur)` contre les effets physiques.

Si vous obtenez au moins autant de succès que l'attaquant, vous résistez à l'attaque.

## Attaquer {#attack}

 __Attaquer__ représente toute forme d'agression dirigée contre un ou plusieurs adversaires. Cela peut être une agression __physique__, __verbale__ ou __magique__.

La résolution d'une attaque repose sur un test opposé entre vous et votre cible, influencé par divers __modificateurs__.

### Règles générales {#attack-rules}

Pour mener à bien une attaque, certaines conditions doivent être remplies :

- __Identifier votre cible__ : que ce soit une zone ou un adversaire, cela nécessite une ligne de vue dégagée ou de connaître sa position.
- __Être à portée__ : à une distance appropriée selon l'arme ou le pouvoir.
- __Être compétent__ : sans quoi l'arme est considérée comme improvisée.
- __Être en capacité__ : vous devez pouvoir utiliser une __action__.

### Réagir à une attaque {#react-to-attack}

__Toute attaque entraine une réaction__. Si vous ne vous sentez pas en danger contre un assaillant et que vous souhaitez conserver au maximum vos capacités pour une autre attaque dans un même round, vous pouvez choisir d'[encaisser](#reactions-brace) avec les risques que cela représente.

### Résolution {#attack-resolution}

La résolution d'une attaque se fait en plusieurs étapes qui simulent son déroulement :

1. __Déclarez votre attaque__ : vous décrivez l'action entreprise : quel type d’attaque, quelle arme, quelle cible, et éventuellement quelles options sont utilisées.
2. __Constituez votre réserve de dés__ : prenez en compte les modificateurs contextuels (position, portée, états, visibilité, etc).
3. __Vos cibles déclarent leur réaction__ : c'est la manière dont elles comptent se défendre (Parer, Esquiver, Résister ou Encaisser) de votre attaque.
4. __Lancez votre réserve__ : si vos cibles ont choisi une réaction active (Parer, Esquiver ou Résister), elles lancent également leur réserve. Le test est une réussite si vous obtenez __plus de succès__ qu'elles. En cas d’égalité, l’attaque est un échec.
5. __Calcul des dégâts__ : Si votre attaque est une réussite, elle peut infliger des dégâts. Vos cibles appliquent les réductions de dégâts, résistances, vulnérabilités ou immunités pour ajuster le total des dégâts subis.
6. __Application des dégâts__ : chaque cible [subit les dégâts](how-to-play#take-damage) qu'elle n'a pas pu réduire.

### Catégories {#attack-categories}

Les attaques, en plus de leurs types, peuvent être séparées en plusieurs catégories. Chaque catégorie vous permet de préciser vos intentions en combat.

Pour chaque catégorie, cette section précise :
* Les conditions d'utilisation.
* Les effets d'une réussite.
* Les effets supplémentaires que vous pouvez obtenir en dépensant des succès.
 
Sauf indication contraire, les effets sont cumulatifs.

:::tip Catégories et Sorts d'attaque
En général, la description d'un sort d'attaque précise quelle(s) categorie(s) il permet d'utiliser. Vous pouvez dépenser des succès pour obtenir les effets des catégories correspondantes.
:::

#### Affaiblir {#attack-weaken}

Diminue temporairement l'efficacité de la cible au combat. Dépenser des succès peut ajouter des effets plus handicapants.

* __Réussite__ : la cible est [déséquilibrée](conditions#off-balance) pendant 1 round.
* __2 Succès__ : la cible est [étourdie](conditions#stunned) pendant 1 round.

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

* __Réussite__ : la cible est [prise au dépourvu](conditions#off-guard) pendant 1 round.
* __2 Succès__ : la cible doit prendre ses actions contre vous lors de son prochain round (elle peut prendre des manœuvres qui ne vous concernent pas).

#### Menacer {#attack-threaten}

Menace la cible au point de l'ébranler. Dépenser des succès peut effrayer la cible.

* __Réussite__ : la cible est [prise au dépourvu](conditions#off-guard) pendant 1 round.
* __2 Succès__ : la cible est [effrayée](conditions#frightened) par vous pendant 1 round.

#### Renverser {#attack-throw}

Cherche à faire tomber la cible à terre. Dépenser des succès peut étourdir la cible dans sa chute.

* __Réussite__ : la cible est [à terre](conditions#prone).
* __2 Succès__ : la cible est également [étourdie](conditions#stunned) pendant 1 round.

#### Repousser {#attack-repel}

Déplace la cible sur une ou plusieurs cases. Dépenser des succès peut déséquilibrer.

* __Condition__ : la cible doit pouvoir être déplacée.
* __Réussite__ : repoussez la cible d'1 case en ligne droite vers une case non occupée.
* __1 Succès__ : repoussez la cible d'1 case supplémentaire.
* __2 Succès__ : la cible est [déséquilibrée](#off-balance) pendant 1 round.

#### Saisir {#attack-seize}

Tente de limiter les mouvements de la cible. Dépenser des succès peut neutraliser.

* __Condition__ : vous devez avoir les mains libres ou utiliser une arme permettant une saisie si vous n'utilisez pas de sort ; vous devez avoir une seule cible.
* __Réussite__ : la cible est [entravée](conditions#restrained) pendant 1 round.
* __2 Succès__ : la cible est [neutralisée](conditions#neutralized) pendant 1 round.

:::tip Saisies subséquentes
Si vous parvenez à neutraliser plusieurs rounds de suite une même cible avec __Saisir__, vous pouvez dépenser 1 succès pour :
* Mettre la cible [à terre](conditions#prone).
* Désarmer la cible et récupérer l'arme immédiatement si vous le souhaitez et si vous pouvez la tenir (cela peut mettre fin à la saisie).
* Asphyxier la cible. 
:::

## Situations de combat {#combat-situations}

### Abri {#cover}

Lorsque vous êtes derrière un obstacle susceptible de vous protéger contre des attaques, vous disposez d'un abri.

Un abri vous confère un bonus de `+1D` aux réactions contre les attaques de contact au corps à corps et à distance.

:::tip Abri destructible
Un abri peut être destructible sur décision du MJ. Dans ce cas, le MJ défini le nombre de fois où l'abri est utilisable avant d'être détruit, et il réduit ce nombre à chaque fois que vous bénéficiez du bonus d'abri.
::: 

### Allonge {#reach}

Votre allonge représente le nombre de cases autour de vous que vous pouvez menacer. Les personnages de taille moyenne comme les humains ont une allonge de 1. Cela veut dire que tout adversaire qui se trouve dans une case adjacente à la votre risque de devoir [se désengager](#actions-disengage) pour quitter la case qu'il occupe. Vous pouvez alors, si vous en êtes capable, [parer](#reactions-parry) en réponse.

Si vous ne souhaitez pas utiliser une __réaction__ pour [parer](#reaction-parry) le désengagement d'un adversaire dans votre allonge, alors l'adversaire n'a pas besoin de se désengager.

L'allonge peut être supérieure à 1 pour des personnages de plus grande taille, ou si vous utilisez des armes ou des sorts qui confèrent une augmentation d'allonge.

:::tip Allonge et contrôle
Plus votre allonge est grande, plus vous obligez vos adversaires à s'opposer à vous pour se déplacer sur le champ de bataille.

Attention toutefois : chaque nouvelle [parade](#reaction-parry) confère le bonus cumulatif de réaction à vos adversaires pour se désengager ou pour vous attaquer.
:::

### Arme improvisée {#improvised-weapon}

Si vous utilisez une arme avec laquelle __vous n'êtes pas compétent__, elle est considérée comme étant une arme improvisée de catégorie équivalente.

### Attaque multi-cible {#attack-multiple-targets}

Si l'arme ou l'aptitude que vous utilisez vous permet de cibler plusieurs adversaires, vous pouvez utiliser une attaque multi-cible.

Pour réaliser une attaque multi-cible :

* Vous ne pouvez pas cibler plus d'adversaires que ce que votre arme ou votre aptitude vous permet.
* Toutes les cibles doivent être à votre portée et être des cibles valides pour votre arme ou votre aptitude.
* Appliquez les modificateurs de combat de la cible la plus difficile à toucher.
* Opposez votre réserve à celles de vos adversaires.
* Pour obtenir des réussites, votre réserve doit obtenir plus de succès que les réactions adverses.
* Les succès générés par chaque opoosition sont à traiter indépendamment.

:::info Exemple
Vous faites face à deux adversaires (A et B) dans votre allonge. Vous décidez d'utiliser une aptitude qui vous permet d'attaquer deux adversaires pour les blesser.

* Vous constituez votre réserve de `Mêlée (Coordination)` égale à `6D`.
* Les conditions vous confèrent un bonus de `+2D` contre A mais aucun bonus contre B, votre réserve reste à un total de `6D`.
* A décide de parer votre attaque une réserve de `3D`.
* B décide d'équiver votre attaque avec une réserve de `2D`.
* Tous les participants lancent leur réserve.
* Vous obtenez __4 succès__, A obtient __3 succès__ et B n'obtient __aucun succès__.
* Votre attaque multi-cible se solde par 1 réussite contre A (avec 1 succès à dépenser) et par une réussite contre B (avec 3 succès à dépenser).
* Vous infligez vos dégâts à A et à B, et pouvez dépensez vos succès contre chaque cible.
:::

### Attaque multiple {#attack-multiple-strikes}

Lors d'une attaque, vous pouvez cibler plusieurs adversaires ou cibler plusieurs fois un même adversaire. Pour cela, vous devez remplir les conditions suivantes :

* Vos armes ou votre sort doivent pouvoir être utilisés plusieurs fois dans un même tour.
* Toutes vos cibles doivent être à votre portée.
* Le nombre maximal de cible est égal à votre `Coordination`.

Pour réaliser une attaque multiple :
1. Constituez votre réserve de dés comme si vous alliez cibler un seul adversaire.
2. Appliquez les modificateurs de combat de la cible la plus difficile à toucher.
3. Divisez votre réserve par le nombre de cibles. Vous pouvez répartir les dés comme vous le souhaitez, à condition qu'aucune sous-réserve ne contienne plus de dés que votre réserve initiale -1 dé.
4. Opposez vos sous-réserves aux réactions de vos adversaires, notez que votre attaque multiple compte comme une seule attaque.
5. Pour obtenir des réussites, chaque sous-réserve doit obtenir plus de succès que la réaction adverse.
6. Les succès générés par chaque opposition sont à traiter indépendamment.

Vous pouvez cibler plusieurs fois le même adversaire, auquel cas chaque sous-réserve doit obtenir plus de succès que l'unique réaction adverse pour être des réussites.

:::info Exemple
Vous faites face à deux adversaires (A et B) dans votre allonge. Vous décidez de faire une attaque multiple pour les blesser. Grâce à votre `Coordination` égale à 3, vous souhaitez cibler vos adversaires trois fois : deux fois sur A, une fois sur B.

* Vous constituez votre réserve de `Mêlée (Coordination)` égale à `6D`.
* Les conditions vous confèrent un bonus de `+2D` contre A et `+1D` contre B, vous ajoutez le minimum de `+1D` pour un total de `7D`.
* Vous divisez votre réserve comme suit : `3D` contre A, `2D` contre A et `2D` contre B.
* A décide de parer votre attaque avec une réserve de `3D`.
* B décide d'équiver votre attaque avec une réserve de `2D`.
* Tous les participants lancent leur réserve.
* Vous obtenez __3 succès__ contre A, __2 succès__ contre A et __1 succès__ contre B.
* A n'obtient __aucun succès__, B obtient __1 succès__.
* Votre attaque multiple contre A se solde par 2 réussites (une avec 2 succès à dépenser, une avec 1), vous infligez deux fois vos dégâts et pouvez dépenser vos succès pour chaque réussite.
* Votre attaque multiple contre B se solde par 1 échec, vous n'infligez pas de dégâts.
:::

### Attaque de zone {#attack-area}

Si l'arme ou l'aptitude que vous utilisez possède une zone d'effet, vous pouvez utiliser une attaque de zone. L'attaque fonctionne alors comme une [attaque multi-cible](#attack-multiple-targets) contre toutes les cibles présentent dans la zone d'effet (y compris vos alliés).

:::tip Types de zone d'effet
Il existe trois types de zone d'effet. Si vous utilisez la [grille](how-to-play#grid), procédez comme suit :
- __Ligne__ : utilisez une règle ou un stylo comme patron. Placez là au centre de la case d'origine et constatez les cases qu'il traverse. La taille de la zone vous indique le nombre de cases adjacentes traversées par votre patron que vous pouvez cibler.
- __Cercle__ : la taille de la zone vous indique le nombre de cases adjacentes, dans toutes les directions à partir de la case d'origine, qui sont ciblées.
- __Cône__ : considérez un triangle rectangle isocèle comme patron. La taille de la zone vous indique la longueur de ses deux côtés égaux. Son angle droit se trouve au centre de la case d'origine.

Si vous n'utilisez pas la grille, le MJ doit vous indiquer quelles cibles vous pouvez atteindre.
:::

### Combat à deux armes {#dual-wield}

Combattre à deux armes ne confère __aucun bonus particulier__ à une réserve de dés.

Vous pouvez utiliser deux armes avec des types de dégâts et des portées différentes, vous permettant de couvrir un plus large panel de situations tactiques. Chaque arme doit pouvoir être maniée à une main, de sorte que vous puissiez les tenir en même temps.

Lorsque vous attaquez, vous choisissez avec quelle arme (ou avec les deux dans le cadre d'une [attaque multiple](#attack-multiple-strikes) par exemple).

### Terrain difficile {#difficult-terrain}

Un terrain difficile représente un espace qui gêne vos mouvements et qui est suffisamment inégal ou instable pour que votre équilibre y soit précaire.

* Vous êtes [déséquilibré](#off-balance) sur un terrain difficile.
* Quitter une case de terrain difficile nécessite deux fois plus de déplacement.

:::info Exemple : Terrain difficile et déplacement
Si vous parcourez 4 cases numérotées 1, 2, 3 et 4, et que les cases n°2 et n°3 sont des terrains difficiles, voici comment calculer votre déplacement avec une `vitesse` de 5 :
- Vous vous trouvez initialement dans la case n°1.
- La case n°1 n'étant pas un terrain difficile, vous déplacer vers la case n°2 coûte 1 case (ou 1.5 mètres).
- La case n°2 est un terrain difficile, vous déplacer vers la case n°3 coûte 2 cases (ou 3 mètres).
- La case n°3 est un terrain difficile, vous déplacer vers la case n°4 coûte également 2 cases (ou 3 mètres).
- Vous atteignez la case n°4 en ayant consommé tout votre déplacement (5 cases / 7.5 mètres).
:::

:::tip Ramper en terrain difficile
Dans la majorité des cas, ramper ignore le terrain difficile : ramper sur un sol glissant ou sur un terrain instable ne représente pas de difficultés particulières.

Votre MJ peut décider que son terrain difficile n'est pas pratiquable en rampant. Dans ce cas, il peut vous demander de consommer deux manœuvres ou de réaliser un test pour quitter une case.
:::

### Tirer sans viser {#hipfire}

Si vous tentez une attaque de contact à distance sans avoir préalablement [visé](#maneuvers-aim) dans le même tour, votre cible bénéficie d'un bonus de `+1D` à sa réaction.

## Modificateurs {#attack-modifiers}

Vous trouverez dans les tableaux ci-dessous un récapitulatif des situations et états qui vous confèrent des bonus offensifs ou des bonus défensifs.

### Bonus offensifs {#attack-modifiers-offensive}

| Situation | Modificateurs |
| - | - |
| Votre cible est [à terre](conditions#prone). | `+1D` aux attaques de contact au corps à corps. |
| Votre cible est [déséquilibrée](conditions#off-balance). | `+1D` aux attaques de contact au corps à corps et à distance. |
| Votre cible est [prise au dépourvu](conditions#off-guard). | `+1D` aux attaques. |
| Votre cible est plus petite. | `+1D` aux attaques pour chaque différence de taille. |
| Vous utilisez une arme de qualité. | `+1D` aux attaques utilisant cette arme. |
| Un allié vous [aide](#maneuvers-help). | `+1D` au prochain test de votre choix. |
| Vous adoptez une [posture agressive](#maneuvers-aggressive-stance). | `+1D` aux tests de `Mêlée` et de `Pugilat` jusqu'à la fin de votre tour. |
| Vous utilisez un [point de destin](how-to-play#use-destiny-points). | `+1D` au test de votre choix. |

### Bonus défensifs {#attack-modifiers-defensive}

| Situation | Modificateurs |
| - | - |
| Vous êtes [à terre](conditions#prone). | `+1D` contre les attaques de contact à distance. |
| Votre cible est [à terre](conditions#prone). | `+1D` contre ses attaques de contact au corps à corps. |
| Votre cible est [déséquilibrée](#off-balance). | `+1D` contre ses attaques de contact au corps à corps et à distance. |
| Vous vous êtes [déplacé](#maneuvers-move) lors de votre dernier tour. | `+1D` aux [esquives](#reactions-dodge) contre les attaques de contact à distance pour chaque manœuvre entreprise. |
| Vous bénéficiez d'un [abri](#cover). | `+1D` contre les attaques de contact au corps à corps et à distance. |
| Votre adversaire vous cible en ayant une [perception faible](how-to-play#perception-accuracy). | `+1D` contre ses attaques. |
| Un allié vous [aide](#maneuvers-help). | `+1D` au prochain test de votre choix. |
| Vous adoptez une [posture défensive](#maneuvers-defensive-stance). | `+1D` aux tests pour [parer](#reactions-parry) et [esquiver](#reactions-dodge) jusqu'au début de votre prochain tour. |
| Vous utilisez un [point de destin](how-to-play#use-destiny-points). | `+1D` au test de votre choix. |

