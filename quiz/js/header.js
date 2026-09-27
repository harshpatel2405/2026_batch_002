async function loadNavbar() {

    // Load the navbar HTML
    let response = await fetch("../html/header.html");

    let navbar = await response.text();

    // Insert navbar into the page
    document.querySelector("#navbar").innerHTML = navbar;

    // Get the current page name
    let currentPage = window.location.pathname;

    // Get the login/signup button
    let authButton = document.querySelector("#auth-btn");

    // Check current page
    if (currentPage.includes("signup.html")) {

        // We are on signup page
        authButton.textContent = "Login";
        authButton.href = "login.html";

    } else if (currentPage.includes("login.html")) {

        // We are on login page
        authButton.textContent = "Sign Up";
        authButton.href = "signup.html";

    }
}

loadNavbar();