function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(`.change-color`);
console.log(button);
const paragraph = document.querySelector(`.color`);
console.log(paragraph);
button.addEventListener(`click`, onClick);
function onClick(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  paragraph.textContent = color;
}
