"use strict";
// finding element
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const hamClose = document.querySelector(".hamberger-close");
const navMenu = document.querySelector(".nav-list");
const header = document.querySelector(".header");




openBtn.addEventListener("click",function(){
navMenu.classList.add("open-menu");
header.classList.add("open-menu");
hamClose.classList.add("open-menu");

})
closeBtn.addEventListener("click",function(){
navMenu.classList.remove("open-menu");
header.classList.remove("open-menu");
hamClose.classList.remove("open-menu");

})