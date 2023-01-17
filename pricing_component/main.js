import './style.css'
import 'tw-elements';

const valueNum = document.querySelectorAll(".value");
const switchBtn = document.querySelector(".switch");

switchBtn.addEventListener("click",() => {
    valueNum.forEach(value=>{
        value.classList.toggle("hidden");
    });
})