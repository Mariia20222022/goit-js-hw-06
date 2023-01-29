const input = document.getElementById(`name-input`);
const field = document.getElementById(`name-output`);
console.log(field);

input.addEventListener(`input`, onInputChange);


  
function onInputChange(event) {
    console.log(event.currentTarget.value);
    field.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        field.textContent = `Anonymous`;
    }
}

