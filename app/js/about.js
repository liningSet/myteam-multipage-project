const memberBtns = document.querySelectorAll(".member-btn");

memberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("clicked");

    if (btn.classList.contains("clicked")) {
      btn.firstChild.className = "fas fa-times";
    } else {
      btn.firstChild.className = "fas fa-plus";
    }
  });
});
