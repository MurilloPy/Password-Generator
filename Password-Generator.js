const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

document.getElementById("generate").addEventListener("click", () => {
  const length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSpecial = document.getElementById("especial").checked;

  let availableChars = "";

  if (includeUppercase) {
    availableChars += uppercaseChars;
  }
  if (includeLowercase) {
    availableChars += lowercaseChars;
  }
  if (includeNumbers) {
    availableChars += numberChars;
  }
  if (includeSpecial) {
    availableChars += specialChars;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  document.getElementById("generated-password").textContent = password;
});