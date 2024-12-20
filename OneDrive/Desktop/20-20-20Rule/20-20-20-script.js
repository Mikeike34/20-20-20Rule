

const prompts = ["Look at something blue!", "Remember,<br>try to look 20 feet away", "Look at your favorite decorative piece", "Look out a window"];
let check = true;
const gridContainer = document.getElementById("grid-container");

function workTime(){ //starts a timer for 20 minutes in which user can use their device. After 20 minutes, a 20 second eyebreak screen will generate. 
    let grid = document.getElementById("grid");
    grid.style.visibility = "hidden";
    let sound = new Audio('notificationStart.mp3');

    setTimeout(() => {generateEyeBreak(); sound.play();}, 200000); //after 20 minutes, calls the generateEyeBreak() function and plays a chime to alert user. 
}//end 20MinuteBreak


function messageDisplay(){ //pulls a random string from the prompts[] array and displays it in item3
    let randomPrompt = prompts[Math.floor(Math.random()*prompts.length)];
    let message = document.getElementById("message");
    message.innerHTML = randomPrompt;
    console.log(randomPrompt);
}//end messageDisplay


function timer(){ //runs a 20 second timer while displaying a message via the messageDisplay() function.
    let counter = 20;
    let timerDisplay = document.getElementById("timer");
    let endMessage = document.getElementById("message");
    if(check === true){
        check = false;
        messageDisplay();

        for (let i = 0; i <= 20; i++){
            setTimeout(() => {timerDisplay.innerHTML = counter;
                console.log(counter);
                counter--;}, i * 1000); //sets a timer that equals 1 second per counter value (in this case, 20 second timer)
        
        }//end for

        let sound = new Audio('notificationEnd.mp3');
        setTimeout(() => {endMessage.innerHTML = "Great job! <br><br>Continue using your device knowing that<br>you have practiced good eye health!"; sound.play(); check = true;}, 20000);
    }//end if
    
    setTimeout(() => {newCycle(); counter = 20; timerDisplay.innerHTML = counter; endMessage.innerHTML = "It is time to give your eyes a break. <br><br> Click start when you are ready.";}, 27000);
}//end timer



function generateEyeBreak(){ //Creates the elements in the DOM needed for the 20 second eye break

    //removing the elements from the launch-page in order to create space for the 20 second timer.
    let originalGrid = document.getElementById("grid");
    let title = document.getElementById("welcome");
    let launchButton = document.getElementById("launch");
    originalGrid.remove();
    title.remove();
    launchButton.remove();

    //setting the grid-container to visible
    gridContainer.style.visibility = "visible";

    //creating each item for the container and their attributes
    let item1 = document.createElement("div");
    let item2 = document.createElement("div");
    let item3 = document.createElement("div");
    let item4 = document.createElement("div");

    item1.setAttribute('class', 'item1');
    item2.setAttribute('class', 'item2');
    item3.setAttribute('class', 'item3');
    item4.setAttribute('class', 'item4');

    //creating and adding elements to each item
    let header = document.createElement("h1");
    header.setAttribute('class', 'header');
    header.innerHTML = "The 20-20-20 Rule";
    item1.appendChild(header);
    let timer = document.createElement("h2");
    timer.setAttribute('id', 'timer');
    timer.innerHTML = "20";
    item2.appendChild(timer);
    let message = document.createElement("h3");
    message.setAttribute('id', 'message');
    message.innerHTML = "It is time to give your eyes a break. <br><br> Click start when you are ready.";
    item3.appendChild(message);
    let startButton = document.createElement("button");
    startButton.setAttribute('id', 'startButton');
    startButton.setAttribute('onClick', 'timer()');
    startButton.innerHTML = "Start";
    item4.appendChild(startButton);

    gridContainer.appendChild(item1);
    gridContainer.appendChild(item2);
    gridContainer.appendChild(item3);
    gridContainer.appendChild(item4);

}//end generateEyeBreak


function newCycle(){//

    let sound = new Audio('notificationStart.mp3');
    gridContainer.style.visibility = "hidden"; //this screen will be hidden for the duration of the 20 minute device time. 
    setTimeout(() => {gridContainer.style.visibility = "visible"; sound.play();}, 200000); //In 20 minutes, the 20 second break will be visible again and a chime will play to alert the user.

}//end newCycle




