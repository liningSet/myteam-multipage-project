const memberBtns = document.querySelectorAll(".member-btn");

memberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("clicked");

    let front = btn.parentElement.children[0];
    let back = btn.parentElement.children[1];

    if (btn.classList.contains("clicked")) {
      btn.firstChild.className = "fas fa-times";
      front.style.opacity = "0";
      back.style.opacity = "1";
      back.style.pointerEvents = "auto";
      front.style.pointerEvents = "none";
    } else {
      btn.firstChild.className = "fas fa-plus";
      front.style.opacity = "1";
      back.style.opacity = "0";
      back.style.pointerEvents = "none";
      front.style.pointerEvents = "auto";
    }
  });
});
