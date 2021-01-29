// handle product increase2nd
// document.getElementById("increase-ticket").addEventListener('click',function(){
//     console.log("150 plus clicked");
//     handleTicketChange('firstClass',true);

//     const ticketInput = document.getElementById('firstClass-count');
//     const ticketCount = parseInt(ticketInput.value);
//     const ticketNewCount = ticketCount + 1;

//     document.getElementById('firstClass-count').value = ticketNewCount;

// })
// handle product decrease2nd
// document.getElementById("decrease-ticket").addEventListener('click',function(){
//     console.log("150 minus clicked");
//     handleTicketChange('firstClass',false);

//     const ticketInput = document.getElementById('ticket-count');
//     const ticketCount = parseInt(ticketInput.value);
//     var ticketNewCount = ticketCount - 1;
//     if(ticketNewCount<0){
//         ticketNewCount =0;
//         alert("Ticket Number can't be negative")
//     }

//     document.getElementById('ticket-count').value = ticketNewCount;
// })
// // handle product increase
// document.getElementById("increase-ticket2nd").addEventListener('click',function(){
//     console.log("100 plus clicked");
//     handleTicketChange('economy',true);
// })
// // handle product decrease
// document.getElementById("decrease-ticket2nd").addEventListener('click',function(){
//     console.log("100 minus clicked");
//     handleTicketChange('economy',false);
// })

// handle increment function
function handleTicketChange(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    var ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    else {
        ticketNewCount = ticketCount - 1;
        if (ticketNewCount < 0) {
            ticketNewCount = 0;
            alert("Ticket number can't be negative");
        }
    }

    document.getElementById(ticket + '-count').value = ticketNewCount;
    let ticketTotal = 0;
    if (ticket == 'firstClass') {
        ticketTotal = ticketNewCount * 150;
    }
    else {
        ticketTotal = ticketNewCount * 100;
    }
    calculateTotal();

}

function calculateTotal() {
    const firstClassCount = getInput('firstClass');
    const economyCount = getInput('economy');

    document.getElementById('firstClass-confirmed').innerText = firstClassCount;
    document.getElementById('economy-confirmed').innerText = economyCount;

    const subtotalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('subtotal-price').innerText = subtotalPrice;

    const taxAmount = subtotalPrice*0.1;
    document.getElementById('tax-amount').innerText = taxAmount;

    const totalPrice = subtotalPrice + taxAmount;
    document.getElementById('total-price').innerText = totalPrice;

    document.getElementById('totalPrice-confirmed').innerText ='$'+totalPrice;
}
function getInput(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}
document.getElementById('book-now').addEventListener('click',function(){
    document.getElementById('booking-section').style.display = 'none';
    document.getElementById('confirmation-area').style.display = 'block';
})
