"use strict";

// const num1 = Math.trunc(Math.random() * 100) + 1;
// const num2 = Math.trunc(Math.random() * 100) + 1;
// const num3 = Math.trunc(Math.random() * 10) + 1;
// const num4 = Math.trunc(Math.random() * 10) + 1;
// const num5 = Math.trunc(Math.random() * 10) + 1;
// const num6 = Math.trunc(Math.random() * 10) + 1;
// const submit = document.querySelector(".submit");

// const calc = function () {
//   num1 + num2;
//   return calc;
// };

// console.log(calc());
// const total = calc();

// submit.addEventListener("click", function (e) {
//   e.preventDefault();

//   // if total >= 100 console.log("helloWorld")
// });

const calcButton = document.querySelector(".calculate");
const lilSelectAll = document.querySelectorAll(".lilnumber");
const bigSelectAll = document.querySelectorAll(".bignumber");
const bigNums = [100, 75, 50, 25, 10];
const lilNums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const randomBig = bigNums[Math.floor(Math.random() * bigNums.length)];
const randomLittle = lilNums[Math.floor(Math.random() * lilNums.length)];

document.addEventListener("click", function (e) {
  e.preventDefault();
  bigSelectAll.textContent = randomBig;
  lilSelectAll.textContent = randomLittle;

  //Show in spans ".numbers" the big/lil nums they have to work with
  //Show the total they need to work out on the screen - needs html too
});

console.log(bigNums, lilNums, randomBig, randomLittle);
