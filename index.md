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
    <span lang="fr">Développeur passionné par le jeu vidéo, je code en C++, C# et Python, et je navigue entre Unity, Unreal Engine et WPF selon les projets. J'aime particulièrement le gameplay et les outils qui simplifient le travail en équipe — transformer une idée en quelque chose de jouable, du prototype à la version finale.</span>
    <span lang="en" hidden>I'm a game developer who codes in C++, C#, and Python, moving between Unity, Unreal Engine, and WPF depending on the project. I especially enjoy gameplay programming and building tools that make teamwork easier — turning an idea into something playable, from first prototype to final build.</span>
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
    <article class="card">
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
          <a class="card-link" href="{{ project.url | relative_url }}">
            <span lang="fr">→ en savoir plus</span>
            <span lang="en" hidden>→ learn more</span>
          </a>
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

    <article class="card card-empty">
      <p class="card-meta">// project_next</p>
      <p class="card-empty-text">
        <span lang="fr">+ prochain projet</span>
        <span lang="en" hidden>+ next project</span>
      </p>
      <!--
      <p class="card-empty-hint">
        <span lang="fr">ajoute un fichier dans <code>_projects/</code></span>
        <span lang="en" hidden>add a file in <code>_projects/</code></span>
      </p>
      -->
    </article>
  </div>
</section>

<section id="contact" class="pane">
  <p class="pane-label">Contact.xaml</p>
  <h2 class="pane-title">Contact</h2>

  <div class="output-panel">
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
