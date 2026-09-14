/* =========================================================
   THEME TOGGLE (dark / light) — persisted in localStorage
========================================================= */
(function initTheme(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const label = document.getElementById('themeLabel');
  const saved = localStorage.getItem('rb-theme');
  const theme = saved || 'dark';

  root.setAttribute('data-theme', theme);
  updateLabel(theme);

  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('rb-theme', next);
    toggle.setAttribute('aria-pressed', String(next === 'light'));
    updateLabel(next);
  });

  function updateLabel(t){
    label.textContent = t === 'dark' ? 'Dark' : 'Light';
  }
})();

/* =========================================================
   NAV — solid background after scrolling past hero
========================================================= */
(function initNav(){
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
})();

/* =========================================================
   CURSOR-FOLLOWING SPOTLIGHT (hero section only)
========================================================= */
(function initSpotlight(){
  const spotlight = document.getElementById('spotlight');
  const hero = document.querySelector('.hero');
  if (!spotlight || !hero) return;

  let raf = null;
  let targetX = 0, targetY = 0;

  window.addEventListener('pointermove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    if (!raf) raf = requestAnimationFrame(paint);
  });

  function paint(){
    spotlight.style.setProperty('--x', targetX + 'px');
    spotlight.style.setProperty('--y', targetY + 'px');
    raf = null;
  }

  const io = new IntersectionObserver(([entry]) => {
    spotlight.classList.toggle('is-active', entry.isIntersecting);
  }, { threshold:0.1 });
  io.observe(hero);
})();

/* =========================================================
   PARALLAX on hero shapes (mouse move + scroll)
========================================================= */
(function initParallax(){
  const shapes = document.querySelectorAll('[data-parallax]');
  const hero = document.querySelector('.hero');
  if (!shapes.length || !hero) return;

  hero.addEventListener('pointermove', (e) => {
    const { innerWidth:w, innerHeight:h } = window;
    const px = (e.clientX / w) - 0.5;
    const py = (e.clientY / h) - 0.5;

    shapes.forEach((el) => {
      const depth = parseFloat(el.dataset.parallax) || 0.2;
      const x = px * depth * 60;
      const y = py * depth * 60;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  });

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    shapes.forEach((el) => {
      const depth = parseFloat(el.dataset.parallax) || 0.2;
      el.style.setProperty('--scrollShift', `${scrollY * depth * 0.2}px`);
    });
  }, { passive:true });
})();

/* =========================================================
   SCROLL REVEAL + COUNT-UP STATS (IntersectionObserver)
========================================================= */
(function initReveal(){
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.18 });
  revealEls.forEach((el) => io.observe(el));

  // Count-up numbers inside .stat
  const nums = document.querySelectorAll('.stat__num');
  const numIo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCount(entry.target);
      numIo.unobserve(entry.target);
    });
  }, { threshold:0.4 });
  nums.forEach((el) => numIo.observe(el));

  function animateCount(el){
    const target = parseInt(el.dataset.count, 10);
    const duration = 1600;
    const start = performance.now();

    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(target * eased);
      el.textContent = formatNumber(value);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = formatNumber(target);
    }
    requestAnimationFrame(tick);
  }

  function formatNumber(n){
    if (n >= 1000000000) return (n / 1000000000).toFixed(n % 1000000000 === 0 ? 0 : 1) + 'B+';
    if (n >= 1000) return n.toLocaleString();
    return String(n);
  }
})();

/* =========================================================
   FUNCTIONAL COUNTDOWN
========================================================= */
(function initCountdown(){
  const els = {
    days: document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    mins: document.getElementById('cd-mins'),
    secs: document.getElementById('cd-secs'),
  };
  if (!els.days) return;

  // Target: next Dec 12, 09:00 local time (rolls to next year automatically)
  function getTarget(){
    const now = new Date();
    let target = new Date(now.getFullYear(), 11, 12, 9, 0, 0);
    if (target < now) target = new Date(now.getFullYear() + 1, 11, 12, 9, 0, 0);
    return target;
  }
  const target = getTarget();

  function tick(){
    const now = new Date();
    let diff = Math.max(0, target - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * 1000 * 60 * 60;
    const mins = Math.floor(diff / (1000 * 60));
    diff -= mins * 1000 * 60;
    const secs = Math.floor(diff / 1000);

    els.days.textContent = String(days).padStart(2, '0');
    els.hours.textContent = String(hours).padStart(2, '0');
    els.mins.textContent = String(mins).padStart(2, '0');
    els.secs.textContent = String(secs).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);

  const remindBtn = document.getElementById('remindBtn');
  const note = document.getElementById('remindNote');
  remindBtn.addEventListener('click', () => {
    note.textContent = "You're on the list — we'll ping you before gates open.";
    remindBtn.textContent = 'Reminder set ✓';
    remindBtn.disabled = true;
  });
})();

/* =========================================================
   NEWSLETTER FORM (front-end only, no backend)
========================================================= */
(function initNewsletter(){
  const form = document.getElementById('newsletterForm');
  const note = document.getElementById('formNote');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    note.textContent = `Thanks — ${email} is on the list.`;
    form.reset();
  });
})();

/* =========================================================
   HERO CTA — smooth-scroll shortcut
========================================================= */
(function initCta(){
  const cta = document.getElementById('ctaPrimary');
  if (!cta) return;
  cta.addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({ behavior:'smooth' });
  });
})();

document.getElementById('year').textContent = new Date().getFullYear();
