const decrementButton = document.querySelector(`[data-action="decrement"]`);
const incrementButton = document.querySelector(`[data-action="increment"]`);
const value = document.getElementById(`value`);
let counterValue = 0;

function handleButtonOnClick(event) {
  counterValue += 1;
  value.textContent = counterValue;
}
function removeClickoOnButton(event) {
  counterValue -= 1;
  value.textContent = counterValue;
}
incrementButton.addEventListener(`click`, handleButtonOnClick);
decrementButton.addEventListener(`click`, removeClickoOnButton);
