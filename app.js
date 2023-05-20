const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll("#no-of-notes");

const availabelNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click" , function validateBillAndCashAmount(){
  hideMessage();
    if(billAmount.value > 0) {       
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
            }else{
                showMessage("Do you wanna wash plates?");
            }
        }else{
            showMessage("Invalid bill amount");
        }
});

function calculateChange(amountToBeReturned) {
    for (let i = 0 ; i < availabelNotes.length; i++) {
        const numberofNotes = Math.trunc(
            amountToBeReturned / availabelNotes[i]
        );

        amountToBeReturned = amountToBeReturned %  availabelNotes[i];
        
        noOfNotes[i].innerText = numberofNotes;
    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}