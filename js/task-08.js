const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit); //форма це завжди подія сабміт

function onSubmit(evt) {
    evt.preventDefault()       //прибираємо нативну поведінку
      
    const { email, password } = evt.currentTarget.elements;    //деструктиризація
    
    // console.log(email.value);
    // console.log(password.value);
    if (email.value === '' || password.value === '') {
        alert('Please fill in all the fields!') 
    }
    else {
    const data = {
        email: email.value,
        password: password.value
    };
        console.log(data);
        formEl.reset();
    };
}






