let sendButton = document.getElementById('send');
let resetButton = document.getElementById('reset');
let form = document.getElementById('form');


form.addEventListener('submit', function(e){
    e.preventDefault();
})

resetButton.addEventListener('click', function(){
    let firstName = document.getElementById('firstName');
    let LastName = document.getElementById('LastName');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    firstName.value = '';
    LastName.value = '';
    email.value = '';
    message.value = '';
})

sendButton.addEventListener('click', function(e){
    let firstName = document.getElementById('firstName');
    let LastName = document.getElementById('LastName');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    firstName = firstName.value;
    localStorage.setItem('name', firstName);

    LastName = LastName.value;
    localStorage.setItem('name', LastName);
    
    email = email.value;
    localStorage.setItem('email', email);

    message = message.value;
    localStorage.setItem('message', message);
    
})