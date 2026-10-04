---
layout: default
title: Accueil
---

<section id="profil" class="pane">
  <p class="pane-label">About.cs</p>
  {% if site.avatar and site.avatar != "" %}
  <img src="{{ site.avatar | relative_url }}" alt="{{ site.author }}" class="hero-avatar">
  {% endif %}
  <h1 class="hero-name">Sev FORNER<span class="cursor">_</span></h1>
  <p class="hero-role">
    <span lang="fr">&gt; Gameplay / AI / Tools Programmer</span>
    <span lang="en" hidden>&gt; Gameplay / AI / Tools Programmer</span>
  </p>
  <p class="hero-bio">
    <span lang="fr">Je m'appelle Sev, et je fais du jeu vidéo parce que j'aime voir une idée abstraite devenir quelque chose qu'on peut toucher, manette en main. Je code en C++, C# et Python, je navigue entre Unity, Unreal Engine et WPF selon les projets, et ce qui me passionne le plus, c'est le gameplay et les outils — concevoir des systèmes qui tiennent la route, et construire ce qui permet à toute une équipe d'avancer plus vite.</span>
    <span lang="en" hidden>My name is Sev, and I make games because I like watching an abstract idea turn into something you can actually hold, controller in hand. I code in C++, C#, and Python, moving between Unity, Unreal Engine, and WPF depending on the project, and what I enjoy most is gameplay and tools — building systems that hold up, and building the things that let a whole team move faster.</span>
  </p>
  <p class="hero-goals-label">
    <span lang="fr">ce que j'aimerais faire</span>
    <span lang="en" hidden>what I'd like to do</span>
  </p>
  <p class="hero-bio hero-bio-goals">
    <span lang="fr">Nelli the Seer et La Poste m'ont surtout appris à travailler en équipe sur un vrai projet : versionner proprement, documenter ce que je fais, et accepter qu'un outil n'a de valeur que si les autres s'en servent vraiment. La suite, j'aimerais la construire comme programmeur gameplay / outils dans un studio, continuer à apprendre au contact d'autres développeurs, et creuser des sujets qui m'intéressent comme la réalité virtuelle et l'intégration de l'IA dans les outils de production.</span>
    <span lang="en" hidden>Nelli the Seer and La Poste mostly taught me how to work as part of a real team: versioning cleanly, documenting what I build, and accepting that a tool only has value if people actually use it. Looking ahead, I'd like to keep building as a gameplay/tools programmer in a studio, keep learning alongside other developers, and dig deeper into things that interest me, like virtual reality and bringing AI into production tooling.</span>
  </p>
  <div class="hero-actions">
    <a href="#projets" class="btn btn-fill">
      <span lang="fr">Voir mes projets</span>
      <span lang="en" hidden>View my projects</span>
    </a>
    <a href="#contact" class="btn btn-line">
      <span lang="fr">Me contacter</span>
      <span lang="en" hidden>Get in touch</span>
    </a>
  </div>
</section>

<section id="projets" class="pane">
  <p class="pane-label">Projects.json</p>
  <h2 class="pane-title">
    <span lang="fr">Projets</span>
    <span lang="en" hidden>Projects</span>
  </h2>

  <div class="grid">
    {% assign sorted_projects = site.projects | sort: "start_date" | reverse %}
    {% for project in sorted_projects %}
    <article class="card reveal">
      {% if project.image and project.image != "" %}
      <div class="card-media">
        <img src="{{ project.image | relative_url }}" alt="{{ project.title_fr }}" loading="lazy">
      </div>
      {% elsif project.video and project.video != "" %}
      <div class="card-media">
        <video src="{{ project.video | relative_url }}" controls preload="none"></video>
      </div>
      {% elsif project.video_embed and project.video_embed != "" %}
      <div class="card-media card-media-embed">
        <iframe src="{{ project.video_embed }}" title="{{ project.title_fr }}" loading="lazy" allowfullscreen></iframe>
      </div>
      {% endif %}

      <div class="card-body">
        <p class="card-meta">// project_{{ forloop.index }}</p>
        {% if project.project_type and project.project_type != "" %}
        {% assign ptype = site.data.project_types[project.project_type] %}
        <span class="project-type project-type-{{ ptype.color }}">
          <span lang="fr">{{ ptype.fr }}</span>
          <span lang="en" hidden>{{ ptype.en }}</span>
        </span>
        {% endif %}
        <h3 class="card-title">
          <span lang="fr">{{ project.title_fr }}</span>
          <span lang="en" hidden>{{ project.title_en | default: project.title_fr }}</span>
        </h3>
        {% if project.start_date and project.start_date != "" %}
        <p class="card-dates">
          <span lang="fr">{% include date-range.html start=project.start_date end=project.end_date lang="fr" %}</span>
          <span lang="en" hidden>{% include date-range.html start=project.start_date end=project.end_date lang="en" %}</span>
        </p>
        {% endif %}
        <p class="card-subtitle">
          <span lang="fr">{{ project.subtitle_fr }}</span>
          <span lang="en" hidden>{{ project.subtitle_en | default: project.subtitle_fr }}</span>
        </p>
        <p class="card-summary">
          <span lang="fr">{{ project.summary_fr }}</span>
          <span lang="en" hidden>{{ project.summary_en | default: project.summary_fr }}</span>
        </p>
        {% if project.tags %}
        <div class="tags">
          {% for tag in project.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
        </div>
        {% endif %}
        <div class="card-actions">
          {% if project.locked %}
          <span class="card-locked">
            <span lang="fr">🔒 Bientôt disponible</span>
            <span lang="en" hidden>🔒 Coming soon</span>
          </span>
          {% else %}
          <a class="card-link" href="{{ project.url | relative_url }}">
            <span lang="fr">→ en savoir plus</span>
            <span lang="en" hidden>→ learn more</span>
          </a>
          {% endif %}
          {% if project.link and project.link != "" %}
          <a class="card-link card-link-ext" href="{{ project.link }}" target="_blank" rel="noopener">
            <span lang="fr">↗ voir en ligne</span>
            <span lang="en" hidden>↗ view live</span>
          </a>
          {% endif %}
        </div>
      </div>
    </article>
    {% endfor %}

    <!--
    <article class="card card-empty">
      <p class="card-meta">// project_next</p>
      <p class="card-empty-text">
        <span lang="fr">+ prochain projet</span>
        <span lang="en" hidden>+ next project</span>
      </p>
      <p class="card-empty-hint">
        <span lang="fr">ajoute un fichier dans <code>_projects/</code></span>
        <span lang="en" hidden>add a file in <code>_projects/</code></span>
      </p>
    </article>
     -->
  </div>
</section>

<section id="contact" class="pane">
  <p class="pane-label">Contact.xaml</p>
  <h2 class="pane-title">Contact</h2>

  <div class="output-panel reveal">
    <div class="output-bar">
      <span class="output-title">Output</span>
      <span class="output-scope">
        <span lang="fr">Afficher la sortie de : Contact</span>
        <span lang="en" hidden>Show output from: Contact</span>
      </span>
    </div>
    <div class="output-body">
      <p class="oline">1&gt;------ Build started: Project: Contact, Configuration: Release Any CPU ------</p>
      <p class="oline">
        1&gt;&nbsp;
        <span lang="fr">Sev FORNER — ouvert aux opportunités</span>
        <span lang="en" hidden>Sev FORNER — open to opportunities</span>
      </p>
      <p class="oline">1&gt;  Resolving reference <a href="mailto:[ton.email@exemple.com]">Mail</a>... <span class="ok">OK</span></p>
      <p class="oline">1&gt;  Resolving reference <a href="https://github.com/{{ site.author }}" target="_blank" rel="noopener">GitHub</a>... <span class="ok">OK</span></p>
      <p class="oline">1&gt;  Resolving reference <a href="https://linkedin.com/in/[ton-linkedin]" target="_blank" rel="noopener">LinkedIn</a>... <span class="ok">OK</span></p>
      <p class="oline oline-summary">========== Build: 1 succeeded, 0 failed ==========</p>
    </div>
  </div>
</section>
