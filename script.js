const toggle = document.querySelector(".theme-toggle");
const icon = toggle ? toggle.querySelector("i") : null;
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

const applyTheme = (theme) => {
  document.body.classList.toggle("dark", theme === "dark");
  if (icon) {
    icon.classList.toggle("ri-sun-line", theme === "dark");
    icon.classList.toggle("ri-moon-line", theme !== "dark");
  }
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    console.warn("Theme preference could not be saved.");
  }
};

const storedTheme = (() => {
  try {
    return localStorage.getItem("theme");
  } catch (error) {
    return null;
  }
})();

applyTheme(storedTheme || (prefersDark ? "dark" : "light"));

toggle?.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
  applyTheme(nextTheme);
});
