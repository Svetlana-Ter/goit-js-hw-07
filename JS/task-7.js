const inputSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputSizeControlRef.addEventListener('input', onFontSizeControl);
function onFontSizeControl(event) {
  const fontSize = `${event.currentTarget.value}px`;
  textRef.style.fontSize = fontSize;
}
