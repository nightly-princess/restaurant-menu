const themeToggle = document.getElementById("theme-toggle");

function getPreferredTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) {
    return saved;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function updateThemeToggleState(theme) {
  themeToggle.setAttribute("aria-pressed", theme === "dark");
}

const savedTheme = getPreferredTheme();
document.documentElement.setAttribute("data-theme", savedTheme);
updateThemeToggleState(savedTheme);

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (!localStorage.getItem("theme")) {
    const newTheme = e.matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    updateThemeToggleState(newTheme);
  }
});

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeToggleState(next);
});