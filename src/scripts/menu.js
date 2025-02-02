const open_menu_btn = document.querySelector(".open_menu_btn");
const close_menu_btn = document.querySelector(".close_menu_btn");

open_menu_btn.addEventListener("click", () => {
  document.querySelector(".menu_mobile").style.right = "0px";

});

close_menu_btn.addEventListener("click", () => {
  document.querySelector(".menu_mobile").style.right = "-400px";
});
