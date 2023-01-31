const input = document.querySelector("input");
console.log(input);
const createButton = document.querySelector(`[data-create]`);
console.log(createButton);
const destroyButton = document.querySelector(`[data-destroy]`);
console.log(destroyButton);
const boxes = document.querySelector("#boxes");
console.log(boxes);
createButton.addEventListener(`click`, createBoxes);
destroyButton.addEventListener(`click`, destroyBoxes);
let width = 30;
let height = 30;
let size = 30;
function destroyBoxes() {
  boxes.innerHTML = "";
}
function createBoxes() {
  let items = [];
  let amount = input.value;
  for (let i = 0; i < amount; i += 1) {
    let item = `<div style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
    items.push(item);
  }
  boxes.insertAdjacentHTML("beforeend", items.join(""));
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
