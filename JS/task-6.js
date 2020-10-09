const inputValidationRef = document.querySelector('#validation-input');
const validationValue = Number(inputValidationRef.getAttribute('data-length'));

inputValidationRef.addEventListener('blur', onInputValidation);
function onInputValidation(event) {
  const inputValue = event.currentTarget.value;

  if (inputValue.length === validationValue) {
    inputValidationRef.classList.remove('invalid');
    inputValidationRef.classList.add('valid');
  } else {
    inputValidationRef.classList.remove('valid');
    inputValidationRef.classList.add('invalid');
  }
}
