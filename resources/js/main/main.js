const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function isElementAtTop(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.top < 50; 
}

function highlightCurrentLink() {
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    const sectionId = link.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);

    if (section && isElementAtTop(section)) {
      links.forEach(link => link.classList.remove('active'));

      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightCurrentLink);
