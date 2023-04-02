let countDownDate = new Date("March 29, 2024 23:59:59").getTime();

let counddownInterval = setInterval(countDown, 1000);

function countDown() {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("count_down").innerHTML = "EXPIRED";
    }
}