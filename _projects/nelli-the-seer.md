---
start_date: "2025-03"
end_date: "2025-07"
project_type: "student"
title_fr: "Nelli the Seer"
title_en: "Nelli the Seer"
subtitle_fr: "Projet étudiant — Action-aventure & puzzle-platformer"
subtitle_en: "Student Project — Action-Adventure & Puzzle-Platformer"
summary_fr: "Conception d'une partie de l'UI et de la navigation manette d'un action-aventure sorti sur Steam."
summary_en: "Designed part of the UI and gamepad navigation for an action-adventure released on Steam."
tags: ["Unreal Engine 5", "C++", "Blueprint", "UI/UX"]
link: "https://store.steampowered.com/app/3801320/Nelli_The_Seer/"
image: "/assets/projects/Nelli The Seer/Cover.png"
video: ""
video_embed: ""
gallery:
  - "/assets/projects/Nelli The Seer/Pause et Crash.mp4"
  - "/assets/projects/Nelli The Seer/Selection Niveau.mp4"
  - "/assets/projects/Nelli The Seer/Gameplay Memoire 1.mp4"
  - "/assets/projects/Nelli The Seer/Gameplay Memoire 2.mp4"
  - "/assets/projects/Nelli The Seer/Options Onglets.mp4"
description_fr: |
  Nelli The Seer est un projet étudiant d'Objectif 3D : un action-aventure à la troisième personne mêlant plateforme et énigmes basées sur la mémoire ([aperçu](#gallery-3)), sorti gratuitement sur Steam le 8 juillet 2025 (89% d'avis positifs, plus de 20 000 téléchargements).

  {::nomarkdown}
  <iframe src="https://www.youtube.com/embed/vjoIUP63a10" class="float-right" allowfullscreen></iframe>
  {:/nomarkdown}

  ## Mon rôle

  Mon travail s'est concentré sur l'UI et l'UX du jeu : conception d'une architecture de widgets réutilisables (BaseWidget, BaseButton, BasePanel, BaseMenu...), et implémentation d'une partie des menus — accueil, sélection de niveau ([aperçu](#gallery-2)), options, pause ([aperçu](#gallery-1)), crédits, collectibles — avec prise en charge clavier/souris et manette, en collaboration avec le reste de l'équipe UI.

  <div class="media-compare">
    <figure>
      <img src="/assets/projects/Nelli The Seer/Touches Greybox.png" alt="Menu de remapping des touches, version greybox">
      <figcaption>Version greybox</figcaption>
    </figure>
    <figure>
      <img src="/assets/projects/Nelli The Seer/Touches Final.png" alt="Menu de remapping des touches, version finale">
      <figcaption>Version finale</figcaption>
    </figure>
  </div>

  <div class="media-compare">
    <figure>
      <img src="/assets/projects/Nelli The Seer/Options Greybox.png" alt="Menu des options, version greybox">
      <figcaption>Version greybox</figcaption>
    </figure>
    <figure>
      <img src="/assets/projects/Nelli The Seer/Options Final.png" alt="Menu des options, version finale">
      <figcaption>Version finale</figcaption>
    </figure>
  </div>

  ## Défis techniques

  Trois systèmes m'ont donné le plus de fil à retordre : le focus system (à quel widget la manette/le clavier "s'accroche", [aperçu ici](#gallery-5)), le menu pause, et la détection + rebind clavier ↔ manette. Ce trio a dû être solidifié une seconde fois lors de la migration d'Unreal Engine 5.4.4 (v1.0.0) vers 5.6.1 (v1.1.0), qui a cassé une partie du système existant.

  ## Ce dont je suis le plus fier

  La transition du menu pause entre deux niveaux : j'ai éliminé le petit "pop" de l'écran de chargement entre deux changements de niveau, pour un résultat fluide et sans accroc visible.

  ## Après la sortie

  Le travail ne s'est pas arrêté à la sortie Steam. J'ai continué à corriger des bugs bien après la fin officielle du projet : deux crashs majeurs ([l'un d'eux ici](#gallery-1)), des correctifs côté 3C et GPE (des zones auxquelles je n'avais pas touché en production), et la réadaptation du système de rebind/détection clavier-manette après la migration vers UE 5.6.1.

  ## Ce que j'en ai retenu

  Mon premier vrai projet avec Perforce (P4V), donc mon premier vrai apprentissage du travail en versioning sur un gros projet d'équipe. Côté technique : mieux utiliser les Blueprints, et ne pas sur-architecturer. Un système "trop réutilisable" peut surcharger un Blueprint pour un gain quasi nul.
description_en: |
  Nelli The Seer is a student project from Objectif 3D: a third-person action-adventure blending platforming and memory-based puzzles ([preview](#gallery-3)), released for free on Steam on July 8, 2025 (89% positive reviews, 20,000+ downloads).

  {::nomarkdown}
  <iframe src="https://www.youtube.com/embed/vjoIUP63a10" class="float-right" allowfullscreen></iframe>
  {:/nomarkdown}

  ## My role

  My work focused on the game's UI and UX: designing a reusable widget architecture (BaseWidget, BaseButton, BasePanel, BaseMenu...), and implementing part of the menus — main menu, level select ([preview](#gallery-2)), options, pause ([preview](#gallery-1)), credits, collectibles — with keyboard/mouse and gamepad support, alongside the rest of the UI team.

  <div class="media-compare">
    <figure>
      <img src="/assets/projects/Nelli The Seer/Touches Greybox.png" alt="Key remapping menu, greybox version">
      <figcaption>Greybox version</figcaption>
    </figure>
    <figure>
      <img src="/assets/projects/Nelli The Seer/Touches Final.png" alt="Key remapping menu, final version">
      <figcaption>Final version</figcaption>
    </figure>
  </div>

  <div class="media-compare">
    <figure>
      <img src="/assets/projects/Nelli The Seer/Options Greybox.png" alt="Options menu, greybox version">
      <figcaption>Greybox version</figcaption>
    </figure>
    <figure>
      <img src="/assets/projects/Nelli The Seer/Options Final.png" alt="Options menu, final version">
      <figcaption>Final version</figcaption>
    </figure>
  </div>

  ## Technical challenges

  Three systems gave me the most trouble: the focus system (which widget the gamepad/keyboard is "attached" to, [preview here](#gallery-5)), the pause menu, and keyboard-to-gamepad detection + rebinding. This trio had to be reinforced a second time during the migration from Unreal Engine 5.4.4 (v1.0.0) to 5.6.1 (v1.1.0), which broke part of the existing system.

  ## What I'm most proud of

  The pause menu transition between levels: I eliminated the small loading-screen "pop" that used to appear between level changes, for a smooth result with no visible hitch.

  ## After launch

  The work didn't stop at the Steam release. I kept fixing bugs well after the project's official end: two major crashes ([one of them here](#gallery-1)), fixes on the 3C and GPE side (areas I hadn't touched during production), and re-adapting the rebind/keyboard-gamepad detection system after the UE 5.6.1 migration.

  ## What I took away from it

  My first real project using Perforce (P4V), so my first real experience with version control on a large team project. On the technical side: using Blueprints more effectively, and not over-architecting. A system that's "too reusable" can overload a Blueprint for almost no gain.
---
