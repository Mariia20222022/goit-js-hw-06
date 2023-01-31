const input = document.getElementById(`validation-input`);
console.log(input);

const dataLength = Number(input.getAttribute(`data-length`));

input.addEventListener(`blur`, onBlur);

function onBlur(event) {
  const field = event.currentTarget;
  if (field.value.length === dataLength) {
    this.classList.add(`valid`);
    this.classList.revove(`invalid`);
  } else {
    this.classList.remove(`valid`);
    this.classList.add(`invalid`);
  }
}

// function onBlur(event) {
//   if (this.value.length === Number(dataLength)) {
//     input.classList.add(`valid`);
//     input.classList.remove(`invalid`);
//   } else {
//     input.classList.add(`invalid`);
//     input.classList.remove(`valid`);
//   }
// }
