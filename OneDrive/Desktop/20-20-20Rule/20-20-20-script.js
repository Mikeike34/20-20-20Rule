

const prompts = ["Look at something blue!", "Remember,<br> try to look 20 feet away", "Look at your favorite decorative piece", "Look out a window"];

function timer(){
    let counter = 20;
    let timer = document.getElementById("timer");
    messageDisplay();
    for (let i = 0; i <= 20; i++){
        setTimeout(() => {timer.innerHTML = counter;
            console.log(counter);
            counter--;}, i * 1000);
        
    }
    setTimeout(() => {let endMessage = document.getElementById("message");
        endMessage.innerHTML = "Great job! <br><br>Continue using your device knowing that<br>you have practiced good eye health!";}, 20000);
}

function messageDisplay(){
    let randomPrompt = prompts[Math.floor(Math.random()*prompts.length)];
    let message = document.getElementById("message");
    message.innerHTML = randomPrompt;
    console.log(randomPrompt);
}


