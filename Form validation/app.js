console.log('This is form validation project');

const firstName = document.getElementById('FirstName');
const lastName = document.getElementById('LastName');
const Email = document.getElementById('Email');
const phone = document.getElementById('PhoneNumber');
const userName = document.getElementById('UserName');
const zip = document.getElementById('Zip');
let valid = false;
let validEmail = false;
let validUsername = false;
let validPhone = false;
let validFirstName = false;
let validLastName = false;

firstName.addEventListener('blur', ()=>{
    // Validate first name here
    let regex = /^[A-Z][a-z]/
    let str = firstName.value;
    
    if (regex.test(str)) {
        firstName.classList.remove('is-invalid');
        validFirstName = true;
    }
    else {
        firstName.classList.add('is-invalid');
        validFirstName = false;
    }
});

lastName.addEventListener('blur', ()=>{
    // Validate last name here
    let regex = /^[A-Z][a-z]/
    let str = lastName.value;
    
    if (regex.test(str)) {
        lastName.classList.remove('is-invalid');
        validLastName = true;
    }
    else {
        lastName.classList.add('is-invalid');
        validLastName = false;
    }
});

Email.addEventListener('blur', ()=>{
    // Validate last name here
    let regex = /^([0-9A-Za-z\_\.]+)@([A-Za-z0-9\_\.]+)\.([a-zA-z]){2,7}$/
    let str = Email.value;
    
    if (regex.test(str)) {
        Email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        Email.classList.add('is-invalid');
        validEmail = false;
    }
});

phone.addEventListener('blur', ()=>{
    // Validate phone number here
    let regex = /^[0-9]{10}$/
    let str = phone.value;
    
    if (regex.test(str)) {
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        phone.classList.add('is-invalid');
        validPhone = false;
    }
});

userName.addEventListener('blur', ()=>{
    // Validate username here
    let regex = /[A-Z]{1,10}[a-z]{1,10}[0-9]{1,10}/
    let str = userName.value;
    
    if (regex.test(str)) {
        userName.classList.remove('is-invalid');
        validUsername = true
    }
    else {     
        userName.classList.add('is-invalid');
        validUsername = false;
    }
});

let submit = document.getElementById('Submit');
submit.addEventListener('click', function(e) {
    e.preventDefault();

    if (validUsername && validPhone && validEmail && validFirstName && validLastName) {
        alert('Form Submitted Succesfully');
    }
    else {
        alert('Submission failed');
    }
});