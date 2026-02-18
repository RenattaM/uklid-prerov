// Změna barvy navigace při scrollování
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.padding = "10px 0";
    navbar.style.background = "#ffffff";
  } else {
    navbar.style.padding = "20px 0";
  }
});

// Plynulé scrollování pro odkazy v menu
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
