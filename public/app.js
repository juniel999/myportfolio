const burgerMenu = document.querySelector(".navbar__burger");
const navbarMenus = document.querySelector(".navbar__menus");
const navItems = document.querySelectorAll(".navbar__items a");

//event listener for burger menu
burgerMenu.addEventListener("click", () => {
  navbarMenus.classList.toggle("active");

  navItems.forEach((item, index) => {
    if (navbarMenus.classList.contains("active")) {
      item.style.animation = `animationFadeLeft .5s ease forwards ${
        index / 7 + 0.5
      }s`;
    } else {
      item.style.animation = "";
    }
  });
});

//animate navbar menu in mobile
navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    navbarMenus.classList.toggle("active");
  });
});

//handles the opacity of navbar items for animation when mobile
window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;

  console.log(windowWidth);

  if (windowWidth < 768) {
    navItems.forEach((item) => {
      item.style.opacity = 0;
    });
  } else {
    navItems.forEach((item) => {
      item.style.opacity = 1;
    });
  }
});
