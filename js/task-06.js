const input = document.getElementById(`validation-input`);
console.log(input);

const dataLength = Number(input.getAttribute("data-length"));


input.addEventListener(`blur`, onBlur);

function  onBlur(event) {
    const field = event.currentTarget;
    if ( field.value.length === dataLength) {
         this.classList.add(`valid`);
        this.classList.remove(`invalid`);
    }
    else {
           this.classList.remove(`valid`);
        this.classList.add(`invalid`);
    }
  
}


