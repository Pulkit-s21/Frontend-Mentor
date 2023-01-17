import './style.css'

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuBar = document.querySelector("[role='menuBar']");

openMenu.addEventListener("click",()=>{
    const isExpanded = JSON.parse(openMenu.getAttribute("aria-expanded"));
    openMenu.setAttribute("aria-expanded",!isExpanded);
    menuBar.classList.toggle("hidden");
    menuBar.classList.toggle("flex");
    openMenu.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
});

closeMenu.addEventListener("click",()=>{
    const isExpanded = JSON.parse(closeMenu.getAttribute("aria-expanded"));
    closeMenu.setAttribute("aria-expanded",!isExpanded);
    menuBar.classList.toggle("hidden");
    menuBar.classList.toggle("flex");
    closeMenu.classList.toggle("hidden");
    openMenu.classList.toggle("hidden");
});