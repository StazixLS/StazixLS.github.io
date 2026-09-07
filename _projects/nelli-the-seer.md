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
gallery: []
description_fr: |
  Nelli The Seer est un projet étudiant d'Objectif 3D : un action-aventure à la troisième personne mêlant plateforme et énigmes basées sur la mémoire, sorti gratuitement sur Steam le 8 juillet 2025 (89% d'avis positifs, plus de 20 000 téléchargements).

  {::nomarkdown}
  <iframe src="https://www.youtube.com/embed/vjoIUP63a10" class="float-right" allowfullscreen></iframe>
  {:/nomarkdown}

  ## Mon rôle

  Mon travail s'est concentré sur l'UI et l'UX du jeu : conception d'une architecture de widgets réutilisables (BaseWidget, BaseButton, BasePanel, BaseMenu...), et implémentation d'une partie des menus — accueil, sélection de niveau, options, pause, crédits, collectibles — avec prise en charge clavier/souris et manette, en collaboration avec le reste de l'équipe UI.

  [Avant/après UI greybox vs finale — voir SETUP.md pour le bloc `.media-compare` à coller ici]

  ## Défis techniques

  Trois systèmes m'ont donné le plus de fil à retordre : le focus system (à quel widget la manette/le clavier "s'accroche"), le menu pause, et la détection + rebind clavier ↔ manette. Ce trio a dû être solidifié une seconde fois lors de la migration d'Unreal Engine 5.4.4 (v1.0.0) vers 5.6.1 (v1.1.0), qui a cassé une partie du système existant.

  ## Ce dont je suis le plus fier

  La transition du menu pause entre deux niveaux : j'ai éliminé le petit "pop" de l'écran de chargement entre deux changements de niveau — résultat fluide, sans accroc visible.

  ## Après la sortie

  Le travail ne s'est pas arrêté à la sortie Steam — j'ai continué à corriger des bugs bien après la fin officielle du projet : deux crashs majeurs, des correctifs côté 3C et GPE (des zones auxquelles je n'avais pas touché en production), et la réadaptation du système de rebind/détection clavier-manette après la migration vers UE 5.6.1.

  ## Ce que j'en ai retenu

  Mon premier vrai projet avec Perforce (P4V) — donc mon premier vrai apprentissage du travail en versioning sur un gros projet d'équipe. Côté technique : mieux utiliser les Blueprints, et ne pas sur-architecturer — un système "trop réutilisable" peut surcharger un Blueprint pour un gain quasi nul.
description_en: |
  Nelli The Seer is a student project from Objectif 3D: a third-person action-adventure blending platforming and memory-based puzzles, released for free on Steam on July 8, 2025 (89% positive reviews, 20,000+ downloads).

  {::nomarkdown}
  <iframe src="https://www.youtube.com/embed/vjoIUP63a10" class="float-right" allowfullscreen></iframe>
  {:/nomarkdown}

  ## My role

  My work focused on the game's UI and UX: designing a reusable widget architecture (BaseWidget, BaseButton, BasePanel, BaseMenu...), and implementing part of the menus — main menu, level select, options, pause, credits, collectibles — with keyboard/mouse and gamepad support, alongside the rest of the UI team.

  [Before/after greybox vs final UI — see SETUP.md for the `.media-compare` block to paste here]

  ## Technical challenges

  Three systems gave me the most trouble: the focus system (which widget the gamepad/keyboard is "attached" to), the pause menu, and keyboard-to-gamepad detection + rebinding. This trio had to be reinforced a second time during the migration from Unreal Engine 5.4.4 (v1.0.0) to 5.6.1 (v1.1.0), which broke part of the existing system.

  ## What I'm most proud of

  The pause menu transition between levels: I eliminated the small loading-screen "pop" that used to appear between level changes — the result is smooth, with no visible hitch.

  ## After launch

  The work didn't stop at the Steam release — I kept fixing bugs well after the project's official end: two major crashes, fixes on the 3C and GPE side (areas I hadn't touched during production), and re-adapting the rebind/keyboard-gamepad detection system after the UE 5.6.1 migration.

  ## What I took away from it

  My first real project using Perforce (P4V) — so my first real experience with version control on a large team project. On the technical side: using Blueprints more effectively, and not over-architecting — a system that's "too reusable" can overload a Blueprint for almost no gain.
---
