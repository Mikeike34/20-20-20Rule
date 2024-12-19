

const prompts = ["Look at something blue!", "Remember,<br>try to look 20 feet away", "Look at your favorite decorative piece", "Look out a window"];
let check = true;

function timer(){ //runs a 20 second timer while displaying a message via the messageDisplay() function.
    if(check === true){
        let counter = 20;
        check = false;
        let timer = document.getElementById("timer");
        messageDisplay();
        for (let i = 0; i <= 20; i++){
            setTimeout(() => {timer.innerHTML = counter;
                console.log(counter);
                counter--;}, i * 1000);
        
        }//end for
        setTimeout(() => {let endMessage = document.getElementById("message");
            endMessage.innerHTML = "Great job! <br><br>Continue using your device knowing that<br>you have practiced good eye health!"; check = true;}, 20000);
    }//end if
}//end timer



function messageDisplay(){ //pulls a random string from the prompts[] array and displays it in item3
    let randomPrompt = prompts[Math.floor(Math.random()*prompts.length)];
    let message = document.getElementById("message");
    message.innerHTML = randomPrompt;
    console.log(randomPrompt);
}//end messageDisplay



function generateEyeBreak(){ //Creates the elements in the DOM needed for the 20 second eye break

    //removing the elements from the launch-page in order to create space for the 20 second timer.
    let originalGrid = document.getElementById("grid");
    let title = document.getElementById("welcome");
    let launchButton = document.getElementById("launch");
    originalGrid.remove();
    title.remove();
    launchButton.remove();

    //setting the grid-container to visible
    const gridContainer = document.getElementById("grid-container");
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




