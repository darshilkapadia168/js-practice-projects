const userInput = document.querySelector(".user-input");
const form = document.querySelector('form');
const result = document.querySelector('.result');
const allgusses = document.querySelector('.all-guesses');
const submitbtn = document.querySelector('.submit-btn');
const startgamebtn = document.querySelector('.start-game');

(function () {
    const allguessesArray = [];
    let RandomNumber = Math.round(Math.random() * 100);

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const userInputvalue = parseInt(userInput.value);
        if (userInputvalue < RandomNumber) {
            result.innerText = "Too Low!"
        } else if (userInputvalue > RandomNumber) {
            result.innerText = "Too High!"
        } else {
            result.innerText = "You got it! Congrats🎉";
            startgamebtn.disabled = false;
            submitbtn.disabled = true;
        }
        allguessesArray.push(userInputvalue);
        allgusses.innerText = 'Your Guesses: ' + allguessesArray.join(', ');
        form.reset();
    });

    startgamebtn.addEventListener('click', function () {
        result.innerText = '';
        allgusses.innerText = '';
        startgamebtn.disabled = true;
        submitbtn.disabled = false;
        RandomNumber = Math.round(Math.random() * 100);
    })
})();