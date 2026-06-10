const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll(".navbar a");
const quoteForm = document.querySelector("#quoteForm");
const year = document.querySelector("#year");

const whatsappNumber = "919870536533";

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = [
    "Hello VSR INFINITY TRANSPORT, I need transport service.",
    `Name: ${document.querySelector("#name").value || "-"}`,
    `Phone: ${document.querySelector("#phone").value || "-"}`,
    `Pickup: ${document.querySelector("#pickup").value || "-"}`,
    `Drop: ${document.querySelector("#drop").value || "-"}`,
    `Vehicle: ${document.querySelector("#vehicle").value || "-"}`,
    `Pickup Date: ${document.querySelector("#pickupDate").value || "-"}`,
    `Pickup Time: ${document.querySelector("#pickupTime").value || "-"}`,
    `Goods: ${document.querySelector("#goods").value || "-"}`,
  ].join("\n");

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
});

const sections = [...document.querySelectorAll("section[id]")];

window.addEventListener("scroll", () => {
  const current = sections
    .filter((section) => section.getBoundingClientRect().top <= 130)
    .pop();

  if (!current) return;

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
  });
});
