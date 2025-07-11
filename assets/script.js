document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  // Apply saved or preferred theme
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark");
    if (toggleBtn) toggleBtn.innerText = "☀️";
  } else {
    if (toggleBtn) toggleBtn.innerText = "🌓";
  }

  // Toggle theme on button click
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      toggleBtn.innerText = isDark ? "☀️" : "🌓";
    });
  }

  // Toggle mobile nav menu
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      document.body.classList.toggle("nav-open");

      navToggle.innerText = navLinks.classList.contains("open") ? "✖" : "☰";
    });
  }

  // Scroll-triggered fade-in
  const faders = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  faders.forEach((fader) => observer.observe(fader));
});

// Scroll progress bar update
    window.onscroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById("progressBar").style.width = scrolled + "%";

      // Back to top button toggle
      const backToTopBtn = document.getElementById("backToTopBtn");
      if (winScroll > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    };

    document.getElementById("backToTopBtn").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
