function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Load saved preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

// Toggle on click
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Save preference
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleButton.innerText = "☀️ Toggle Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleButton.innerText = "🌙 Toggle Dark Mode";
  }
});