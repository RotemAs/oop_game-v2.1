/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = "";
const userStartButton = document.getElementById("btn__reset");
const projectedKeyboard = document.getElementById("qwerty");
const keys = document.querySelectorAll(".key");

userStartButton.addEventListener("click", () => {
    game = new Game();
    game.startGame();
});

projectedKeyboard.onclick = (e) => {
    let target = e.target;
    if (target.className === "key") {
        game.handleInteraction(target);
    };
};

document.addEventListener("keyup", (e) => {
    for (let i=0; i < keys.length; i++) {
        if (e.key === keys[i].innerHTML && keys[i].disabled === false) {
            game.handleInteraction(keys[i]);
        }
    }
}); 

