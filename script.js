// Toggle theme mode
const toggle = document.getElementById("mode-toggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// Toggle password visibility
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.getElementById("toggle-icon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";  // Show the password
    toggleIcon.src = "bx-hide.svg";  // Change icon to "Hide"
    toggleIcon.alt = "Hide Password Icon";
  } else {
    passwordInput.type = "password";  // Hide the password
    toggleIcon.src = "bx-show.svg";  // Change icon to "Show"
    toggleIcon.alt = "Show Password Icon";
  }
}
