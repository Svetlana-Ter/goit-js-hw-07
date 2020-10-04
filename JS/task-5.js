const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
const DEFAULT_NAME = 'незнакомец';

inputRef.addEventListener('input', onNameRead);

function onNameRead(event) {
  if (event.currentTarget.value === '') {
    outputRef.textContent = DEFAULT_NAME;
  } else {
    outputRef.textContent = event.currentTarget.value;
  }
}
