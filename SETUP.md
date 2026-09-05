# Setup

## Voir le rendu tout de suite (sans installer Jekyll)
Ouvre `preview.html` dans ton navigateur pour la page d'accueil, et `preview-project.html`
pour un exemple de page projet (avec une image flottante dans le texte). Ce sont des versions
statiques avec du faux contenu, juste pour voir le style — pas le vrai site.

## Faire tourner le vrai site en local
Il faut Ruby + Bundler installés sur ta machine.

```bash
bundle install
bundle exec jekyll serve
```

Puis ouvre http://localhost:4000

## Ça reste 100% GitHub Pages
Chaque projet a maintenant sa propre page (`/projects/nom-du-projet/`), générée automatiquement
à partir des fichiers dans `_projects/`. C'est une fonctionnalité native de Jekyll (les "collections"),
pas un plugin — donc ça continue de marcher avec le build Jekyll standard de GitHub Pages, sans
rien changer à ta config ni passer par un hébergement externe. Le site reste à
`https://ton-pseudo.github.io`.

## Structure d'un projet (`_projects/*.md`)
- `order`: nombre pour l'ordre d'affichage (1, 2, 3...)
- `title_fr` / `title_en`, `subtitle_fr` / `subtitle_en`
- `summary_fr` / `summary_en`: UNE phrase courte, affichée sur la carte de la page d'accueil
- `description_fr` / `description_en`: le texte complet, affiché sur la page dédiée du projet
  (`/projects/nom-du-projet/`) — aussi long que tu veux, plusieurs paragraphes
- `tags`: liste de technos
- `link`: lien externe optionnel (Steam, page du studio...), affiché en plus du lien interne
- `download`: lien de téléchargement optionnel (ex: build .zip, exécutable, page itch.io de download),
  affiché séparément de `link` — les deux peuvent être présents en même temps
- `image` / `video` / `video_embed`: média principal, affiché en haut de la carte ET en haut de
  la page dédiée. Ne remplis qu'un seul des trois
- `gallery`: liste d'images/vidéos supplémentaires, affichées en bas de la page dédiée du projet
  (pas sur la carte d'accueil — trop petit pour bien les montrer)

## Ajouter un nouveau projet
Duplique un fichier dans `_projects/`, donne-lui un nom de fichier différent (ex: `mon-jeu.md`) et
un `order` différent. Il apparaît automatiquement dans la grille et obtient sa propre page.

## Photo de profil
Dans `_config.yml`, remplis `avatar` avec le chemin vers ta photo (ex: `/assets/avatar.jpg`).
Mets le fichier dans `assets/`. Laisse `avatar: ""` si tu ne veux pas de photo — la section About
s'affiche normalement sans.

## Placer une image ou vidéo précisément dans le texte
Dans `description_fr` / `description_en`, tu écris du Markdown normal. Pour insérer une image ou
une vidéo à un endroit précis (par exemple flottante à droite, avec le texte qui s'enroule autour) :

```markdown
description_fr: >
  Premier paragraphe qui présente le projet.

  ![Description de l'image](/assets/projects/nelli-combat.jpg){: .float-right }

  Le texte continue ici et s'enroule autour de l'image à droite.
  Utilise `.float-left` pour la faire flotter à gauche à la place.

  Un paragraphe normal, sans image, redevient pleine largeur.
```

Pour une vidéo au même endroit dans le texte (au lieu d'une image), utilise du HTML directement :

```markdown
description_fr: >
  Texte avant la vidéo.

  <video src="/assets/projects/nelli-demo.mp4" controls class="float-right"></video>

  Le texte continue autour de la vidéo.
```

## Placer une image ou vidéo précisément dans le texte
Dans `description_fr` / `description_en`, tu écris du Markdown normal. Pour insérer une image ou
une vidéo à un endroit précis (par exemple flottante à droite, avec le texte qui s'enroule autour) :

```markdown
description_fr: >
  Premier paragraphe qui présente le projet.

  ![Description de l'image](/assets/projects/nelli-combat.jpg){: .float-right }

  Le texte continue ici et s'enroule autour de l'image à droite.
  Utilise `.float-left` pour la faire flotter à gauche à la place.

  Un paragraphe normal, sans image, redevient pleine largeur.
```

Pour une vidéo au même endroit dans le texte (au lieu d'une image), utilise du HTML directement :

```markdown
description_fr: >
  Texte avant la vidéo.

  <video src="/assets/projects/nelli-demo.mp4" controls class="float-right"></video>

  Le texte continue autour de la vidéo.
```

Mets tes fichiers médias dans `assets/projects/` (crée le dossier s'il n'existe pas), puis
référence-les avec un chemin qui commence par `/assets/projects/...`.

## Résumé (carte) vs description (page dédiée) — deux textes différents
`summary_fr`/`summary_en` et `description_fr`/`description_en` sont deux champs séparés, pense
à écrire un texte différent dans chacun :
- `summary` : une phrase vague, juste pour donner envie de cliquer sur la carte de l'accueil
- `description` : le vrai texte détaillé (contexte, ton rôle, défis techniques, résultats),
  avec tes images/vidéos placées dedans comme au-dessus — c'est ce qui s'affiche sur
  `/projects/nom-du-projet/`

## Lier un mot du texte à une image de la galerie (hyperlien)
En plus de placer des médias en plein milieu du texte, tu peux garder une galerie d'images/vidéos
en bas de la page (`gallery`) et faire pointer un mot ou une phrase du texte vers l'une d'elles.
Chaque élément de la galerie a un identifiant `#gallery-1`, `#gallery-2`, etc. (dans l'ordre de la
liste), et un petit numéro `#1`, `#2`... s'affiche dans le coin pour que tu voies lequel est lequel.

```markdown
description_fr: >
  On voit bien le problème sur [cette capture d'écran](#gallery-2) : le cadenas
  ne se verrouille pas correctement dans certains angles de caméra.
```

Ça donne un vrai lien (rose, souligné) dans le texte — au clic, la page défile jusqu'à l'image
n°2 de la galerie, qui s'illumine brièvement pour qu'on la repère. Les deux approches (image en
plein milieu du texte, et lien texte → galerie) marchent en même temps, tu choisis au cas par cas
ce qui convient le mieux à chaque média.

## Langue FR / EN
Le site est bilingue : un bouton FR/EN en haut à droite bascule tout le texte, et le choix est
mémorisé dans le navigateur du visiteur. Ça marche avec le Jekyll natif de GitHub Pages (pas besoin
de plugin ni de build spécial) : les deux langues sont générées dans la même page HTML, et un petit
script JS affiche/masque le bon bloc. Pense à toujours remplir les deux versions (`_fr` et `_en`)
de chaque champ.

## Mettre en ligne avec GitHub Pages
1. Crée un repo qui s'appelle **exactement** `ton-pseudo.github.io`
2. Pousse tout le contenu de ce dossier à la racine de CE repo (pas dans le repo `ton-pseudo/ton-pseudo`
   qui sert à ta page de profil GitHub — ce sont deux repos différents)
3. Dans Settings > Pages, source = branche `main`, dossier `/ (root)`
4. GitHub build automatiquement le site Jekyll — pas besoin de lancer `jekyll build` toi-même,
   ni de pousser le dossier `_site`
5. Le site est en ligne à `https://ton-pseudo.github.io` en quelques minutes (regarde l'onglet
   "Actions" du repo si ça ne s'affiche pas, le log de build y est visible)
