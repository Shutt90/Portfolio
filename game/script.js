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

const bigNums = [100, 75, 50, 25, 10];
const lilNums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// const calculateBig = function (...bigNums) {

// }

document.querySelector(".calculate").addEventListener("click", function (e) {
  e.preventDefault();

  const randomBig0 = bigNums[Math.floor(Math.random() * bigNums.length)];
  const randomBig1 = bigNums[Math.floor(Math.random() * bigNums.length)];
  const randomLittle0 = lilNums[Math.floor(Math.random() * lilNums.length)];
  const randomLittle1 = lilNums[Math.floor(Math.random() * lilNums.length)];
  const randomLittle2 = lilNums[Math.floor(Math.random() * lilNums.length)];
  const randomLittle3 = lilNums[Math.floor(Math.random() * lilNums.length)];
  const lilArr = [randomLittle0, randomLittle1, randomLittle2, randomLittle3];
  const bigArr = [randomBig0, randomBig1];
  let final;

  function total(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
  }

  for (let i = 0; i < bigArr.length; i++) {
    document.querySelector(`.bignumber${[i]}`).textContent = bigArr[i];
  }
  for (let i = 0; i < lilArr.length; i++) {
    document.querySelector(`.lilnumber${[i]}`).textContent = lilArr[i];
  }

  document.querySelector(".final").textContent = total(100, 900);
  //Show in spans ".numbers" the big/lil nums they have to work with
  //Show the total they need to work out on the screen - needs html too
});
