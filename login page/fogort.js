// forgot.js

export function initForgot() {
  const form = document.getElementById("forgotForm");
  const emailInput = document.getElementById("email");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop form from refreshing page

    const email = emailInput.value.trim();

    // Email validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    // Dummy message (backend API call can be placed here)
    alert(`If ${email} is registered with us, a reset link has been sent.`);
    form.reset();
  });
}

// Simple email validation regex
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
