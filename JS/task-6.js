const inputValidationRef = document.querySelector('#validation-input');
const validationValue = Number(inputValidationRef.getAttribute('data-length'));

inputValidationRef.addEventListener('blur', onInputValidation);
function onInputValidation(event) {
  const inputValue = event.currentTarget.value;

  if (
    inputValue.length < validationValue ||
    inputValue.length > validationValue
  ) {
    inputValidationRef.classList.add('invalid');
  } else if (inputValue.length === validationValue) {
    inputValidationRef.classList.remove('invalid');
    inputValidationRef.classList.add('valid');
  }
}
