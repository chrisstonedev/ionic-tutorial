const reasonInput = document.querySelector('#reason-input');
const amountInput = document.querySelector('#amount-input');
const cancelButton = document.querySelector('#cancel-button');
const confirmButton = document.querySelector('#confirm-button');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

confirmButton.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        const alert = document.createElement('ion-alert');
        alert.header = 'Invalid inputs';
        alert.message = 'Please enter a valid reason and amount.';
        alert.buttons = ['OK'];
        document.body.appendChild(alert);
        alert.present();
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expensesList.appendChild(newItem);

    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = "$" + totalExpenses.toFixed(2);

    clear();
});

cancelButton.addEventListener('click', clear);