const input = document.getElementById(`validation-input`);
console.log(input);

const dataLength = Number(input.getAttribute(`data-length`));

input.addEventListener(`blur`, onBlur);

function onBlur(event) {
  const field = event.currentTarget;
  this.classList.remove(`invalid`, `valid`);
  field.value.length === dataLength
    ? this.classList.add(`valid`)
    : this.classList.add(`invalid`);
}
