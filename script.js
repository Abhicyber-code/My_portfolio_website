var typeData = new Typed(".role", {
  strings: [
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Coder",
    "C++ Developer",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});
AOS.init(); // Initialize AOS on page load
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
const contactForm = document.querySelector(".contact-form");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");
});

function closeMobileNav() {
  mobileNav.classList.remove("active");
  hamburger.classList.remove("active");
  overlay.classList.remove("active");
}

overlay.addEventListener("click", closeMobileNav);
