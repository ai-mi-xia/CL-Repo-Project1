// let storyButton;
// let logButton;
// storyButton = document.getElementById('story-button');
// logButton = document.getElementById('log-button');

let launchButton;
let fireworkBG = [
    "red-fireworks.webp",
    "rainbow-fireworks.webp",
    "green-fireworks.jpeg"];
let counter = 0 
launchButton = document.getElementById('launch-button');

launchButton.addEventListener('click', function(){
    console.log("asdfasdf");
    document.body.style.backgroundImage = fireworkBG[counter];
    counter = (counter+1)%3;
});
