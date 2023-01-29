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
  document.body.style.backgroundColor=`#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  paragraph.textContent = getRandomHexColor();
   
}