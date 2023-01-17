import './style.css'
import 'tw-elements';

const label = document.querySelector(".form-check-label");
const label2 = document.querySelector(".form-check-label2");
const input = document.querySelector(".form-check-input");

input.addEventListener("click",() => {
    label.classList.toggle("hidden");
    label2.classList.toggle("hidden");
});

// Theme Switcher 

// switch
const switcher = document.querySelector(".form-check-input");

// Theme vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Initial theme check
const themeCheck = () => {
    if (userTheme === 'dark' || (systemTheme && userTheme)){
        document.documentElement.classList.add("dark");
        return;
    }
}

// Manual switch
const themeSwtch = () => {
    if (document.documentElement.classList.contains("dark")){
      document.documentElement.classList.remove("dark");
      return;
    }
      document.documentElement.classList.add("dark");
}

// call theme switch on switch toggle
switcher.addEventListener("click",() => {
    themeSwtch();
})

// invoke them on initial load
themeCheck();