let val_number = /^(\+7|8|7)?[\s\-]?\(?[9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}/;
let val_name = /^[А-Я]{1}[а-я]+/;
let val_nik = /^[a-zA-Z0-9-_*$]{5,15,}/;

let surname = document.querySelector('#surname');
let namee = document.querySelector('#name');
let number = document.querySelector('#num');
let nik = document.querySelector('#nik');
let valid_surname = document.querySelector('.valid_surname');
let valid_name = document.querySelector('.valid_name');
let valid_number = document.querySelector('.valid_number');
let valid_nik = document.querySelector('.valid_nik');
let valid_password = document.querySelector('.valid_password');
let password = document.querySelector('#pas1');
let password_re = document.querySelector('#pas2');

function checkValidNumber() {
    if (!numberValidation(val_number, number.value)) {
        numberIsNotValid(number, valid_number, 'Введите в формате: +7-9**-**-**');
    }
    else {
        numberIsValid(number, valid_number, '');
    }
}

function numberValidation(val_number, number) {
    return val_number.test(number);
}

function numberIsNotValid (number, element, message) {
    number.classList.add('invalid');
    element.innerHTML = message;
}

function numberIsValid (number, element, message) {
    number.classList.remove('invalid');
    number.classList.add('valid');
    element.innerHTML = message;
}

function checkValidSurname() {
    if (!nameValidation(val_name, surname.value)) {
        nameIsNotValid(surname, valid_surname, 'Только русские буквы, первая - заглавная');
    }
    else {
        nameIsValid(surname, valid_surname, '');
    }
}

function checkValidName() {
    if (!nameValidation(val_name, namee.value)) {
        nameIsNotValid(namee, valid_name, 'Только русские буквы, первая - заглавная');
    }
    else {
        nameIsValid(namee, valid_name, '');
    }
}

function nameValidation(val_name, name) {
    return val_name.test(name);
}

function nameIsNotValid (name, element, message) {
    name.classList.add('invalid');
    element.innerHTML = message;
}

function nameIsValid (name, element, message) {
    name.classList.remove('invalid');
    name.classList.add('valid');
    element.innerHTML = message;
}


function checkValidNik() {
    if (!nikValidation(val_nik, nik.value)) {
        nikIsNotValid(nik, valid_nik, 'от 5 до 15 символов (латинские буквы, -, _, $, *)');
    }
    else {
        nikIsValid(nik, valid_nik, '');
    }
}

function nikValidation(val_nik, nik) {
    return val_nik.test(nik);
}

function nikIsNotValid (nik, element, message) {
    nik.classList.add('invalid');
    element.innerHTML = message;
}

function nikIsValid (nik, element, message) {
    nik.classList.remove('invalid');
    nik.classList.add('valid');
    element.innerHTML = message;
}

function checkValidPassword (){
    if (!passwordValidation(password.value, password_re.value)) {
        passwordIsNotCorrect(password, valid_password, 'Пароли не совпадают');
    }
    else {
        passwordIsCorrect(password, valid_password, '');
    }
}

function passwordValidation(password, password_re) {
    console.log(password);
    return password == password_re;
}

function passwordIsNotCorrect (password, element, message) {
    password.classList.add('invalid');
    element.innerHTML = message;
}
function passwordIsCorrect (password, element, message) {
    password.classList.remove('invalid');
    password.classList.add('valid');
    element.innerHTML = message;
}
