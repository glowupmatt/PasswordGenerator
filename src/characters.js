export function getRandomChar(min, max) {
  const limit = max - min + 1;
  return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}

export function getSpecialChar() {
  const specialCharacters = "!@#$%^&*(){}=<>/,.";
  return specialCharacters[
    Math.floor(Math.random() * specialCharacters.length)
  ];
}
