"use strict";
const allDark = document.querySelectorAll(".dark");
const allPercent = document.querySelectorAll(".ability-details div p");
const allBase = document.querySelectorAll(".base");
const openMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const toggledNav = document.querySelector(".toggled-nav");
const overlay = document.querySelector(".overlay");
const allLinks = document.querySelectorAll(".toggled-nav li");
const header = document.querySelector("header");
//function to randomize the graph of activities
const randomHeight = function () {
  allDark.forEach((elem) => {
    const randomHeight = Math.random() * 70 + 30;
    elem.style.height = `${randomHeight}%`;
  });
};

//function to set the abilities graph\
const setChart = function () {
  allBase.forEach((elem, i) => {
    elem.style.width = `${Number.parseInt(allPercent[i].textContent)}%`;
  });
};
setChart();

randomHeight();

//on clicking the menu icon
openMenu.addEventListener("click", () => {
  openMenu.classList.add("rotate");
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
  toggledNav.classList.remove("slide-out_animation");
  toggledNav.classList.add("slide-in_animation");
  toggledNav.classList.toggle("visibleNav");
  overlay.classList.toggle("hidden");
});

//on  clicking the close menu icon
closeMenu.addEventListener("click", () => {
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");

  //change the animation settings
  toggledNav.classList.remove("slide-in_animation");
  toggledNav.classList.add("slide-out_animation");

  toggledNav.classList.toggle("visibleNav");

  //add overlay
  overlay.classList.toggle("hidden");
});

//on clicking the overlay
overlay.addEventListener("click", () => {
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");

  //change the animation settings
  toggledNav.classList.remove("slide-in_animation");
  toggledNav.classList.add("slide-out_animation");

  toggledNav.classList.toggle("visibleNav");

  //remove overlay
  overlay.classList.toggle("hidden");
});

//hover effect
header.addEventListener("mouseover", function (e) {
  const clicked = e.target;
  if (!clicked.closest("li")) return;
  allLinks.forEach((elem) => {
    elem.style.opacity = 0.8;
  });
  clicked.closest("li").style.opacity = 1;
});

//hover out effect
header.addEventListener("mouseout", function (e) {
  const clicked = e.target;
  if (!clicked.closest("li")) return;
  allLinks.forEach((elem) => {
    elem.style.opacity = 1;
  });
});
