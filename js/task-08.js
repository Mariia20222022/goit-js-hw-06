const form = document.querySelector(`.login-form`);


form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
   
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    console.log(email, password);
    if (email === `` || password ===``)  {
        alert(`Fill in all  the fields,please`); 
    }
    else if(email ===formElements.email.value && password ===formElements.password.value)
    { alert(`Thank you!`) }
   
    const data = { email, password };
    console.log(data);
     event.target.reset(); 
    }


