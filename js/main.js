const menuBtn = document.querySelector(".menu__btn");
const menuContent = document.querySelector(".aside__container");
const menuAside = document.querySelector(".aside");
const menuBtnClose = document.querySelector(".btn__close");

menuBtn.addEventListener("click", () => {
  menuContent.classList.add("aside__container_mobil");
  menuAside.classList.add("aside__mobil");
});
menuContent.addEventListener("click", closeMenu);
menuBtnClose.addEventListener("click", closeMenu);
menuAside.addEventListener("click", (e) => {
  e.stopPropagation();
});

function closeMenu() {
  setTimeout(() => {
    menuContent.classList.remove("aside__container_mobil");
  }, 500);
  menuAside.classList.remove("aside__mobil");
}
