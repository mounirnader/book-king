const signupLogin = document.getElementById('signup-login')
const more = document.getElementById('more')

more.addEventListener("click", function() {    
    if (signupLogin.style.display === "none") {
        signupLogin.style.display = "block";
    } else {
        signupLogin.style.display = "none";
    }
});

