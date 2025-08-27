// login.js (ES Module)

// Helper: Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Helper: Show error message
function showError(errorBox, message) {
  errorBox.textContent = message;
  errorBox.style.display = "block";
}

// Main function
export function initLogin() {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const rememberInput = document.getElementById("remember");

  // Error message element
  const errorMsg = document.createElement("div");
  errorMsg.style.color = "red";
  errorMsg.style.fontSize = "14px";
  errorMsg.style.margin = "8px 0";
  errorMsg.style.display = "none";
  loginForm.insertBefore(errorMsg, loginForm.querySelector(".form-row"));

  // Load remembered email
  const savedEmail = localStorage.getItem("healthmateEmail");
  if (savedEmail) {
    emailInput.value = savedEmail;
    rememberInput.checked = true;
  }

  // Form submit handler
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const remember = rememberInput.checked;

    if (!validateEmail(email)) {
      showError(errorMsg, "Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      showError(errorMsg, "Password must be at least 6 characters.");
      return;
    }

    // Demo authentication
    if (email === "test@healthmate.com" && password === "123456") {
      if (remember) {
        localStorage.setItem("healthmateEmail", email);
      } else {
        localStorage.removeItem("healthmateEmail");
      }
      alert("Login Successful!");
      window.location.href = "dashboard.html";
    } else {
      showError(errorMsg, "Invalid email or password.");
    }
  });
}
