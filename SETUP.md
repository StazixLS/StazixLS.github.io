# Setup

## Voir le rendu tout de suite (sans installer Jekyll)
Ouvre `preview.html` directement dans ton navigateur (double-clic). C'est une version statique
avec du faux contenu, juste pour voir le style — ce n'est pas le vrai site.

## Faire tourner le vrai site en local
Il faut Ruby + Bundler installés sur ta machine.

```bash
bundle install
bundle exec jekyll serve
```

Puis ouvre http://localhost:4000

## Personnaliser
- `_config.yml` → titre, description, ton pseudo GitHub (`author`)
- `index.md` → texte de la section Profil et de la section Contact
- `_projects/*.md` → un fichier par projet. Pour ajouter un projet plus tard, duplique un fichier
  dans `_projects/`, il apparaît automatiquement dans la grille. Chaque projet a :
  - `title_fr` / `title_en`, `subtitle_fr` / `subtitle_en`, `description_fr` / `description_en`
  - `tags`: liste de technos
  - `link`: lien externe optionnel (ex: page Steam, GitHub du projet)
  - `image`: chemin vers une image (ex: `/assets/projects/nelli.jpg`) — mets le fichier dans
    `assets/projects/`
  - `video`: chemin vers un fichier vidéo (ex: `/assets/projects/nelli.mp4`), affiché avec les
    contrôles de lecture natifs
  - `video_embed`: URL d'embed (ex: un lien YouTube/Vimeo au format `.../embed/...`), affiché
    dans une iframe
  - Ne remplis qu'UN SEUL des trois champs `image` / `video` / `video_embed` par projet (le
    premier rempli est utilisé, les autres sont ignorés)
  - `gallery`: liste optionnelle d'images/vidéos supplémentaires, affichées en petites vignettes
    sous la description (ex: `gallery: ["/assets/projects/nelli-1.jpg", "/assets/projects/nelli-2.mp4"]`).
    Les images ouvrent en grand dans un nouvel onglet au clic, les vidéos ont leurs contrôles direct.
- `assets/css/style.css` → les couleurs sont tout en haut du fichier, dans `:root`
  (`--rose`, `--gold`, `--foam`, `--bg`...)

## Langue FR / EN
Le site est bilingue : un bouton FR/EN en haut à droite bascule tout le texte, et le choix est
mémorisé dans le navigateur du visiteur. Ça marche avec le Jekyll natif de GitHub Pages (pas besoin
de plugin ni de build spécial) : les deux langues sont générées dans la même page HTML, et un petit
script JS affiche/masque le bon bloc.

Pour que tout reste bilingue quand tu ajoutes du contenu, pense à toujours remplir les deux
versions (`_fr` et `_en`) dans `_projects/*.md`, et à dupliquer les blocs `<span lang="fr">…</span>`
/ `<span lang="en" hidden>…</span>` si tu ajoutes du texte dans `index.md`.

## Mettre en ligne avec GitHub Pages
1. Crée un repo qui s'appelle **exactement** `ton-pseudo.github.io`
2. Pousse tout le contenu de ce dossier à la racine de CE repo (pas dans le repo `ton-pseudo/ton-pseudo`
   qui sert à ta page de profil GitHub — ce sont deux repos différents)
3. Dans Settings > Pages, source = branche `main`, dossier `/ (root)`
4. GitHub build automatiquement le site Jekyll — pas besoin de lancer `jekyll build` toi-même,
   ni de pousser le dossier `_site`
5. Le site est en ligne à `https://ton-pseudo.github.io` en quelques minutes (regarde l'onglet
   "Actions" du repo si ça ne s'affiche pas, le log de build y est visible)
