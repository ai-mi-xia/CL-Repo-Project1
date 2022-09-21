// let storyButton;
// let logButton;
// storyButton = document.getElementById('story-button');
// logButton = document.getElementById('log-button');

let launchButton;
let fireworkBG = [
    "url(red-fireworks.webp)",
    "url(rainbow-fireworks.webp)",
    "url(green-fireworks.jpeg)",
    "url(blue-fireworks.jpeg)"];
let counter = 0 
launchButton = document.getElementById('launch-button');

launchButton.addEventListener('click', function(){
    console.log("button click");
    document.body.style.backgroundImage = fireworkBG[counter];
    counter++; 
    if (counter >= fireworkBG.length) {
        counter =0; 
    }
});
