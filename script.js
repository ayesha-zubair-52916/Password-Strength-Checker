const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strength-text");
const strengthFill = document.getElementById("strength-fill");
const togglePassword = document.getElementById("toggle-password");

// Password Strength Check
passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) {
        strengthText.textContent = "Weak";
        strengthFill.style.width = "33%";
        strengthFill.style.background = "red";
    } 
    else if (strength === 3 || strength === 4) {
        strengthText.textContent = "Medium";
        strengthFill.style.width = "66%";
        strengthFill.style.background = "orange";
    } 
    else {
        strengthText.textContent = "Strong";
        strengthFill.style.width = "100%";
        strengthFill.style.background = "green";
    }
});

// Show/Hide Password
togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Show";
    }
});