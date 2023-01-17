const socials = document.querySelector(".open-share");
const shareBtn = document.getElementById("share");
const removeBtn = document.getElementById("remove-share");

shareBtn.addEventListener("click",() => {
     socials.classList.add("clicked");
});

removeBtn.addEventListener("click",() => {
     socials.classList.remove("clicked");
});