import './style.css'

setInterval(() => {

  function countDown(){
    const endDate = new Date("November 04, 2022 00:00:00").getTime();
    const now = new Date().getTime();
  
    const diff = endDate - now;

    if(diff < 0){
      alert("The date has already passed !");
    }

    // these are the values of how many of milliseconds make one of them like 10000 ms = 1s and so on cz timestamp is in milliseconds
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
  
    let timeDays = Math.floor(diff / days);
    timeDays = timeDays < 10 ? "0" + timeDays : timeDays;

    // let finalDays = 0;
    // setInterval(() => {
    //   document.getElementById("days").innerHTML = finalDays;

    //   if(finalDays === timeDays){
    //     clearInterval();
    //   }else{
    //     finalDays++;
    //   }
    // }, 100);

    let timeHours = Math.floor((diff % days) / hours);
    timeHours = timeHours < 10 ? "0" + timeHours : timeHours;

    // let finalHours = 0;
    // setInterval(() => {
    //   finalHours = finalHours < 10 ? "0" + finalHours : finalHours;
    //   document.getElementById("hrs").innerHTML = finalHours;

    //   if(finalHours === timeHours){
    //     clearInterval();
    //   }else{
    //     finalHours++;
    //   }
    // }, 100);
  
    let timeMinutes = Math.floor((diff % hours) / minutes);
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
  
    let timeSeconds = Math.floor((diff % minutes) / seconds);
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

    document.getElementById("days").innerHTML = timeDays;
    document.getElementById("hrs").innerHTML = timeHours;
    document.getElementById("mins").innerHTML = timeMinutes;
    document.getElementById("secs").innerHTML = timeSeconds;
  }

  countDown();

}, 100);