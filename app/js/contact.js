const form = document.querySelector(".contact-form");

window.onload = () => {
  for (let cont of form.children) {
    cont.children[0].value = null;
  }
};

form.addEventListener("submit", (e) => {
  let fieldContainers = e.target.children;

  for (let cont of fieldContainers) {
    if (!cont.children[0].validity.valid) {
      e.preventDefault();
      cont.classList.add("error");
    }
    cont.addEventListener("input", () => {
      if (cont.children[0].validity.valid) {
        cont.classList.remove("error");
      }
    });
    //console.log(cont.children[0]);
  }

  console.log(fieldContainers);
});
