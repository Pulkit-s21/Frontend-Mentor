const btn = document.getElementById("btn");
const id = document.querySelector(".card-header");
const advice = document.querySelector(".card-text");

btn.addEventListener("click",fetchAdvice);

async function fetchAdvice(){
     const res = await fetch("https://api.adviceslip.com/advice");
     const data = await res.json();
   
     id.textContent = `Advice #${data.slip.id}`;
     advice.textContent = `"${data.slip.advice}"`;
}
   
fetchAdvice();