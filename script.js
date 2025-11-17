// -------------------------------
// Typewriter Effect
// -------------------------------
// -----------------------------------
// Smooth Typewriter Effect (fixed)
// -----------------------------------
const subtitle = document.getElementById("subtitle");

const messages = [
  "Software Developer",
  "Problem Solver",
  "Web & Game Programmer",
  "Tech Enthusiast"
];

let index = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const current = messages[index];

  // Typing forward
  if (!deleting) {
    subtitle.textContent = current.slice(0, charIndex + 1);
    charIndex++;

    // Word finished typing
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1000); // pause before deleting
      return;
    }
  }

  // Deleting backwards
  else {
    subtitle.textContent = current.slice(0, charIndex - 1);
    charIndex--;

    // Finished deleting the entire word
    if (charIndex === 0) {
      deleting = false;
      index = (index + 1) % messages.length;
    }
  }

  setTimeout(type, deleting ? 60 : 80);
}

type();


// -------------------------------
// Scroll Reveal Animations
// -------------------------------
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));


// -------------------------------
// Dark Mode Toggle
// -------------------------------
const toggle = document.querySelector("[data-theme-toggle]");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggle.textContent = "☀️";
}

// Toggle click event
toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const dark = body.classList.contains("dark-mode");
  toggle.textContent = dark ? "☀️" : "🌙";
  localStorage.setItem("theme", dark ? "dark" : "light");
});