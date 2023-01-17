const span = document.querySelector("span");
const ratings = document.querySelectorAll(".btn");
const btnSubmit = document.querySelector(".btn-submit");
const rateAgain = document.querySelector(".rate-again");

ratings.forEach((rateBtn) => {
     rateBtn.addEventListener("click", (e) => {
          const rating = e.target.textContent;
          span.textContent = rating;
          rateBtn.classList.toggle("btn-secondary");
          rateBtn.classList.toggle("selected");
     });
});

btnSubmit.addEventListener("click", () => {
     document.querySelector(".card:first-child").classList.add("hidden");
     document.querySelector(".card:nth-child(2)").classList.remove("hidden");
});

rateAgain.addEventListener("click", () => {
     document.querySelector(".card:first-child").classList.remove("hidden");
     document.querySelector(".card:nth-child(2)").classList.add("hidden");
});