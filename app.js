// app.js — Aurelle Care & Recovery
document.getElementById('year').textContent = new Date().getFullYear();

/* Theme toggle */
const themeBtn = document.getElementById('themeBtn');
const savedTheme = localStorage.getItem('aurelle-theme');
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = current ? (current === 'dark' ? 'light' : 'dark') : (prefersDark ? 'light' : 'dark');
    document.documentElement.dataset.theme = next;
    localStorage.setItem('aurelle-theme', next);
  });
}