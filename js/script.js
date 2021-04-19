// Make Header Sicky
window.onscroll = function () {
  let header = document.querySelector("header");
  if (window.scrollY > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

// Toggle Menu
let navBar = document.querySelector("nav");
let toggleBtn = document.querySelector(".menu-btn");
let toggleI = document.querySelector(".menu-btn i");

toggleBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
  // chane icon
  toggleI.classList.toggle("active");
});
