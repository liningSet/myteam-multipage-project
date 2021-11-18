const burgerBtn = document.querySelector(".ham");
const overlay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".mobile-nav-container");
const navbar = document.querySelector(".nav-container");

function processClickStyles(
  bodyOVERFLOW,
  overlayOPACITY,
  overlayPE,
  mobileNavTRANSFORM
) {
  document.body.style.overflowY = bodyOVERFLOW;
  overlay.style.opacity = overlayOPACITY;
  overlay.style.pointerEvents = overlayPE;
  mobileNav.style.transform = `translateX(${mobileNavTRANSFORM})`;
}

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");

  if (burgerBtn.classList.contains("active")) {
    processClickStyles("hidden", 1, "auto", 0);
  } else {
    processClickStyles("visible", 0, "none", "100%");
  }
});

overlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay")) {
    processClickStyles("visible", 0, "none", "100%");
    burgerBtn.classList.remove("active");
  }
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
