const mainImg = document.querySelector(".main_img");
const slider = document.querySelector(".slider");
const topLeft = document.getElementById("#top_left");
const hamburger = document.querySelector(".hamburger");
const myName = document.querySelector(".my_name");

const tl = new TimelineMax();

tl.fromTo(
  mainImg,
  1,
  { height: "0%" },
  { height: "80%", ease: Power2.easeInOut }
)
  .fromTo(
    mainImg,
    1.2,
    { width: "100%" },
    { width: "80%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(hamburger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=1");
