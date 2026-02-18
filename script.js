// Mobilní menu toggle
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
});

// Zavření menu po kliknutí na odkaz
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    menuLinks.classList.remove("active");
  });
});

// Plynulé scrollování
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
