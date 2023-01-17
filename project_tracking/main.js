import './style.css'
import 'tw-elements';

const navBtn = document.querySelector("#menu");
const closeBtn = document.querySelector("#menu2");
const menubar = document.querySelector('[role="menuBar"]');

navBtn.addEventListener("click",() => {
    const IsExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
    navBtn.setAttribute('aria-expanded', !IsExpanded);
    menubar.classList.toggle("hidden");
    menubar.classList.toggle("flex");
    navBtn.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
});

closeBtn.addEventListener("click",() => {
    const IsExpanded = JSON.parse(closeBtn.getAttribute('aria-expanded'));
    closeBtn.setAttribute('aria-expanded', !IsExpanded);
    menubar.classList.toggle("hidden");
    menubar.classList.toggle("flex");
    navBtn.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
});