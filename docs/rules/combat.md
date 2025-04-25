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

### Surprise {#course-surprise}

### Initiative {#course-initiative}

### Rounds {#course-rounds}

### Tours {#course-turns}

## Activités en combat {#activities}

Les activités que peuvent entreprendre les personnage lors d'un combat sont divisées en trois catégories : les `Actions`, les `Manœuvres` et les `Réactions`.

### Action {#action}

Les `Actions` représentent les activités majeures qu'un personnage peut entreprendre pendant son tour.

Elles impliquent presque toujours un test, car elles ont une issue incertaine. Exemples d'actions :

- Attaquer un ennemi.
- Lancer un sort.
- Convaincre un adversaire de baisser les armes.

Chaque personnage peut effectuer __une Action par tour__, sauf règles ou talents spéciaux permettant d’en effectuer davantage.

### Manœuvre {#maneuver}

Les `Manœuvres` sont des activités plus simples et rapides qui ne nécessitent pas de test.

Elles sont souvent liées à des activités tactiques ou de positionnement. Exemples de manœuvres :

- Se déplacer.
- Changer d'arme.
- Boire une potion.
- Interagir avec un objet (ouvrir un porte, actionner un levier)

Chaque personnage peut effectuer __une Manœuvre par tour__, mais également :

- Sacrifier son Action du tour pour réaliser une Manœuvre à la place
- Effectuer une Manœuvre additionnelle en prenant `1 Stress` (voir `Se Presser`).

### Réaction {#reaction}

Les `Réactions` représentent les activités entreprises hors du tour du personnage en réponse à un événement. Exemples de réactions :

- Se défendre contre une attaque.
- Tenter d'éviter un projectile ou une explosion.
- Se jeter au sol pour se mettre à couvert.

Après avoir utiliser une Réaction, un personnage subit un malus de `-1D` cumulatif aux Réactions suivantes.

Un personnage ne peut prendre qu'un nombre de Réaction inférieur ou égal à sa `Coordination` entre la fin de son tour et le début du prochain.

S'il est la cible d'un test opposé sans pouvoir prendre de Réaction, il doit systématiquement utiliser [Encaisser](#reactions-brace).

### Exemple pratique

:::info Scénario
Un personnage affronte un groupe d'adversaires dans un entrepôt abandonné.

__Tour du personnage :__

- Il utilise une `Manœuvre` pour se déplacer derrière une caisse, cherchant à se mettre à couvert.
- Il effectue ensuite une `Action` pour tirer sur un adversaire avec son arme, réussissant un test de `Tir (Coordination)`.

__Tour de l'adversaire :__

- Il attaque le personnage avec son arme à distance. Le personnage utilise une `Réaction` pour `Esquiver` et il choisi de se jeter au sol pour obtenir un bonus sur son test de `Coordination`.
:::

## Liste des Actions {#actions}

### Attaquer {#actions-attack}

`Attaquer` permet de s'en prendre directement à un ou plusieurs adversaire avec une arme, un sort ou encore avec une compétence comme l'Intimidation.

Il existe plusieurs types d'attaques :

- __Attaque de contact au corps à corps__ : l'attaquant cherche à toucher sa cible à l'aide d'une arme ou d'un sort. La cible doit être dans l'allonge de l'attaquant. Il est possible de réagir à cette catégorie d'attaque avec `Parer`, `Esquiver` ou `Encaisser`.
- __Attaque de contact à distance__ : l'attaquant cherche à toucher sa cible à l'aide d'un projectile (qui peut être un sort). La cible doit être à portée de l'attaquant. Il est possible de réagir à cette catégorie d'attaque avec `Esquiver` ou `Encaisser`.
- __Attaque sans contact__ : l'attaquant n'a pas besoin de toucher sa cible. En général, il doit pouvoir voir sa cible et cette dernière doit être à portée de l'attaquant. Il est possible de réagir à cette catégorie d'attaque avec `Résister` ou `Encaisser`.

Une attaque n'a pas uniquement pour but d'infliger des dégâts, un attaquant peut choisir l'objectif de son attaque parmi les catégories suivantes :

- __Blesser__ : infliger des dégâts aux adversaires.
- __Affaiblir__ : appliquer un état aux adversaires.
- __Repousser__ : déplacer les adversaires.
- __Saisir__ : saisir un adversaire pour appliquer un état, le déplacer ou le faire tomber au sol.
- __Distraire__ : confèrer un avantage à vos alliés contre des adversaires.
- __Désarmer__ : faire lâcher son arme à un adversaire.
- __Renverser__ : faire aller au sol des adversaires.

:::tip Article détaillé
L'action __Attaquer__ est traitée en détail [ici](#attack)
:::

### Se désengager {#actions-disengage}

`Se désengager` permet de quitter l'allonge d'un ou de plusieurs adversaires engagés.

Pour cela, il faut réussir un test opposé contre tous les adversaires souhaitant `Parer` en réaction. Si aucun adversaire ne peut ou ne veut `Parer`, se désengager n'est pas nécessaire.

Pour se désengager, il est possible d'utiliser :

- __Mêlée (Coordination)__ : le personnage utilise ses armes pour s'extirper de l'allonge de ses adversaires sans risque.
- __Pugilat (Coordination)__ : le personnage utilise ses aptitudes martiales pour quitter l'allonge de ses adversaires sans risque.
- __Adresse (Coordination)__ : le personnage se faufile habilement pour sortir de l'allonge de ses adversaires sans prendre de coup.

### Lancer un sort {#actions-spellcast}

`Lancer un sort` peut fonctionner comme l'action `Attaquer` s'il s'agit d'un sort d'attaque ou comme l'action `Utiliser une compétence` s'il s'agit d'un sort utilitaire.

Le déroulement de cette action est expliqué en détail dans l'article sur la [Magie](/magic).

### Utiliser une compétence {#actions-skillcheck}

`Utiliser une compétence` couvre toutes les actions qui ne sont pas des attaques.

:::info Exemple
Faire un saut difficile au dessus d'un obstacle pour atteindre un adversaire ou identifier un effet magique en cours.
:::

## Liste des Manœuvres {#maneuvers}

### Aider {#maneuvers-help}

`Aider` confère un bonus de +1D à un test d'un allié dans l'allonge du personnage.

Ce bonus est valable jusqu'à la fin du round.

### Aller au sol / Se relever {#maneuvers-prone-stand}

Cette manoeuvre permet d'aller au sol depuis la position debout ou de se relever si le personnage est au sol.

### Avancer/Retarder son tour {#maneuvers-hasten-delay}

`Avancer son tour` permet d'augmenter son `initiative` d'un nombre inférieur ou égal à sa `Coordination`.

`Retarder son tour` permet de la diminuer d'autant.

La nouvelle initiative est prise en compte à partir du prochain round.

### Se déplacer {#maneuvers-move}

Permet au personnage de se déplacer en utilisant une des méthodes suivants :

- __Marcher/Courir__ : c'est le déplacement par défaut si le personnage est debout. Il se déplace d'une distance inférieure ou égale à sa `Vitesse`. Par exemple, un humain avec une `Vitesse` de 5 peut se déplacer de 1 à 5 cases (ou de 1.5 à 7.5 mètres).
- __Monter__ : permet de monter sur une monture, un véhicule ou un support équivalent.
- __Descendre__ : permet de descendre d'une monture, d'un véhicule ou d'un support équivalent.
- __Ramper__ : c'est le déplacement par défaut si le personnage est au sol. Il se déplace d'1 case (ou d'1.5 mètres) peu importe sa `Vitesse`.

Sauter, rouler ou tout autre déplacement d'un personnage doit être associé à une des méthodes ci-dessus.

:::info Exemple
Un saut en longueur est l'équivalent de __Marcher/Courir__.

Si le personnage fait ce saut pour éviter un obstacle ou un terrain difficile, le MJ peut demander au joueur de faire un test d'`Athlétisme` ou d'`Adresse`.
:::

### Interagir {#maneuvers-interact}

Cette manoeuvre permet d'interagir avec l'environnement.

L'interaction doit être assez rapide sinon le MJ peut demander au joueur d'utiliser plusieurs manoeuvres pour atteindre son objectif.

:::info Exemple
Dire quelque chose à quelqu'un, ramasser ou poser un objet, ouvrir ou fermer une porte.
:::

### Se presser {#maneuvers-hurry}

Le personnage subit `1 Stress` pour effectuer immédiatement deux `manoeuvres` de son choix.

Un personnage ne peut se presser qu'__une seule fois par round__.

### Posture agressive {#maneuvers-aggressive-stance}

Confère un bonus de +1D aux tests de `Mêlée` ou de `Pugilat` jusqu'au début du prochain tour du personnage.

L'effet n'est pas cumulable avec la manoeuvre `Posture défensive` (la dernière manoeuvre remplace la précédente).

### Posture défensive {#maneuvers-defensive-stance}

Confère un bonus de +1D aux tests entrepris dans le cadre des réactions `Parer` et `Esquiver` jusqu'au début du prochain tour du personnage.

L'effet n'est pas cumulable avec la manoeuvre `Posture offensive` (la dernière manoeuvre remplace la précédente).

### Révoquer un sort {#maneuvers-revoke-spell}

Met fin à un sort que le personnage contrôle.

### Viser {#maneuvers-aim}

Permet d'annuler le malus du `Tir rapide` jusqu'à la fin du tour du personnage.

## Liste des Réactions {#reactions}

### Parer {#reactions-parry}

Permet de se défendre d'une attaque de __contact au corps à corps__ avec un test opposé utilisant `Mêlée (Coordination)` ou `Pugilat (Coordination)`.

- Si le personnage obtient au moins autant de succès que l'attaquant, il pare l'attaque.
- Se le défenseur obtient 3 degrés de réussite, il obtient une `Contre-attaque`.

### Encaisser {#reactions-brace}

`Encaisser` ne permet pas à son utilisateur de faire un test : son opposant fait le test contre une difficulté de 1.

Un personnage peut Encaisser dans les situations suivantes :

- Il ne peut plus prendre de Réaction.
- Il souhaite conserver sa première Réaction sans malus.

:::danger Attention
Encaisser est particulièrement risqué.

Des combattants entrainés réussiront aisément un test de difficulté 1, ce qui peut coûter très cher.

À utiliser judicieusement.
:::

### Esquiver {#reactions-dodge}

Permet de se défendre d'une attaque de __contact au corps à corps__ ou de __contact à distance__ avec un test opposé utilisant `Coordination` sans compétence, auquel s'ajoutent certains bonus ou malus (voir TODO Modificateurs de combat).

:::tip Se jeter au sol
Si le personnage n'est pas `Entravé`, il est possible de `Se jeter au sol` : le personnage subit `1 Stress` et se retrouve [À Terre](/lexicon/states#prone) immédiatement. Cela lui confère les modificateurs de combat associés.
:::

Si le personnage obtient au moins autant de succès que l'attaquant, il esquive l'attaque.

### Résister {#reactions-resist}

Permet de se défendre d'une attaque __sans contact__ avec un test opposé dont la réserve de dés dépend de l'attaque.

Le plus souvent, la compétence `Discipline (Volonté)` est utilisée contre les attaques mentales et la compétence `Résilience (Vigueur)` contre les attaques infligeant des effets physiques ou des dégâts internes.

Si le personnage obtient au moins autant de succès que l'attaquant, il résiste à l'attaque.

## Attaquer {#attack}

 `Attaquer` représente toute forme d'agression dirigée contre un ou plusieurs adversaires. Cela peut être une agression __physique__, __verbale__ ou __magique__.

Les attaques sont des actions fondamentales du combat et nécessitent une approche tactique.

Leur résolution repose sur un test opposé entre l'__attaquant__ et le __défenseur__, influencé par divers __modificateurs__.

### Règles générales {#attack-rules}

Pour mener à bien une `attaque`, certaines conditions doivent être remplies :

- __Identifier sa cible__ : que ce soit une zone ou un adversaire, cela nécessite une ligne de vue dégagée ou de connaître sa position.
- __Être à portée__ : à une distance appropriée selon l'arme ou le pouvoir.
- __Être compétent__ : sans quoi l'arme est considérée comme improvisée.
- __Être capable__ : le personnage doit pouvoir utiliser une `action`.

### Réagir à une attaque {#react-to-attack}

Toute `attaque` entraine une `réaction`. Si un personnage ne se sent pas en danger contre un assaillant et qu'il souhaite conserver au maximum ses capacités pour une prochaine attaque dans un même round, il peut choisir d'`Encaisser` avec les risques que cela représente.

### Résolution {#attack-resolution}

La résolution d'une attaque se fait en plusieurs étapes successives qui simulent son déroulement.

Elle repose sur un test opposé, où l’attaquant et la cible engagent leur expertise respective pour tenter de toucher… ou d’éviter le coup.

1. __Déclaration de l'attaque__ : Le joueur décrit l'action entreprise : quel type d’attaque, quelle arme, quelle cible, et éventuellement quelles options sont utilisées.
2. __Constitution de la réserve de dés__ : L’attaquant constitue sa réserve de dés en prenant en compte les modificateurs contextuels (position, portée, états, visibilité, etc).
3. __Choix de la Réaction par la cible__ : la cible déclare sa __Réaction__, c’est-à-dire la manière dont elle compte se défendre (Parer, Esquiver, Résister ou Encaisser) en prenant en compte les conditions de l'attaque.
4. __Tests__ : L’attaquant lance sa réserve de dés. Si la cible a choisi une réaction active (Parer, Esquiver ou Résister), elle lance également sa réserve. Le test est réussi si l’attaquant obtient plus de Succès que la cible. En cas d’égalité, l’attaque est un échec.
5. __Calcul des dégâts__ : Si l’attaque touche, elle inflige ses dégâts. La cible peut alors utiliser ses ressources défensives (armure, bouclier, autres effets). Ensuite, les réductions de dégâts, résistances, vulnérabilités ou immunités sont appliquées pour ajuster le total des dégâts subis.
6. __Application des dégâts__ : Si le total des dégâts subis est positif, on applique ces dégâts à la cible (voir [Subir des dégâts]()).

### Catégories d'attaques {#attack-categories}

#### Blesser

#### Affaiblir

#### Repousser

#### Saisir

#### Distraire

#### Désarmer

#### Renverser


## Situations de combat {#combat-situations}

### Infériorité numérique {#overwhelmed}

Quand un personnage se trouve dans l'allonge de plusieurs adversaires sans bénéficier du soutien d'alliés, il est __en infériorité numérique__.

Cette situation confère un bonus de `+1D` aux __attaques__ de ses adversaires.

### Pris au dépourvu {#off-guard}

Quand un personnage est surpris par ses adversaires, il est __pris au dépourvu__, ce qui implique :

* un malus de `-1D` à ses __réactions défensives__ (Parer, Esquiver et Résister).
* il ne peut pas utiliser de réaction en réponse à l'action [se désengager](/rules/combat#actions-disengage).

### Sans défense {#defenseless}

Quand un personnage n'est plus en mesure de se défendre, il est __sans défense__.

Le personnage ne peut normalement plus agir, ce qui l'oblige à [encaisser](/rules/combat#reactions-brace) systématiquement dans le cadre de ses réactions.

Un personnage est sans défense s'il est [inconscient](/lexicon/states#unconscious).

### Terrain difficile {#difficult-terrain}

### Allonge {#reach}

### Combat à deux armes {#dual-wield}

### Abri

### Combat monté

### Combat aérien

### Combat aquatique

### Cas particuliers {#attack-specifics}

* __Tirer sans viser__ : si un personnage tente une attaque de contact à distance sans avoir préalablement [visé](/rules/combat#maneuvers-aim) dans le même tour, il subit un malus de `-2D` à son test.
* __Arme improvisée__ : si un personnage utilise une arme avec laquelle __il n'est pas compétent__, son arme est considérée comme étant improvisée.

## Modificateurs {#attack-modifiers}

Lorsqu’un personnage prépare sa réserve de dés pour attaquer ou se défendre, divers modificateurs peuvent s’appliquer. Ils reflètent des éléments tactiques et narratifs.

### État du personnage

| État | Description | Modificateurs |
| - | - | - |
| __[À Terre](/lexicon/states#prone)__ | Combat difficilement au corps à corps mais est moins exposé. | `–1D` pour et contre le contact au corps à corps.<br>`+1D` contre le contact à distance. |
| __[Affaibli](/lexicon/states#weakened)__ | Combat moins efficacement. | `–1D` par degré d'affaiblissement. |
| __[Aveuglé](/lexicon/states#blinded)__ | Ne voit pas ses adversaires. | `-2D` aux tests de combat nécessitant de voir l'adversaire. |
| __[Effrayé](/lexicon/states#afraid)__ | Est effrayé par quelque chose. | `-1D` aux tests de combat (Affaibli). |
| __[Entravé](/lexicon/states#restrained)__ | Est immobilisé par quelque chose. | `-1D` à certains tests¹.<br/>Ne peut pas Esquiver. |
| __[Épuisé](/lexicon/states#exhausted)__ | Est fatigué. | `–1D` aux tests de combat (Affaibli). |
| __[Étourdi](/lexicon/states#stunned)__ | Est sonné. | `–1D` aux tests de combat (Affaibli). |
| __[Ralenti](/lexicon/states#slowed)__ | Combat moins efficacement car ralenti. | `–1D` à certains tests². |

> ¹ ² <sub>Voir le détail des états [entravé](/lexicon/states#restrained) et [ralenti](/lexicon/states#slowed)</sub>

### Environnementaux

| Condition | Description | Effet mécanique |
| - | - | - |
| Abri partiel | Abri partiel (muret, meuble…). | –2D aux attaques contre la cible. |
| Couvert lourd | Abri solide (mur, porte…). | –4D aux attaques contre la cible. |
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


