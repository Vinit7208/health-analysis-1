// register.js

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(errorBox, message) {
  errorBox.textContent = message;
  errorBox.style.display = "block";
}

export function initRegister() {
  const registerForm = document.getElementById("registerForm");
  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  // Error message box
  const errorMsg = document.createElement("div");
  errorMsg.style.color = "red";
  errorMsg.style.fontSize = "14px";
  errorMsg.style.margin = "8px 0";
  errorMsg.style.display = "none";
  registerForm.insertBefore(errorMsg, registerForm.firstChild);

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validation
    if (fullname.value.trim().length < 3) {
      showError(errorMsg, "Full name must be at least 3 characters.");
      return;
    }
    if (!validateEmail(email.value.trim())) {
      showError(errorMsg, "Enter a valid email address.");
      return;
    }
    if (password.value.length < 6) {
      showError(errorMsg, "Password must be at least 6 characters.");
      return;
    }
    if (password.value !== confirmPassword.value) {
      showError(errorMsg, "Passwords do not match.");
      return;
    }

    // Success simulation (API call ka placeholder)
    alert("Account created successfully!");
    window.location.href = "login.html";
  });
}
