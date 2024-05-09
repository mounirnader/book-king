const currentDate = new Date();
const maxDate = new Date(currentDate.getFullYear() - 16, currentDate.getMonth(), currentDate.getDate()); // Minimum age of 18
const minDate = new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate()); // Maximum age of 100
const passwordInput = document.getElementById('pass');
const confirmPasswordInput = document.getElementById('pass1');
const fullNameInput = document.getElementById("n1");
const phoneNumberInput = document.getElementById("phone");
const emailInput = document.getElementById("EM");


const dummy = {
    'name': 'Mounir Nader',
    'email': 'mony@bookking.com',
    'dateOfBirth': '2003-10-21',
    'password': '12345678',
    'phone': '01000000000',
    'city': 'Cairo',
    'address': '185 el orouba',
    'role': 'user'
}
const admin = {
    'email': 'admin@bookking.com',
    'name': 'Book King',
    'password': 'bookking',
    'role': 'admin'
}
let users = [dummy, admin];


function formatDate(date) {
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
}

function checkPasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    if (password !== confirmPassword) {
        document.getElementById('error-3').style.display = 'block';
        return false;
    }
    else {
        document.getElementById('error-3').style.display = 'none';
        return true;
    }
}

function validateFullName() {
    const fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!fullNameRegex.test(fullNameInput.value.trim())) {
        document.getElementById('error-1').style.display = 'block';
        return false
    } else {
        document.getElementById('error-1').style.display = 'none';
        return true;
    }
}

function validatePassword() {
    if (passwordInput.value.length < 8) {
        document.getElementById('error-4').style.display = 'block';
        return false;
    } else {
        document.getElementById('error-4').style.display = 'none';
        return checkPasswordMatch()
    }
}
function validatePhoneNumber() {
    const phoneRegex = /^(01)[0-9]{9}$/;

    if (!phoneRegex.test(phoneNumberInput.value) || phoneNumberInput.value.length !== 11) {
        document.getElementById('error-5').style.display = 'block';
        return false;
    } else {
        document.getElementById('error-5').style.display = 'none';
        return true;
    }
}



function validateEmail() {
    const isEmailTaken = users.some(function (user) {
        return user.email === emailInput.value.trim();
    });

    if (isEmailTaken) {
        document.getElementById('error-2').style.display = 'block';
        document.getElementById('signUp').disabled = true;
        return false;
    } else {
        document.getElementById('error-2').style.display = 'none';
        document.getElementById('signUp').disabled = false;
        return true;
    }
}



document.getElementById('age').setAttribute('max', formatDate(maxDate));
document.getElementById('age').setAttribute('min', formatDate(minDate));
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', checkPasswordMatch);
fullNameInput.addEventListener('input', validateFullName);
phoneNumberInput.addEventListener('input', validatePhoneNumber);
emailInput.addEventListener("input", validateEmail);

function signUp() {
    if(document.querySelector('form').checkValidity()){
    if (validateFullName() && validateEmail() && validatePhoneNumber() && validatePassword() && document.getElementById('checkbox').checked) {
        document.getElementById('error-8').style.display = 'none';
        const user = {
            'name': fullNameInput.value,
            'email': emailInput.value,
            'dateOfBirth': document.getElementById('age').value,
            'password': passwordInput.value,
            'phone': phoneNumberInput.value,
            'city': document.getElementById('city').value,
            'address': document.getElementById('address').value,
            'role': 'user'
        }
        users.push(user);
        location.replace(`shop.html?name=${user.name}`);
    }
    else document.getElementById('error-8').style.display = 'block';
}
else document.querySelector('form').reportValidity();
}

document.getElementById('signUp').addEventListener('click', signUp);