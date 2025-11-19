let timeLeft = 60;
let timerElement = document.getElementById("timer");

let quizTimer = setInterval(function () {
    timeLeft--;
    timerElement.textContent = "⏳ Time Left : " + timeLeft + " Seconds";

    if (timeLeft <= 0) {
        clearInterval(quizTimer);
        alert("Time's up!");
        // Auto submit quiz here
        result()
    }
}, 1000);