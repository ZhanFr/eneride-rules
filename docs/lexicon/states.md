# États

Les __États__ représentent des conditions particulières qui affectent un personnage pendant une durée plus ou moins longue. Ils traduisent des situations physiques, mentales ou magiques qui modifient leur comportement, leurs activités disponibles, ou leur efficacité en jeu.

Un __État__ peut être appliqué par une action (comme une attaque), une condition environnementale, ou un effet divers. Certains __États__ disparaissent automatiquement après un certain temps ou un événement particulier ; d'autres nécessitent une activité volontaire ou un test pour être levés.

Les États peuvent influencer :

* les __tests__ (en conférant des bonus ou des malus),
* les __possibilités__ d’un personnage,
* ou encore les interactions avec d’autres règles du système.

Un État persiste tant qu’il n’est pas supprimé ou que l'effet ayant imposé l'État n'a pas pris fin.

:::tip Cumuler des États
Par défaut, des États différents se cumulent et un même État ne peut être appliqué plusieurs fois. Il existe des exceptions décrites dans les États concernés.
:::

### A terre {#prone}

Un personnage est considéré comme __à Terre__ lorsqu’il se trouve en position allongée, que ce soit par perte d’équilibre, volontairement (pour se dissimuler ou se protéger), ou suite à un effet.

* Les attaques de contact au corps à corps contre lui bénéficient d'un bonus de `+1D`.
* Les cibles de ses attaques de contact au corps à corps bénéficie d'un bonus de `+1D` pour se défendre.
* Bénéficie de `+1D` contre les attaques de contact à distance.
* Ne peut [se déplacer](/rules/combat#se-deplacer) qu’en utilisant la méthode __ramper__.
* [Se relever](/rules/combat#aller-au-sol-se-relever) supprime l'état.

:::info Se jeter au sol
Cet état reflète un désavantage tactique contre les ennemis proches, mais peut offrir une meilleure couverture face à des projectiles ou des assauts à distance.
:::

### Affaibli {#weakened}

Le personnage subit un malus de `–1D` cumulatif par source d’affaiblissement.

* __Un même effet ne s’applique qu’une fois__ : si un même sort ou capacité inflige l’état __affaibli__ deux fois de suite, le malus reste à `–1D`.

### Assourdi {#deafened}

Le personnage __échoue automatiquement__ les tests nécessitant l’ouïe.

* Si le personnage n'est pas naturellement sourd, il subit un malus de `-2D` aux tests basés sur la [Perception](/rules/how-to-play#la-perception).

### Aveuglé {#blinded}

Le personnage __échoue automatiquement__ les tests nécessitant la vue.

* Si le personnage n'est pas naturellement aveugle, il s'applique l'état __ralenti__.

### Effrayé {#frightened}

Le personnage est saisi de peur :

* Il s'applique l’état __Affaibli__.
* Il ne peut pas volontairement se rapprocher de la source de sa peur (déplacement, attaques, etc).

### Entravé {#restrained}

Quelque chose empêche le personnage de se déplacer (entrave physique, gravité augmentée, etc) :

* Il est [déséquilibré](/rules/combat#off-balance) en combat.
* Sa [vitesse](/rules/character-creation#speed) est réduite à 0.

### Épuisé {#exhausted}

Le personnage est très fatigué (manque de sommeil, épuisement physique ou mental) :

* Il s'applique l’état __Affaibli__.
* Son [seuil de Stress](/rules/character-creation#seuil-de-stress) est divisé par 2 (arrondi à l’inférieur).

### Etourdi {#stunned}

Le personnage n'est plus en possession de tous ses moyens :

* Il est [déséquilibré](/rules/combat#off-balance) en combat.
* Il s'applique l’état __Affaibli__.
* Il ne peut prendre qu'une seule manœuvre ou une seule action par tour.

### Neutralisé {#neutralized}

Le personnage est totalement immobilisé (paralysie, entrave complète, etc) :

* Il s'applique l’état __Entravé__.
* Il ne peut pas effectuer d’action ni de manœuvre.
* Il doit [encaisser](/rules/combat#encaisser) avec ses réactions.

### Inconscient {#unconscious}

Le personnage a perdu connaissance :

* Il est [sans défense](/rules/combat#sans-defense) en combat.
* Il s'applique l’état __Neutralisé__.
* Il tombe immédiatement __À Terre__.
* Il lâche tout ce qu’il tient.

### Ralenti {#slowed}

Une condition freine les déplacements du personnage :

* Il est [déséquilibré](/rules/combat#off-balance) en combat.
* Sa [vitesse](/rules/character-creation#speed) est divisée par 2 (arrondi à l’inférieur).

### Terrifié {#terrified}

Le personnage est pris d'une panique extrême :

* Il s'applique l’état __Effrayé__.
* Pendant son tour, il ne peut effectuer que des activités qui l’éloignent de la source de sa terreur (par exemple, [se déplacer](/rules/combat#se-deplacer) en s'éloignant).