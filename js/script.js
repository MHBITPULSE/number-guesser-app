let playButton = document.getElementById("playButton")
console.log(playButton)

playButton.addEventListener("click", startPlay);

let low = 1;
let high = 10;

const correcr_ans = Math.floor(Math.random() * 10);

function startPlay() {
    for (let index = 0; index < 4; index++) {
        if (index == 3) {
            alert("You lose! ");
            break;
        }
        let guess = prompt(`Guess a number between 1 to 10. You have ${3 - index} chances left!`);
        if (guess == correcr_ans) {
            alert("You Win");
            break;
        }
        else if (guess > correcr_ans) {
            if (index == 2) {
                alert("You lose! ");
                break;
            }
            alert("Correct answer is smaller!");
        }
        else {
            if (index == 2) {
                alert("You lose! ");
                break;
            }
            alert("Correct answer is greater!")
        };
    }
}



