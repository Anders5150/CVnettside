 

/*Her lages en countdown med en dato*/
function startTimer() {
  var countDownDate = new Date("jun 16, 2023 00:00:00").getTime();

  /*Denne blir kjørt hvert sekund og oppdaterer timeren med den nåværende tiden som er igjen*/ 
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    /*Her regnes tiden som er igjen ut, separert i dager timer minutter og sekunder*/
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    /*Dette gjør så tallene alltid har to digits */
    let zero = "0";
    days = days < 10 ? zero + days : days;
    hours = hours < 10 ? zero + hours : hours;
    minutes = minutes < 10 ? zero + minutes : minutes;
    seconds = seconds < 10 ? zero + seconds : seconds;

    /*Her oppdaterer vi html filen med informasjonen */
    document.getElementById("clock-days").innerHTML = days;
    document.getElementById("clock-hours").innerHTML = hours;
    document.getElementById("clock-minutes").innerHTML = minutes;
    document.getElementById("clock-seconds").innerHTML = seconds;
  }, 1000);
}
startTimer();