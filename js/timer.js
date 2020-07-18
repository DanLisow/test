function getTimeRemaining(endtime) {
  let time = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / 1000 / 60) % 60);
  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  return {
    total: time,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let hoursSpan = clock.querySelector(".hours");
  let minutesSpan = clock.querySelector(".minutes");
  let secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    let time = getTimeRemaining(endtime);

    hoursSpan.innerHTML = ("0" + time.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + time.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + time.seconds).slice(-2);

    if (time.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}

let deadline = new Date(Date.parse(new Date()) + 24 * 60 * 60 * 1000);
initializeClock("countdown", deadline);
