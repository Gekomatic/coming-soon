// Set the date we're counting down to
const countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = `<h3>${days}</h3> <h4>Days</h4>`;

  document.getElementById(
    "hours"
  ).innerHTML = `<h3>${hours}</h3> <h4>Hours</h4>`;

  document.getElementById(
    "minutes"
  ).innerHTML = `<h3>${minutes}</h3> <h4>Minutes</h4>`;

  document.getElementById(
    "seconds"
  ).innerHTML = `<h3>${seconds}</h3> <h4>Seconds</h4>`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
