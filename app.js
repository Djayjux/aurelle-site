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
// app.js — Add this to the bottom of the file

/* Age Validation for Caregiver Application */
document.addEventListener('DOMContentLoaded', () => {
  const ageInput = document.getElementById('applicantAge');
  
  if (ageInput) {
    const waBtn = document.getElementById('waApplyBtn');
    const emailBtn = document.getElementById('emailApplyBtn');

    function checkAge(e) {
      const age = parseInt(ageInput.value, 10);
      if (isNaN(age) || age < 18) {
        e.preventDefault();
        alert("You must be 18 years or older to apply as a caregiver.");
      }
    }

    if (waBtn) waBtn.addEventListener('click', checkAge);
    if (emailBtn) emailBtn.addEventListener('click', checkAge);
  }
});
}
