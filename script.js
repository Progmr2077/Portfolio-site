// Theme toggle with persistence
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

function setThemeFromStorage() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = saved ? saved === "dark" : prefersDark;

  body.classList.toggle("dark-mode", dark);
  toggleButton.textContent = dark ? "☀️ Light" : "🌙 Dark";
}
setThemeFromStorage();

toggleButton.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggleButton.textContent = isDark ? "☀️ Light" : "🌙 Dark";
});

// Live date + time clock
function updateClock() {
  const el = document.getElementById("clock");
  if (!el) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString(undefined, {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });
  const timeStr = now.toLocaleTimeString(undefined, {
    hour: "2-digit", minute: "2-digit", second: "2-digit"
  });
  el.textContent = `${dateStr} – ${timeStr}`;
}
updateClock();
setInterval(updateClock, 1000);

// Contact form (client-side demo)
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    statusEl.textContent = "Thanks! Your message has been captured (demo).";
    statusEl.className = "text-success";
    form.reset();
  });
}