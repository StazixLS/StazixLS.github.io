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

  // Fake build in the Output panels (Contact = success, 404 = failure): log
  // lines print one by one and each status spins briefly before settling on
  // OK / FAILED. Everything stays in the DOM, so the contact links are always
  // there; a click on the panel skips straight to the end, and without JS or
  // under prefers-reduced-motion the final state is shown right away.
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const compilePanels = document.querySelectorAll('.output-panel[data-compile]');
  if (compilePanels.length && 'IntersectionObserver' in window && !reduceMotion) {
    const SPIN = ['|', '/', '-', '\\'];
    const LINE_MS = 180;
    const SPIN_MS = 300;

    const runBuild = (panel) => {
      const lines = Array.from(panel.querySelectorAll('.oline'));
      const timers = [];
      const spinners = new Map();
      let finished = false;

      const settle = (status) => {
        clearInterval(spinners.get(status));
        status.textContent = status.dataset.final;
        status.classList.remove('is-pending');
      };

      const finish = () => {
        if (finished) return;
        finished = true;
        timers.forEach(clearTimeout);
        panel.querySelectorAll('.status').forEach(settle);
        panel.classList.remove('is-compiling');
      };

      panel.querySelectorAll('.status').forEach((status) => {
        status.dataset.final = status.textContent;
      });
      panel.classList.add('is-compiling');

      let t = 0;
      lines.forEach((line) => {
        const status = line.querySelector('.status');
        const showAt = t;
        timers.push(setTimeout(() => {
          line.classList.add('is-shown');
          if (!status) return;
          let frame = 0;
          status.classList.add('is-pending');
          status.textContent = SPIN[0];
          spinners.set(status, setInterval(() => {
            frame += 1;
            status.textContent = SPIN[frame % SPIN.length];
          }, 90));
        }, showAt));
        if (status) {
          timers.push(setTimeout(() => settle(status), showAt + SPIN_MS));
          t = showAt + SPIN_MS + 40;
        } else {
          t = showAt + LINE_MS;
        }
      });
      timers.push(setTimeout(finish, t + 120));
      panel.addEventListener('click', finish, { once: true });
    };

    const buildObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          buildObserver.unobserve(entry.target);
          runBuild(entry.target);
        });
      },
      { threshold: 0.35 }
    );
    compilePanels.forEach((panel) => buildObserver.observe(panel));
  }

  // Gallery videos: play only while on screen, so the page doesn't download
  // and decode several large clips at once. A video the visitor paused by
  // hand stays paused. Nothing autoplays under prefers-reduced-motion.
  const galleryVideos = document.querySelectorAll('.gallery-item video');
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
