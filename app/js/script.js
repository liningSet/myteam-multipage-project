const burgerBtn = document.querySelector(".ham");
const overlay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".mobile-nav-container");
const navbar = document.querySelector(".nav-container");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");

  if (burgerBtn.classList.contains("active")) {
    document.body.style.overflowY = "hidden";
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto";
    mobileNav.style.transform = "translateX(0)";
  } else {
    document.body.style.overflowY = "visible";
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    mobileNav.style.transform = "translateX(100%)";
  }
});

overlay.addEventListener("click", () => {
  document.body.style.overflowY = "visible";
  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none";
  mobileNav.style.transform = "translateX(100%)";
  burgerBtn.classList.remove("active");
});

const options = {
  threshold: 0.9,
};

const observer = new IntersectionObserver(callback, options);

function callback(entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navbar.id = "fixed";
    } else {
      navbar.id = null;
    }
  });
}

if (document.body.contains(document.querySelector("header"))) {
  observer.observe(document.querySelector("header"));
} else {
  observer.observe(document.querySelector("section:nth-of-type(1)"));
}
