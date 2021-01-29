const body = document.querySelector("body");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");

hamburgerBtn.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    body.classList.remove("lock-scroll");
    header.classList.remove("open");
    fadeElements.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("lock-scroll");
    header.classList.add("open");
    fadeElements.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
