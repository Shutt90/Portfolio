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
  document.querySelector(".main_img").src = "project01.png";
  document.querySelector(".my_name").classList.add("my_name_toggle");
});
