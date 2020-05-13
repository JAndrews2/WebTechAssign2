//get references to interactive elements
//let ticket1 = document.getElementById("ticket1");
//let ticket2 = document.getElementById("ticket2");
//let ticket3 = document.getElementById("ticket3");
//let ticket4 = document.getElementById("ticket4");
//const txtOutput = document.getElementById("output");
//const btnBook = document.getElementById("book");
//const deliveryMethod = document.getElementById("addCredit");
//const txtTicketNumber = document.getElementById("noOfTickets");


//add event listeners
//btnBook.addEventListener("click", book);
//ticket1.addEventListener("click", ticket1)
//when page loaded
//let ticket1 = 'Phantom of the opera - £79';
//let ticket2 = 'Hamilton - £85';
//let ticket3 = 'Lion King - £67';
//let ticket4 = 'Miss Saigon - £83';

//when book button clicked
//function book(){
//    txtOutput.innerText = `The show you have selected is ${ticket1} per person /n You have ${txtTicketNumber.value} tickets selected`;
//}
const btnBook = document.getElementById("book");
const txtOutput = document.getElementById("output");
var numberOfTickets = document.getElementById("noOfTickets");
const txtShowOutput = document.getElementById("showOutput");
const txtDeliveryOutput = document.getElementById("dOutput");
const txtEDOutput = document.getElementById("eDOutput");
const txtEDisOutput = document.getElementById("eDisOutput");
const txtEFOutput = document.getElementById("eFOutput");

btnBook.addEventListener("click", book)

const pricePhantom = 79;
const priceHam = 85;
const priceLion = 67;
const priceSaigon = 83;
const priceE = 0;
const priceBO = 1.50;
const priceP = 3.99;
let totalCost = 0;
let finalCost = 0;
let discountPrice = 0;



//get all show radio buttons
const allTickets = document.querySelectorAll("input[name='ticket']");

//get selected show radio button
var selectedTicket = document.querySelector("input[name='ticket']:checked");

for (let i = 0; i < allTickets.length; i++) {
  allTickets[i].addEventListener("change", checkTicket);
}

//txtOutput.innerText = "Ticket selected: " + selectedTicket.value;

function checkTicket() {
  txtShowOutput.innerText = "Ticket selected: " + this.value;
  //txtShowOutput.innerText = `Number of tickets selected ${txtTicketNumber.value}`;
}

//get all delivery radio buttons
const ticketPreference = document.querySelectorAll("input[name='pref']");

//get selected delivery radio button
var selectedDelivery = document.querySelector("input[name='pref']:checked");

for (let i = 0; i < ticketPreference.length; i++) {
  ticketPreference[i].addEventListener("change", checkDelivery);
}

function checkDelivery() {
  txtDeliveryOutput.innerText = "Delivery preference: " + this.value;
}

//when book button clicked
function book() {
  if (document.getElementById('ticket1').checked) {
    selectedTicket = document.getElementById('ticket1').value;
    numberOfTickets = document.getElementById('noOfTickets').value;
    let totalCost = pricePhantom * numberOfTickets;
    txtOutput.innerText = `${numberOfTickets} tickets for ${selectedTicket} \n Total Cost: £${totalCost.toFixed(2)}`;
    if (document.getElementById('eticket').checked) {
      selectedDelivery = document.getElementById('eticket').value;
      txtEDOutput.innerText = `E-Ticket selected: Free`;
    }
    else if (document.getElementById('post').checked) {
      selectedDelivery = document.getElementById('post').value;
      txtEDOutput.innerText = `Post Selected: £3.99`;
    }
    else if (document.getElementById('boxOffice').checked) {
      selectedDelivery = document.getElementById('boxOffice').value;
      txtEDOutput.innerText = `Box Office selected: £1.50`;
    }
    if (numberOfTickets < 5) {
      txtEDisOutput.innerText = `Discounted price: £${discountPrice.toFixed(2)}`;
      finalCost = totalCost += selectedDelivery - discountPrice;
      txtEFOutput.innerText = `Final Price: £${finalCost.toFixed(2)}`;
    }
    if (numberOfTickets >= 5 && numberOfTickets < 10) {
      let discountPrice = totalCost / 100 * 10;
      txtEDisOutput.innerText = `Discounted price: £${discountPrice.toFixed(2)}`
      finalCost = totalCost - discountPrice + selectedDelivery;
      txtEFOutput.innerText = `Final Price: £${finalCost}`;
    }
    if (numberOfTickets >= 10) {
      let discountPrice = totalCost / 100 * 15;
      txtEDisOutput.innerText = `Discounted price: £${discountPrice.toFixed(2)}`
      finalCost = totalCost - discountPrice + selectedDelivery;
      txtEFOutput.innerText = `Final Price: £${finalCost}`;
    }

  }
  if (document.getElementById('ticket2').checked) {
    selectedTicket = document.getElementById('ticket2').value;
    numberOfTickets = document.getElementById('noOfTickets').value
    let totalCost = priceHam * numberOfTickets;
    txtOutput.innerText = `${numberOfTickets} tickets for ${selectedTicket} \n Total Cost: £${totalCost.toFixed(2)}`;
    if (document.getElementById('eticket').checked) {
      selectedDelivery = document.getElementById('eticket').value;
      txtEDOutput.innerText = `E-Ticket selected: Free`;
    }
    else if (document.getElementById('post').checked) {
      selectedDelivery = document.getElementById('post').value;
      txtEDOutput.innerText = `Post selected: £3.99`;
    }
    else if (document.getElementById('boxOffice').checked) {
      selectedDelivery = document.getElementById('boxOffice').value;
      txtEDOutput.innerText = `Box Office selected: £1.50`;
    }
    if (numberOfTickets < 5) {
      txtEDisOutput.innerText = `Discounted price: £${discountPrice.toFixed(2)}`;
      finalCost = totalCost += selectedDelivery - discountPrice;
      txtEFOutput.innerText = `Final Price: £${finalCost.toFixed(2)}`;
    }
    if (numberOfTickets >= 5 && numberOfTickets < 10) {
      let discountPrice = totalCost / 100 * 10;
      txtEDisOutput.innerText = `Discounted price: £${discountPrice.toFixed(2)}`
      finalCost = totalCost - discountPrice + selectedDelivery;
      txtEFOutput.innerText = `Final Price: £${finalCost}`;
    }
    if (numberOfTickets >= 10) {
      let discountPrice = totalCost / 100 * 15;
      txtEDisOutput.innerText = `Discounted price: £${discountPrice.toFixed(2)}`
      finalCost = totalCost - discountPrice + selectedDelivery;
      txtEFOutput.innerText = `Final Price: £${finalCost}`;
    }

  }
  if (document.getElementById('ticket3').checked) {
    selectedTicket = document.getElementById('ticket3').value;
    numberOfTickets = document.getElementById('noOfTickets').value
    let totalCost = priceLion * numberOfTickets;
    txtOutput.innerText = `${numberOfTickets} tickets for ${selectedTicket} \n Total Cost: £${totalCost.toFixed(2)}`;
    if (document.getElementById('eticket').checked) {
      selectedDelivery = document.getElementById('eticket').value;
      txtEDOutput.innerText = `E-Ticket selected: Free`;
    }
    else if (document.getElementById('post').checked) {
      selectedDelivery = document.getElementById('post').value;
      txtEDOutput.innerText = `Post selected: £3.99`;
    }
    else if (document.getElementById('boxOffice').checked) {
      selectedDelivery = document.getElementById('boxOffice').value;
      txtEDOutput.innerText = `Box Office selected: £1.50`;
    }
    if (numberOfTickets < 5) {
      txtEDisOutput.innerText = `Discounted price: £${discountPrice.toFixed(2)}`;
      finalCost = totalCost += selectedDelivery - discountPrice;
      txtEFOutput.innerText = `Final Price: £${finalCost.toFixed(2)}`;
    }
    if (numberOfTickets >= 5 && numberOfTickets < 10) {
      let discountPrice = totalCost / 100 * 10;
      txtEDisOutput.innerText = `Discounted price: £${discountPrice.toFixed(2)}`
      finalCost = totalCost - discountPrice + selectedDelivery;
      txtEFOutput.innerText = `Final Price: £${finalCost}`;
    }
    if (numberOfTickets >= 10) {
      let discountPrice = totalCost / 100 * 15;
      txtEDisOutput.innerText = `Discounted price: £${discountPrice.toFixed(2)}`
      finalCost = totalCost - discountPrice + selectedDelivery;
      txtEFOutput.innerText = `Final Price: £${finalCost}`;
    }
  }

  if (document.getElementById('ticket4').checked) {
    selectedTicket = document.getElementById('ticket4').value;
    numberOfTickets = document.getElementById('noOfTickets').value
    let totalCost = priceSaigon * numberOfTickets;
    txtOutput.innerText = `${numberOfTickets} tickets for ${selectedTicket} \n Total Cost: £${totalCost.toFixed(2)}`;
    if (document.getElementById('eticket').checked) {
      selectedDelivery = document.getElementById('eticket').value;
      txtEDOutput.innerText = `E-Ticket selected: Free`;
    }
    else if (document.getElementById('post').checked) {
      selectedDelivery = document.getElementById('post').value;
      txtEDOutput.innerText = `Post selected: £3.99`;
    }
    else if (document.getElementById('boxOffice').checked) {
      selectedDelivery = document.getElementById('boxOffice').value;
      txtEDOutput.innerText = `Box Office selected: £1.50`;
    }
    if (numberOfTickets < 5) {
      txtEDisOutput.innerText = `Discounted price: £${discountPrice.toFixed(2)}`;
      finalCost = totalCost += selectedDelivery - discountPrice;
      txtEFOutput.innerText = `Final Price: £${finalCost.toFixed(2)}`;
    }
    if (numberOfTickets >= 5 && numberOfTickets < 10) {
      let discountPrice = totalCost / 100 * 10;
      txtEDisOutput.innerText = `Discounted price: £${discountPrice.toFixed(2)}`
      finalCost = totalCost - discountPrice + selectedDelivery;
      txtEFOutput.innerText = `Final Price: £${finalCost}`;
    }
    if (numberOfTickets >= 10) {
      let discountPrice = totalCost / 100 * 15;
      txtEDisOutput.innerText = `Discounted price: £${discountPrice.toFixed(2)}`
      let finalCost = totalCost - discountPrice + selectedDelivery;
      txtEFOutput.innerText = `Final Price: £${finalCost}`;
    }
  }
}
