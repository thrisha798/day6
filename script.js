document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("game-button");
    const scoreCount = document.getElementById("score-count");
    const timeRemaining = document.getElementById("time-remaining");
    let score = 0;
    let time = 10;

    button.addEventListener("click", () => {
        score++;
        scoreCount.innerText = score;
    });

    const timer = setInterval(() => {
        time--;
        timeRemaining.innerText = time;
        if (time === 0) {
            clearInterval(timer);
            button.disabled = true;
            button.innerText = "Game Over!";
        }
    }, 1000);
});
