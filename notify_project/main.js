import './style.css'
import 'tw-elements';

const btn = document.querySelector("button");
const newMessages = document.querySelectorAll(".new");
const notifnumber = document.querySelector(".number");
const dots = document.querySelectorAll("i");

btn.addEventListener("click", () => {
    newMessages.forEach(newMessage => {
        newMessage.classList.remove("bg-secondary-400");
    });

    notifnumber.textContent = 0;

    dots.forEach(dot => {
        dot.style.display = "none";
    });
});