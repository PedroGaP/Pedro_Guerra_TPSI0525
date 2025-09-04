const scrollBtn = document.querySelector(".scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

scrollBtn.addEventListener("mouseenter", () => {
  scrollBtn.children[0].className = "bi bi-mouse-fill fs-4";
});

scrollBtn.addEventListener("mouseleave", () => {
  scrollBtn.children[0].className = "bi bi-mouse fs-4";
});
