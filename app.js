const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const amPmElem = document.getElementById("amPm");

setInterval(function () {
  const date = new Date();
  let hours = date.getHours();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let amPm = "AM";
  if(hours > 11) 
  {
    amPm = " PM";
    if(hours > 12) 
    {
        hours -= 12;
    }
  }
  if( hours>=0 && hours<=9)
  {
    hours = "0"+hours;
  }
  if( minutes>=0 && minutes<=9)
  {
    minutes = "0"+minutes;
  }
  if( seconds>=0 && seconds<=9)
  {
    seconds = "0"+seconds;
  }
  hoursElem.innerText = hours;
  minutesElem.innerText = minutes;
  secondsElem.innerText = seconds;
  amPmElem.innerText = amPm;
}, 1000);