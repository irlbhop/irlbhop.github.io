//  var containers = document.getElementById("container");

// // var containers = document.querySelector("")

// window.addEventListener("resize", function()
// { 
//   containers.style.width = window.innerWidth / 10 + "px";
// })

var nav02 = document.getElementById("nav02");
var nav03 = document.getElementById("nav03");
var nav04 = document.getElementById("nav04");
var nav05 = document.getElementById("nav05");

window.addEventListener("load", function()
{
  nav03.style.width = (window.innerWidth - 98) * 0.4 + "px";
    nav02.style.width = (window.innerWidth - 98) * 0.15 + "px";
    nav04.style.width = (window.innerWidth - 98) * 0.15 + "px";
    nav05.style.width = (window.innerWidth - 98) * 0.15+ "px";
    nav01.style.width = (window.innerWidth - 98) * 0.15 + "px";
  nav02.style.left = (window.innerWidth - 98) * 0.15 + 20 + "px";
  nav03.style.left = (window.innerWidth - 98) * 0.30 + 40 + "px";
  nav04.style.left = (window.innerWidth - 98) * 0.70 + 60 + "px";
  nav05.style.left = (window.innerWidth - 98) * 0.85 + 80 + "px";
 
  // nav03.style.left = "30%";
  // nav03.style.left = parseFloat(window.getComputedStyle(nav03).getPropertyValue("left")) + 40 + "px";
  // nav04.style.left = "70%";
  // nav04.style.left = parseFloat(window.getComputedStyle(nav04).getPropertyValue("left")) + 60 + "px";
  // nav05.style.left = "85%";
  // nav05.style.left = parseFloat(window.getComputedStyle(nav05).getPropertyValue("left")) + 80 + "px";
})

window.addEventListener("resize", function()
{
     nav03.style.width = (window.innerWidth - 98) * 0.4 + "px";
    nav02.style.width = (window.innerWidth - 98) * 0.15 + "px";
    nav04.style.width = (window.innerWidth - 98) * 0.15 + "px";
    nav05.style.width = (window.innerWidth - 98) * 0.15+ "px";
    nav01.style.width = (window.innerWidth - 98) * 0.15 + "px";
  nav02.style.left = (window.innerWidth - 98) * 0.15 + 20 + "px";
  nav03.style.left = (window.innerWidth - 98) * 0.30 + 40 + "px";
  nav04.style.left = (window.innerWidth - 98) * 0.70 + 60 + "px";
  nav05.style.left = (window.innerWidth - 98) * 0.85 + 80 + "px";
})