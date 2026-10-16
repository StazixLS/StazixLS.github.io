document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const panes = document.querySelectorAll('.pane');

  if ('IntersectionObserver' in window && tabs.length && panes.length) {
    const setActiveTab = (id) => {
      tabs.forEach((tab) => {
        tab.classList.toggle('active', tab.dataset.tab === id);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    panes.forEach((pane) => observer.observe(pane));
  }

  // Gallery videos: play only while on screen, so the page doesn't download
  // and decode several large clips at once. A video the visitor paused by
  // hand stays paused. Nothing autoplays under prefers-reduced-motion.
  const galleryVideos = document.querySelectorAll('.gallery-item video');
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (galleryVideos.length && 'IntersectionObserver' in window && !reduceMotion) {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            if (!video.dataset.userPaused) video.play().catch(() => {});
          } else if (!video.paused) {
            video.dataset.autoPaused = '1';
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    galleryVideos.forEach((video) => {
      video.addEventListener('pause', () => {
        if (video.dataset.autoPaused) delete video.dataset.autoPaused;
        else video.dataset.userPaused = '1';
      });
      video.addEventListener('play', () => {
        delete video.dataset.userPaused;
      });
      videoObserver.observe(video);
    });
  }
});

(function () {
  var STORAGE_KEY = 'site-lang';
  var SUPPORTED = ['fr', 'en'];

  function applyLang(lang) {
    document.documentElement.lang = lang;

    document.body.querySelectorAll('[lang="fr"], [lang="en"]').forEach(function (el) {
      el.hidden = el.getAttribute('lang') !== lang;
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.dataset.langBtn === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable, ignore */
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* localStorage unavailable, ignore */
    }
    var initial = SUPPORTED.indexOf(stored) !== -1 ? stored : 'fr';
    applyLang(initial);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.dataset.langBtn);
      });
    });
  });
})();
