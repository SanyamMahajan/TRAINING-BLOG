// script.js

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedTheme = localStorage.getItem("theme");

  // Apply saved or preferred theme
  if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
    document.body.classList.add("dark");
    toggleBtn.innerText = "☀️";
  } else {
    toggleBtn.innerText = "🌓";
  }

  // Toggle theme on button click
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.innerText = isDark ? "☀️" : "🌓";
  });
});
