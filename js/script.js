// Toggle Class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika produk di klik
document.querySelector("#Produk").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar side bar untuk menghilangkan nav
const Produk = document.querySelector("#Produk");

document.addEventListener("click", function (e) {
  if (!Produk.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
