const navbar = document.querySelector("nav");
const scrollThreshold = 50; // jarak scroll (px) sebelum nav mulai mengecil

window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});