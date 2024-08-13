function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "../img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "../img/close_white_36dp.svg";
  }
}

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const mobileMenu = document.querySelector(".mobile-menu");

btn.onclick = function () {
  this.classList.toggle("active");
  container.classList.toggle("active");
  header.classList.toggle("active");
  footer.classList.toggle("dark-text");
  mobileMenu.classList.toggle("active");

  var elementIcon = document.getElementsByClassName("header");
  for (let i = 0; i < elementIcon.length; i++) {
    elementIcon[i].classList.toggle("mystyle");
  }

  var element = document.getElementsByClassName("desenvolvedor");
  var selection = element[0];
  selection.classList.toggle("mystyle");

  var elementIcon = document.getElementsByClassName("contato-icone");
  for (let i = 0; i < elementIcon.length; i++) {
    elementIcon[i].classList.toggle("mystyle");
  }

  var elementIcon = document.getElementsByClassName("sobre-texto");
  for (let i = 0; i < elementIcon.length; i++) {
    elementIcon[i].classList.toggle("mystyle");
  }

  var elementIcon = document.getElementsByClassName("footer");
  for (let i = 0; i < elementIcon.length; i++) {
    elementIcon[i].classList.toggle("mystyle");
  }
};

const menuLinks = document.querySelectorAll(".nav-bar a");

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menuLinks.forEach((link) => link.classList.remove("active"));

    this.classList.add("active");
  });
});

const projeto2 = document.querySelector(".projeto2");

const ligarEDesligarADiv = function () {
  projeto2.style.display === "flex"
    ? (projeto2.style.display = "none")
    : (projeto2.style.display = "flex");
};
