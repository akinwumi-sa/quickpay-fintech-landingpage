"use strict";

const navMenuBtn = document.querySelector(".nav-menu-btn");
const navMenu = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".close-btn");
const inpuOut = document.querySelector(".input-out");

navMenuBtn.addEventListener("click", function(e){
    navMenu.classList.replace("-left-full", "left-0")
})

closeBtn.addEventListener("click", function(e){
    navMenu.classList.replace("left-0", "-left-full")
})

inpuOut.addEventListener("click", function(e) {
    inpuOut.classList.add("outline-none")
});