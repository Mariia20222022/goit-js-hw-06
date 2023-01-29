
const decrementButton = document.querySelector(`[data-action="decrement"]`)
const incrementButton = document.querySelector(`[data-action="increment"]`);
const value = document.getElementById(`value`);


function handleButtonOnClick(event) {
    let counterValue = value.textContent;
    value.textContent = parseInt(counterValue)+1;
}
function removeClickoOnButton(event) {
     let counterValue = value.textContent;
    value.textContent = parseInt(counterValue)-1;
}
incrementButton.addEventListener(`click`, handleButtonOnClick);
decrementButton.addEventListener(`click`, removeClickoOnButton);