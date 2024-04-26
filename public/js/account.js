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
const users = [dummy, admin];

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("passw");


function validatePassword() {
    if (passwordInput.value.length < 8) {
        document.getElementById('error-4').style.display = 'block';
        return false;
    } else {
        document.getElementById('error-4').style.display = 'none';
        return true
    }
}
passwordInput.addEventListener("input", validatePassword);
function logIn() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

        const user = users.find(function(user) {
            return user.email === email && user.password === password;
        });
        if (user && validatePassword()) {
            document.getElementById('error-6').style.display = 'none';
          if(user.role === 'admin') {
            location.replace('dashboard.html')
          }
          else location.replace(`account.html?email=${email}&name=${user.name}&phone=${user.phone}&city=${user.city}&address=${user.address}&dateOfBirth=${user.dateOfBirth}`)
        } else {
          document.getElementById('error-6').style.display = 'block';
        }
    }

document.getElementById("login").addEventListener("click", logIn);


