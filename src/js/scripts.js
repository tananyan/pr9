const burger = document.querySelector(".burger"),
  menu = document.querySelector(".menu"),
  exit = document.querySelector(".menu__exit"),
  overl = document.querySelector(".menu__overlay");

// Кнопка меню
burger.addEventListener("click", () => {
  menu.classList.add("active");
});
exit.addEventListener("click", () => {
  menu.classList.remove("active");
});
overl.addEventListener("click", () => {
  menu.classList.remove("active");
});

