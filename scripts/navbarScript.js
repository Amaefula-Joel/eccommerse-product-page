const open_btn = document.querySelector(".menu-open-btn");
const close_btn = document.querySelector(".menu-close-btn");

const primary_nav = document.querySelector("#primary-nav");

const cart_btn = document.querySelector(".cart-btn");

const cart = document.querySelector("#cart");

/* open nav btn */
open_btn.addEventListener("click", () => {
  open_btn.setAttribute("aria-expanded", "true");
  close_btn.setAttribute("aria-expanded", "true");
  primary_nav.classList.add("opened");

  cart.removeAttribute("data-visible");
  cart_btn.setAttribute("aria-expanded", false);
});

/* close nav btn */
close_btn.addEventListener("click", () => {
  open_btn.setAttribute("aria-expanded", "false");
  close_btn.setAttribute("aria-expanded", "false");
  primary_nav.classList.remove("opened");
});

/* cart btn */
cart_btn.addEventListener("click", () => {
  cart.hasAttribute("data-visible")
    ? cart_btn.setAttribute("aria-expanded", false)
    : cart_btn.setAttribute("aria-expanded", true);
  cart.toggleAttribute("data-visible");

  close_btn.click();
});