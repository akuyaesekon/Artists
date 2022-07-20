

//select for menu
const menuBar = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");

//select for menu image
const catagory = document.querySelectorAll(".catagory input");
const cataImg = document.querySelector("#c-img");

// select for connect section with nav item
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

// event listener for toggle menu
menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  menuBar.classList.toggle("active");
  navbar.classList.toggle("active");
});

// scroll event
document.addEventListener("scroll", () => {
  menuBar.classList.remove("fa-times");
  menuBar.classList.remove("active");
  navbar.classList.remove("active");

  // conect With nav link
  connectSecWithNavLink();
});

// controlling menu image
catagory.forEach((element) => {
  element.addEventListener("click", () => {
    catagory.forEach((ele) => {
      ele.classList.remove("active");
    });

    let values = element.value;
    element.classList.add("active");
    cataImg.src = `./images/menu-${values}.jpg`;
  });
});

// handeling scroll event and mar nav item
const connectSecWithNavLink = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    let linkAttribute = link.attributes.href.value;
    link.classList.remove("active");

    if (linkAttribute === `#${current}`) {
      link.classList.add("active");
    }
  });
};

