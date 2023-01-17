let email = document.querySelector(".email");
let span = document.querySelector(".span");

email.onkeydown = function(){
     const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-ZA-Z]){2,8}$/;
     const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-ZA-Z]){2,3}\.[a-zA-Z]{1,3}$/;

     if(regex.test(email.value) || regexo.test(email.value)){
          span.innerText = "Your email is valid";
          span.style.color = "lime";
     }
     else{
          span.innerText = "Your email is inValid";
          span.style.color = "red";          
     }
}