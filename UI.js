"use strict";

// const projectEl = document.querySelector(".pop");
// const overlay = document.querySelector(".overlay");
// const projectKey = document.querySelector(".project01");

// const openPop = function () {
//   projectEl.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closePop = function () {
//   projectEl.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// projectKey.addEventListener("click", openPop);
// overlay.addEventListener("click", closePop);

document.querySelector(".project01").addEventListener("click", function () {
  document.querySelector(".main_img").src = "FuzeCropped.png";
  document.querySelector(".my_name").classList.add("my_name_toggle");
  document.querySelector(".main_head").classList.remove("main_head_toggle");
});

document.querySelector(".project02").addEventListener("click", function () {
  document.querySelector(".main_img").src = "bccalc.png";
  document.querySelector(".main_head").classList.add("main_head_toggle");
  document.querySelector(".my_name").classList.remove("my_name_toggle");
});

document.querySelector(".project").addEventListener("click", function () {
  document.querySelector(".main_img").src = "countdown.png";
  document.querySelector(".main_head").classList.add("main_head_toggle");
  document.querySelector(".my_name").classList.remove("my_name_toggle");
});
