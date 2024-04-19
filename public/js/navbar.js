const signupLogin = document.getElementById('signup-login')
const more = document.getElementById('more')

more.addEventListener("click", function() {    
    if (signupLogin.style.display === "none") {
        signupLogin.style.display = "block";
    } else {
        signupLogin.style.display = "none";
    }
});




if(location.search !== ""){
    const params = new URLSearchParams(location.search);
    let name = params.get("name");
    name = decodeURIComponent(name);
    signupLogin.innerHTML = ''
    const logOutLink = document.createElement("a");
    logOutLink.href = "home.html";
    logOutLink.textContent = "Log Out";
    const accountLink = document.createElement("a");
    accountLink.href = "account.html";
    accountLink.textContent = name + "'s Account";
    signupLogin.appendChild(accountLink);
    signupLogin.appendChild(logOutLink);
}

