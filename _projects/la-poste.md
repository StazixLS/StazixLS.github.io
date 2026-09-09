---
start_date: "2026-01"
end_date: "2026-03"
project_type: "pro"
title_fr: "Projet La Poste"
title_en: "La Poste Project"
subtitle_fr: "Serious game VR — formation & sensibilisation"
subtitle_en: "VR serious game — training & awareness"
summary_fr: "Contribution aux mécaniques et interactions de deux modules de formation VR pour La Poste, projet client réel mené via l'école."
summary_en: "Contributed to the mechanics and interactions of two VR training modules for La Poste, a real client project run through school."
tags: ["Unity", "C#", "VR"]
link: "https://www.linkedin.com/posts/santaezsaezcuritaeztravail-laposte-ugcPost-7447257936340455425-iHXG/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGP3VwcBC5j46txAf7VX7F60ZpaOPMh-gRc"
image: "/assets/projects/La Poste/Cover.svg"
video: ""
video_embed: ""
gallery: ["/assets/projects/La Poste/Proto Cadena.png"]
description_fr: >
  Deux modules de formation en réalité virtuelle développés pour La Poste — un vrai projet client, mené via l'école (Objectif 3D) avec une équipe de 24 étudiants sur plus de cinq mois au total. Le projet a été présenté publiquement le 27 mars 2026 et couvert par la presse locale (Midi Libre).

  ![Article Midi Libre sur le projet](/assets/projects/La Poste/Presse Midi Libre.jpg){: .float-right }

  ## Mon rôle

  J'ai travaillé sur les deux modules. En janvier, plutôt en solo, sur le Module 2 (mini-jeu du cadenas) : architecture des Game/MiniGame Managers, physique et interactions du cadenas, particules, son, un système de quiz avec indices, et quelques méthodes d'extension C# réutilisables (TryGetComponent, GetComponentsInChildren...).

  À partir de février, avec un camarade, sur toutes les étapes d'interaction du Module 1 (inspection du transpalette). J'ai aussi développé un système de mise en surbrillance des objets interactifs ("Halo") — [prototype visible ici](#gallery-1).

  ## Défis techniques

  Le plus gros morceau a été ce système de Halo. Le composant "Halo" natif d'Unity ne convenait pas du tout, et une autre approche testée ne fonctionnait pas correctement une fois en VR. La solution retenue : un matériau dédié, permutable à la volée — quand le halo s'active sur un objet, son matériau est remplacé par ce matériau spécial. Le système va jusqu'à un outil de config personnalisé dans l'inspecteur Unity, avec prévisualisation directement hors mode Play.

  Contrainte de prod à noter : l'équipe disposait de peu de casques VR, ce qui a rendu le test de nos mécaniques plus long que prévu.

  ## Ce que j'en ai retenu

  Les bases du développement VR — notamment les composants de grab et d'interaction. Itérer sur plusieurs approches avant de trouver la bonne pour le Halo, une solution finalement plus simple qu'attendu. Et une vraie expérience de travail en binôme serré sur un système partagé.
description_en: >
  Two VR training modules developed for La Poste — a real client project, run through the school (Objectif 3D) with a team of 24 students over five-plus months in total. The project was publicly presented on March 27, 2026 and covered by local press (Midi Libre).

  ![Midi Libre newspaper article about the project](/assets/projects/La Poste/Presse Midi Libre.jpg){: .float-right }

  ## My role

  I worked on both modules. In January, mostly solo, on Module 2 (the padlock mini-game): Game/MiniGame Manager architecture, padlock physics and interactions, particles, sound, a quiz system with hints, and a few reusable C# extension methods (TryGetComponent, GetComponentsInChildren...).

  From February onward, alongside a teammate, on all the interaction steps of Module 1 (pallet jack inspection). I also built a highlight system for interactive objects ("Halo") — [prototype visible here](#gallery-1).

  ## Technical challenges

  The biggest piece was this Halo system. Unity's native Halo component didn't work at all, and another approach I tried didn't behave correctly once in VR. The solution: a dedicated material, swapped on the fly — when the halo activates on an object, its material gets replaced with this special one. The system even includes a custom config tool in the Unity inspector, with a preview outside Play mode.

  Worth noting as a production constraint: the team had very few VR headsets, which made testing our mechanics take longer than expected.

  ## What I took away from it

  The basics of VR development — grab and interaction components in particular. Iterating through several approaches before landing on the right one for the Halo, a solution that ended up simpler than expected. And real experience working in close pair programming on a shared system.
---
