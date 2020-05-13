//get references to interactive elements
const imgSlot1 = document.getElementById("slot1");
const imgSlot2 = document.getElementById("slot2");
const imgSlot3 = document.getElementById("slot3");
const txtOutput = document.getElementById("output");
const txtCredit = document.getElementById("creditoutput");
const txtWinnings = document.getElementById("winningsoutput");
const btnSpin = document.getElementById("spin");
const btnCredit = document.getElementById("addCredit");
const btnCollect = document.getElementById("collectW");

//add event listeners
btnSpin.addEventListener("click", spin);
btnCredit.addEventListener("click", credit);
btnCollect.addEventListener("click", collect);

//when page loaded
let creditAmount = 0;
let winningAmount = 0;
let slotFullAmount = 0;
let slots1 = Math.floor(Math.random() * 8 + 1);
let slots2 = Math.floor(Math.random() * 8 + 1);
let slots3 = Math.floor(Math.random() * 8 + 1);
imgSlot1.setAttribute("src", "images/fruit" + slots1 + ".png");
imgSlot2.setAttribute("src", "images/fruit" + slots2 + ".png");
imgSlot3.setAttribute("src", "images/fruit" + slots3 + ".png");

//when spin button clicked
function spin() {
    let slots1 = Math.floor(Math.random() * 8 + 1);
    let slots2 = Math.floor(Math.random() * 8 + 1);
    let slots3 = Math.floor(Math.random() * 8 + 1);
    imgSlot1.setAttribute("src", "images/fruit" + slots1 + ".png");
    imgSlot2.setAttribute("src", "images/fruit" + slots2 + ".png");
    imgSlot3.setAttribute("src", "images/fruit" + slots3 + ".png");
    const slotFullAmount = (slots1 + slots2 + slots3) / 3;
    txtCredit.innerText = `Credit: ${--creditAmount}`;
    txtOutput.innerText = ``;
    console.log(slotFullAmount)
    
    //when user matches all 3 slots
    if (slots1 === slotFullAmount) {
        winningAmount += 10;
        txtWinnings.innerText = `Winnings: ${winningAmount}`;
        txtOutput.innerText = `10 winnings has been added to the account`;
    }
    //when user matches 2nd and 3rd slots
    else if (slots2 === slots3) {
        winningAmount += 5;
        txtWinnings.innerText = `Winnings: ${winningAmount}`;
        txtOutput.innerText = `5 winnings has been added to the account`;
    }
}

//when credit button clicked
function credit() {
    creditAmount ++;
    txtCredit.innerText = `Credit: ${creditAmount}`;
}

//when collect button clicked
function collect() {
    txtOutput.innerText = `You have retrieved ${winningAmount}`;
    winningAmount -= winningAmount;
    txtWinnings.innerText = `Winnings: ${winningAmount}`;
    
}

