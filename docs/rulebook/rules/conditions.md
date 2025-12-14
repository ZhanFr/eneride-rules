# États

Les __États__ représentent des conditions qui vous affectent pendant une certaine durée. Ils traduisent des situations physiques, mentales ou magiques qui modifient vos activités disponibles ou votre efficacité en jeu.

Un __état__ peut être appliqué par une arme, une aptitude ou encore une condition environnementale. Certains __états__ disparaissent automatiquement après un certain temps ; d'autres nécessitent une activité ou un test.

Un __état__ persiste tant qu’il n’est pas supprimé ou que l'effet ayant imposé l'état n'a pas pris fin.

:::tip Cumuler des états
Les conséquences d'états différents se cumulent, mais pas celles d'un même état appliqué plusieurs fois.

Si deux états identiques vous sont appliqués, les conséquences de cet état persistent jusqu'à ce que les deux états soient supprimés.
:::

:::info Exemple
Si vous êtes [à terre](#prone) et [effrayé](#frightened), vous cumulez les conséquences de ces deux effets. Un adversaire qui vous cible avec une attaque de contact au corps à corps bénéficie de `+2D` (`+1D` en raison de l'état à terre, et `+1D` en raison de l'état [pris au dépourvu](#off-guard) conféré par l'état effrayé).

Si vous êtes [assourdi](#deafened) par deux effets différents, l'un ayant une durée d'1 round et l'autre ayant une durée d'1 heure, vous ne cumulez pas deux fois les conséquence de cet effet, mais vous resterez assourdi jusqu'à la fin de l'effet avec une durée d'1 heure.
:::

### A terre {#prone}

Vous êtes __à terre__ lorsque vous vous trouvez en position allongée, que ce soit par perte d’équilibre ou par votre propre décision (pour se dissimuler ou se protéger).

* Vos adversaires ont un bonus de `+1D` aux attaques de __contact au corps à corps__ contre vous.
* Vos adversaires ont un bonus de `+1D` contre vos attaques de __contact au corps à corps__.
* Vous avez un bonus de `+1D` contre les attaques de __contact à distance__.
* Vous ne pouvez [vous déplacer](combat#maneuvers-move) qu’en utilisant la méthode __ramper__.
* [Vous relever](combat#maneuvers-prone-stand) supprime l'état.

:::info Se jeter au sol
Cet état reflète un désavantage tactique contre les ennemis proches, mais peut offrir une meilleure défense face à des attaques à distance.
:::

### Assourdi {#deafened}

Vous __échouez automatiquement__ les tests faisant appel à votre ouïe.

* Vous êtes également [déséquilibré](#off-balance).

### Aveuglé {#blinded}

Vous __échouez automatiquement__ les tests faisant appel à votre vue.

* Vous êtes également [ralenti](#slowed).

### Déséquilibré {#off-balance}

Vous ne parvenez pas à combattre efficacement :

* Vos adversaires ont un bonus de `+1D` aux attaques de __contact au corps à corps__ et de __contact à distance__ contre vous.
* Vos adversaires ont un bonus de `+1D` contre vos attaques de __contact au corps à corps__ et de __contact à distance__.

### Effrayé {#frightened}

Vous êtes saisi par la peur :

* Vous êtes également [pris au dépourvu](#off-guard).
* Vous ne pouvez pas volontairement vous rapprocher de la source de votre peur.

### Entravé {#restrained}

Vous ne pouvez plus vous déplacer :

* Vous êtes également [déséquilibré](#off-balance).
* Votre [vitesse](character-creation#speed) est réduite à 0.

### Etourdi {#stunned}

Vous êtes limité dans votre capacité à agir :

* Vous êtes également [déséquilibré](#off-balance).
* Vous ne pouvez prendre qu'une seule manœuvre ou une seule action par tour.

### Inconscient {#unconscious}

Vous avez perdu connaissance :

* Vous êtes également [neutralisé](#neutralized).
* Vous tombez immédiatement [à terre](#prone).
* Vous lâchez tout ce que vous tenez.

### Neutralisé {#neutralized}

Vous êtes totalement immobilisé (paralysie, entrave complète, etc) :

* Vous êtes également [entravé](#restrained).
* Vous ne pouvez effectuer aucune action ou manœuvre.
* Vous ne pouvez utiliser que la réaction [encaisser](combat#reactions-brace).

### Pris au dépourvu {#off-guard}

Vous êtes surpris par vos adversaires :

* Vos adversaires ont un bonus de `+1D` aux attaques contre vous.
* Vous ne pouvez pas [parer](combat#reactions-parry) en réaction à l'action [se désengager](combat#actions-disengage).

### Ralenti {#slowed}

Vos déplacements sont ralentis :

* Vous êtes également [déséquilibré](#off-balance).
* Votre [vitesse](character-creation#speed) est divisée par 2.

