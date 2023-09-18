const validationInput = document.querySelector("#validation-input");

function toggleValidationClasses(inputElement, validClass, invalidClass) {
  const expectedLength = parseInt(inputElement.getAttribute("data-length"), 10);
  const inputValue = inputElement.value.length;

  if (inputValue === expectedLength) {
    inputElement.classList.remove(invalidClass);
    inputElement.classList.add(validClass);
  } else {
    inputElement.classList.remove(validClass);
    inputElement.classList.add(invalidClass);
  }
}

validationInput.addEventListener("blur", () => {
  toggleValidationClasses(validationInput, "valid", "invalid");
});




