"use strict";
import scrollEffect from "./scrollEffectSection.js";
import scrollToView from "./smoothScrool.js";
import lazyLoading from "./lazyLoadingImage.js";

let links = document.querySelectorAll(".head-link");
let targets = document.querySelectorAll(".landmark-count");
let gridColom = document.querySelectorAll(".gird-colm");
let imageToHight = document.querySelectorAll(".our-mission--img");

// * ADDING SCROLL EFFECT ON LANDMARK SECTION AND HEIGHT & TEXT OPACITY EFFECT ON SECTION ADVANDTAGES
scrollEffect(targets, "tar");
scrollEffect(gridColom, "gri");
scrollEffect(imageToHight, "gri");

// * SCROLL EFFECT ON CLICK

links.forEach((link) => {
  let elemTo = document.getElementById(`${link.dataset.link}`);
  link.addEventListener("click", () => {
    scrollToView(elemTo);
    console.log("hello");
  });
});

// * lazy loading image
// lazyLoading();
