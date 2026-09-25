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


// SEANDAINYA V2
const body = document.body
const menu = document.querySelector("#menu")
menu.style.marginTop = "30px"

const menuKopi = [
  {
    nama : "Tiramisu",
    harga: 10000
  },
  {
    nama : "Salted Caramel",
    harga: 10000
  },
  {
    nama : "Kopi Hitam",
    harga: 10000
  },
  {
    nama : "Gula Aren",
    harga: 10000
  }
]

const cari = document.querySelector("#search")
const hasil = document.querySelector("#hasil")
cari.style.marginTop = "110px"
console.log(cari)

cari.addEventListener("input",()=>{
  const keyword = cari.value.toLowerCase()

  const varian = menuKopi.filter((item)=>{
    menu.textContent = ""
    return item.nama.toLowerCase().includes(keyword)
  })

  const namaVarian = varian.map((item)=>{
    return item.nama
  })
  
  varian.forEach((item)=>{
    const menuItem = document.createElement("li")
    const tombol = document.createElement("button")
    tombol.style.padding = "5px 5px"
    tombol.textContent = "+"
    menuItem.textContent = item.nama + " - Rp" + item.harga
    
    menuItem.append(tombol)
    menu.append(menuItem)
    console.log(item)
  })
  hasil.textContent = namaVarian
  console.log(varian)
})

