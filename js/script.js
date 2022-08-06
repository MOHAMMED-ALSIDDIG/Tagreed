const bars = document.querySelector(".bars");
const hed = document.querySelector(".hed");
bars.addEventListener("click", mob);
function mob() {
  bars.classList.toggle("active");
  hed.classList.toggle("active");
}
// close Menu
// const navlink = document.querySelectorAll(".nav-link");
// navlink.forEach((n) => n.addEventListener("click", closeMenu));
// function closeMenu() {
//   barmenu.classList.remove("active");
//   navmenu.classList.remove("active");
// }
