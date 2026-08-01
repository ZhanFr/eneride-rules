# Equipement

## Armes

Chaque arme possède des caractéristiques propres qui influencent votre réserve de dés et la manière dont vous dépensez vos succès en combat. Choisir son arme, c'est définir son style tactique.

### Disponibilité des Armes

Que ce soit par la fabrication, l'achat avec des [points de ressource](exploration#resource-points) ou d'autres méthodes, l'obtention d'une arme par votre personnage doit se faire avec la validation du MJ.

Plusieurs points sont à surveiller :
* __Le niveau de civilisation et de technologie__ : si votre groupe se trouve dans un petit village, trouver un fusil à verrou est probablement impossible.
* __La [richesse](exploration#wealth-level) de votre groupe__ : même avec des points de ressource, un personnage démuni ne pourra probablement pas faire l'acquisition d'un sabre de qualité.
* __La légalité__ : l'acquisition d'une arme de guerre fait souvent l'objet d'un permis dans les grandes villes.

### Types et Catégories d'Armes

Les armes sont classées en deux catégories, puis en types, selon leur maniement et leur portée.

#### Armes de corps à corps

Les armes de corps à corps s'utilisent à l'allonge de votre personnage. Pour les utiliser efficacement en combat, elles nécessitent un test de __`Force + Agilité`__. Il existe deux types d'armes de corps à corps :

* __Armes à une main__ : Mains nues, dagues ou sabres, ces armes peuvent se manier à une seule main.
* __Armes à deux mains :__ Hallebardes, piques et espadons, ces armes sont lourdes et se manient à deux mains.

#### Armes à distance

Les armes à distance ont chacune une portée et s'utilise en combat avec un test de __`Agilité + Perception`__. Il existe plusieurs types d'armes à distance :

* __Armes de Poing :__ Revolvers et pistolets conçus pour être maniés d'une seule main.
* __Armes d'Épaule :__ Fusils à verrou, mousquets et fusils de chasse. Ces armes nécessitent vos deux mains et privilégient la puissance et la précision à longue distance.
* __Armes de Trait :__ Arcs et arbalètes. Bien qu'anciennes, elles restent prisées pour leur discrétion.
* __Armes de Jet :__ Couteaux, hachettes ou grenades. Ces armes sont conçues pour être lancées.

### Attributs d'arme

Un __Attribut__ est une propriété spécifique qui modifie le cadre d'utilisation d'une arme. Ils représentent la qualité de fabrication, une particularité technique ou ergonomique.

| Attribut             | Effet Mécanique |
| -------------------- | - |
| __Allonge X__        | Confère une augmentation d'[allonge](combat#reach) de X. |
| __Bouclier__         | Confère un [abri](combat#cover) au porteur tant qu'il n'est ni [entravé](conditions#restrained) ni [pris au dépourvu](conditions#off-guard). |
| __Capacité X__       | Peut être utilisée X fois avant de devoir recharger. |
| __Dévastatrice__     | Chaque succès dépenser pour [blesser](combat#attack-harm) inflige +1 dégât supplémentaire. |
| __Encombrante__      | L'arme est lourde et volumineuse. Vous ne pouvez [vous déplacer](combat#maneuvers-move) qu'une fois par tour, la difficulté des tests basés sur l'`Agilité` augmente, et vos adversaires obtiennent `+1D` contre vos attaques de contact au corps à corps. |
| __Incapacitante__    | L'arme ne peut être utilisée que pour [affaiblir](combat#attack-weaken). |
| __Parade__           | Confère un bonus de `+1D` à la réaction [Parer](combat#reactions-parry). |
| __Précise__          | Peut s'utiliser avec un test de __`Agilité + Intellect`__ et infliger des dégâts basés sur l'`Intellect` plutôt que sur la `Force`. |
| __Qualité__          | Confère un bonus de `+1D` aux tests d'attaque et augmente les dégâts de +1. |
| <span style="white-space: nowrap">__Rechargement X__</span> | Nécessite X manoeuvre(s) pour remettre l'arme en état d'être utilisée. Vous devez avoir une main libre pour recharger. |
| __Zone [type] X__    | Permet de réaliser des [attaques de zone](combat#attack-area) du type donné avec une taille de X. |

:::tip Arme de qualité
L'Attribut __Qualité__ peut s'ajouter à n'importe quelle arme. Il représente une conception et une fabrication particulièrement réussie, souvent le fait d'un artisan de talent.
:::

### Liste des Armes

Sauf mention contraire, toutes les armes listées ci-dessous infligent des [dégâts d'impact](how-to-play#damage-types).

#### Armes de corps à corps

| Arme               | Type       | Dégâts    | Type de dégâts | Attributs                      |
| ------------------ | ---------- | --------- | -------------- | ------------------------------ |
| Mains nues         | Une main   | Force     | Contondants    |                                |
| Gantelets          | Une main   | Force + 1 | Contondants    |                                |
| Improvisée         | Une main   | Force + 1 | Variables      |                                |
| Main-gauche        | Une main   | Force + 1 | Perforants     | Parade, Précise                |
| Dague              | Une main   | Force + 2 | Perforants     | Précise                        |
| Lance              | Une main   | Force + 2 | Perforants     | Allonge 1, Précise             |
| Masse              | Une main   | Force + 2 | Contondants    |                                |
| Épée               | Une main   | Force + 2 | Tranchants     | Précise                        |
| Rondache           | Une main   | Force     | Contondants    | Parade                         |
| Pavois             | Une main   | Force     | Contondants    | Bouclier, Encombrante          |
| Improvisée         | Deux mains | Force + 2 | Variables      |                                |
| Pique              | Deux mains | Force + 2 | Perforants     | Allonge 2                      |
| Espadon            | Deux mains | Force + 3 | Tranchants     | Dévastatrice, Parade           |
| Hallebarde         | Deux mains | Force + 3 | Perforants ou Tranchants | Allonge 1, Dévastatrice |

:::info Armes improvisées
Une arme improvisée est un objet dont vous vous servez comme d'une arme de corps à corps mais qui n'a pas été prévu pour ça.

Par exemple :
* Une chaise, un objet contondant, une paire de ciseaux.
* Un pistolet ou un fusil utilisé au corps à corps en frappant avec la crosse.
:::

#### Armes à distance

| Arme                    | Type   | Portée  | Dégâts | Type de dégâts | Attributs                                |
| ----------------------- | ------ | ------- | :----: | -------------- | ---------------------------------------- |
| Projectile improvisé    | Jet    | Courte  | 2      | Variables      |                                          |
| Couteau de lancer       | Jet    | Courte  | 3      | Perforants     |                                          |
| Hachette                | Jet    | Courte  | 4      | Tranchants     | Dévastatrice                             |
| Grenade (Gaz)           | Jet    | Moyenne | 0      | -              | Zone Sphère 3                            |
| Grenade (fragmentation) | Jet    | Moyenne | 5      | Perforants     | Zone Sphère 2                            |
| Grenade (Incapacitante) | Jet    | Moyenne | 0      | -              | Incapacitante, Zone Sphère 2             |
| Pistolet de poche       | Poing  | Courte  | 5      | Perforants     | Capacité 2, Rechargement 1               |
| Revolver                | Poing  | Moyenne | 6      | Perforants     | Capacité 6, Rechargement 2               |
| Pistolet à percussion   | Poing  | Moyenne | 7      | Perforants     | Capacité 1, Dévastatrice, Rechargement 2 |
| Pistolet de duel        | Poing  | Moyenne | 7      | Perforants     | Capacité 1, Rechargement 1               |
| Mousquet                | Epaule | Moyenne | 8      | Perforants     | Capacité 1, Dévastatrice, Rechargement 2 |
| Fusil à verrou          | Epaule | Longue  | 7      | Perforants     | Capacité 5, Rechargement 2               |
| Fusil de chasse         | Epaule | Moyenne | 7      | Perforants     | Capacité 2, Dévastatrice, Rechargement 1 |
| Carabine à levier       | Epaule | Moyenne | 6      | Perforants     | Capacité 10, Rechargement 2              |
| Arc de chasse           | Trait  | Moyenne | 5      | Perforants     |                                          |
| Arbalète                | Trait  | Moyenne | 6      | Perforants     | Dévastatrice, Rechargement 1             |

:::tip Grenades à Gaz
En fonction du gaz utilisé, une grenade peut diffuser un nuage toxique dans la zone d'effet pendant plusieurs rounds. Ce nuage de gaz peut vous faire [suffoquer](exploration#asphyxia), réduire votre vision, vous [déséquilibrer](conditions#off-balance) ou encore vous infliger des dégâts.
:::

## Armures

Dans un monde où la technologie balistique a redéfini le champ de bataille, la survie ne repose pas uniquement sur votre capacité à frapper, mais aussi à encaisser. Si les armées de masse ont délaissé l’armure pour des raisons de coût et de mobilité, les adeptes et les unités d’élite ont renforcé l’utilisation des protections individuelles.

### Utiliser une Armure

Quand vous devez subir des dégâts, vous pouvez les [réduire](how-to-play#damage-reduction) grâce à votre armure.

* Une armure réduit les dégâts que vous devriez subir de sa valeur de __Protection__.
* Si elle ne réduit pas la totalité des dégâts, l'armure diminue sa valeur de __Protection__ de -1.
* Si une armure atteint une valeur de __Protection__ de 0, elle est inutilisable jusqu'à être réparée ou remplacée.

### Liste des Armures

Le tableau suivant présente les armures accessibles aux personnages.

* __Protection__ : la valeur de réduction de dégâts conférée par l'armure.
* __Encombrement__ : plus l'armure est encombrante, plus il est délicat de la porter avec discrétion, dans des situations sociales ou pour se mouvoir avec finesse.

| Armure                    | Protection | Encombrement | Exemples                                |
| ------------------------- | :--------: | :----------: | --------------------------------------- |
| Vêtements épais           | 1          | Faible       | Manteau, veste de cuir. |
| Vêtements renforcés       | 2          | Faible       | Veste doublée, tissus épais ou matelassé. |
| Gilet pare-balles         | 3          | Faible       | Gilet ballistique en couches de soie tissée. |
| Plastron                  | 4          | Modéré       | Cuirasse d'officier en acier. |
| Armure par-balles         | 5          | Modéré       | Combinaison de soie tissée et de plaques articulées. |
| Armure de combat          | 6          | Important    | Combinaison de couche pare-balles et de plastron en acier. |
| Armure d'assaut           | 7          | Important    | Armure complète avec couche pare-balles et protections en acier trempé. |

:::tip Armure de qualité
Comme pour les armes, un artisan de talent peut fabriquer une armure de qualité. Cela augmente la valeur de __Protection__ de +1.
:::

:::tip Armure et Encombrement
Si vous portez une armure encombrante, le MJ peut vous imposer des malus dans les cas suivants :
* Vous cherchez à être discret, à ne pas vous faire remarquer, à dissimuler quelque chose : l'armure est bruyante et attire l'attention.
* Vous tentez de convaincre ou de tromper un auditoire lors d'une [négociation](negociation) : l'armure rend méfiant et ne fait pas bonne impression en société.
* Vous réalisez un exploit physique nécessitant de l'endurance ou de la légèreté comme la nage, la course ou l'escalade : l'armure pèse lourd et vous fatigue rapidement.
* Vous [esquivez](combat#reactions-dodge) une attaque à distance vous visant : le poids de l'armure ralenti légèrement vos mouvements.
:::

## Préparations alchimiques

Les préparations alchimiques sont des consommables sous forme de liquides contenus dans des récipients. Il en existe de trois catégories :

* __Les potions__ : Liquide à boire à l'aide d'une [manoeuvre](combat#maneuver). Une fois utilisée, la potion prend effet au [tour](combat#course-turns) de la cible au prochain round, ou après une dizaine de secondes.
* __Les poisons__ : Liquide à boire, à injecter ou à appliquer sur une arme ou une munition. Une fois utilisé, le poison prend effet au tour de la cible au prochain round, ou après une dizaine de secondes.
* __Les bombes__ : Liquide à projeter comme une arme de jet. L'effet s'applique lorsque la bombe atteint sa cible.

Les préparations alchimiques possèdent également un __niveau__ (mineure, intermédiaire ou puissante) qui représente un ensemble de caractéristiques :
* La rareté des ingrédients nécessaires à sa création.
* La difficulté de la recette.
* La puissance de la préparation.

Plus une préparation à un niveau élevé, plus il est difficile de trouver les ingrédients, de la créer ou de l'acheter à un professionnel.

### Potions

| Potions mineures          | Effet |
| ------------------------- | :---: |
| Antidote                  |  |
| Dopant                    |  |
| Soin                      |  |
| Guérison                  |  |
| Endurance élémentaire     |  |
| Rapidité                  |  |
| Vigilance                 |  |
| Vision nocturne           |  |
| Flottaison                |  |
| Pouvoir                   |  |
| Récupération              | |
| Flottaison                | |

| Potions intermédiaires    | Effet |
| ------------------------- | :---: |
| Antidote                  |  |
| Dopant                    |  |
| Soin                      |  |
| Guérison                  |  |
| Endurance élémentaire     |  |
| Rapidité                  |  |
| Vigilance                 |  |
| Vision nocturne           |  |
| Flottaison                |  |
| Pouvoir                   |  |

| Potions puissantes        | Effet |
| ------------------------- | :---: |
| Antidote                  |  |
| Dopant                    |  |
| Soin                      |  |
| Guérison                  |  |
| Endurance élémentaire     |  |
| Rapidité                  |  |
| Vigilance                 |  |
| Vision nocturne           |  |
| Flottaison                |  |
| Pouvoir                   |  |

### Poisons

| Potions puissantes        | Effet |
| ------------------------- | :---: |
| Antidote                  |  |
| Dopant                    |  |
| Soin                      |  |
| Guérison                  |  |
| Endurance élémentaire     |  |
| Rapidité                  |  |
| Vigilance                 |  |
| Vision nocturne           |  |
| Flottaison                |  |
| Pouvoir                   |  |

### Bombes

| Potions puissantes        | Effet |
| ------------------------- | :---: |
| Antidote                  |  |
| Dopant                    |  |
| Soin                      |  |
| Guérison                  |  |
| Endurance élémentaire     |  |
| Rapidité                  |  |
| Vigilance                 |  |
| Vision nocturne           |  |
| Flottaison                |  |
| Pouvoir                   |  |

## Matériaux spéciaux

Vif-argent contre la régénération.
Adamantine contient les énergies et est très résistante (marche bien contre l'immatériel)
Orichalque destabilise les champs élémentaires.

## Runes






