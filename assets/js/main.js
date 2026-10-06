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

  const revealTargets = document.querySelectorAll('.reveal');
  if (revealTargets.length) {
    if ('IntersectionObserver' in window) {
      // Reveal as soon as an element is 15% visible, but only hide it again
      // once it has fully left the viewport. A single threshold used to hide
      // elements the moment they dipped below ~15% visible — which could
      // still be most of the element on screen — leaving a gap where content
      // the user was still looking at had faded out.
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.15) {
              entry.target.classList.add('in-view');
            } else if (entry.intersectionRatio <= 0) {
              entry.target.classList.remove('in-view');
            }
            // Between 0 and 0.15: leave the current state alone (hysteresis).
          });
        },
        { threshold: [0, 0.15] }
      );
      revealTargets.forEach((el) => revealObserver.observe(el));
    } else {
      revealTargets.forEach((el) => el.classList.add('in-view'));
    }
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
