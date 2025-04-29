const toggle = document.getElementById("mode-toggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// Password Show/Hide Feature
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");
const icon = togglePassword.querySelector("img");

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  icon.src = isPassword ? "bx-show.svg" : "bx-hide.svg";
  icon.alt = isPassword ? "Show Password Icon" : "Hide Password Icon";
});
