const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");


navToggle.addEventListener("click", () => {

// before we switch the attribute on click of the button we are checking these things..we are toggling the data-visible on the primary nav on click and when it has the attribute the aria-expanded on navToggle is set to true and when it doesnt have the attribute the aria-expanded is set to false
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
});