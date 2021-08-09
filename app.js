if (window.scrollY < window.innerHeight) {
  document.querySelector("#home").classList.add("highlight");
} else {
  document.querySelector("#home").classList.remove("highlight");
}

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home");
  const aboutMenu = document.querySelector("#projects");
  const servicesMenu = document.querySelector("#experience");
  let scrollPos = window.scrollY;

  // adds 'highlight' class to my menu items
  if (scrollPos < window.innerHeight - 50) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (scrollPos < 2 * window.innerHeight - 50) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  } else if (scrollPos < 3 * window.innerHeight - 50) {
    servicesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if ((elem && scrollPos < window.innerHeight) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);

//Cand apesi pe buttonsle de la navigatie te duce unde trebuie
const scrollToHomeeBTN = document.querySelector("#homee");
scrollToHomeeBTN.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
const scrollToHomeBTN = document.querySelector("#home");
scrollToHomeBTN.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
const scrollToProjectsBTN = document.querySelector("#projects");
scrollToProjectsBTN.addEventListener("click", function () {
  window.scrollTo({
    top: window.innerHeight - 30,
    left: 0,
    behavior: "smooth",
  });
});
const scrollToExperienceBTN = document.querySelector("#experience");
scrollToExperienceBTN.addEventListener("click", function () {
  window.scrollTo({
    top: 2 * window.innerHeight,
    left: 0,
    behavior: "smooth",
  });
});
const scrollToProjectssBTN = document.querySelector(".projects");
scrollToProjectssBTN.addEventListener("click", function () {
  window.scrollTo({
    top: window.innerHeight - 30,
    left: 0,
    behavior: "smooth",
  });
});
const scrollToExperienceeBTN = document.querySelector(".experience");
scrollToExperienceeBTN.addEventListener("click", function () {
  window.scrollTo({
    top: 2 * window.innerHeight,
    left: 0,
    behavior: "smooth",
  });
});

//Animations
const topnav = document.querySelector(".topnav");
const tops = document.querySelector(".mainPage");
const numeba = document.querySelector(".name");
const homeba = document.querySelector("#home");
const tl = new TimelineMax();
tl.fromTo(
  tops,
  3,
  { opacity: "0" },
  { opacity: "100", ease: Power2.easeInOut },
  "-=4"
)
  .fromTo(
    topnav,
    3,
    { opacity: "0" },
    { opacity: "100", ease: Power2.easeInOut },
    "-=3.5"
  )
  .fromTo(
    numeba,
    0.5,
    { scale: "1.2" },
    { scale: "1", ease: Power2.easeInOut },
    "-=3.3"
  )
  .fromTo(
    homeba,
    0.5,
    { scale: ".9" },
    { scale: "1", ease: Power2.easeInOut },
    "-=3.3"
  );

var para = document.createElement("h3"); // Create a <h3> element
var t = document.createTextNode("Click to see more."); // Create a text node
para.appendChild(t);
para.classList.add("moreInfo"); //Add .moreInfo class

let P1 = document.querySelector(".firstProject");
let P2 = document.querySelector(".secondProject");
let E1 = document.querySelector(".firstExperience");
let E2 = document.querySelector(".secondExperience");

P1.addEventListener("mouseover", function (event) {
  P1.appendChild(para), false;
});
P1.addEventListener("mouseout", function (event) {
  P1.removeChild(para), false;
});
P2.addEventListener("mouseover", function (event) {
  P2.appendChild(para), false;
});
P2.addEventListener("mouseout", function (event) {
  P2.removeChild(para), false;
});
E1.addEventListener("mouseover", function (event) {
  E1.appendChild(para), false;
});
E1.addEventListener("mouseout", function (event) {
  E1.removeChild(para), false;
});
E2.addEventListener("mouseover", function (event) {
  E2.appendChild(para), false;
});
E2.addEventListener("mouseout", function (event) {
  E2.removeChild(para), false;
});
