// scroll nav
const navbar = document.querySelector("nav");
const scrollThreshold = 50; // jarak scroll (px) sebelum nav mulai mengecil

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// scroll nav end

// transform
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 },
);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});
// transform end


// animasi gambar
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

document.addEventListener("scroll", () => {
  let value = window.scrollY;

  two.style.right = -value * 0.8 + "px";
  three.style.bottom = -value * 0.4 + "px";
  four.style.bottom = -value * 0.6 + "px";
});
// animasi gambar end
