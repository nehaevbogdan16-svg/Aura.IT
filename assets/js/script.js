console.log("Aura IT loaded");

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.style.background = window.scrollY > 50
    ? "rgba(7,10,18,0.9)"
    : "rgba(7,10,18,0.6)";
});