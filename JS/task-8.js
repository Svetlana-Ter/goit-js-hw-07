const refs = {
  input: document.querySelector('#controls input'),
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

refs.input.addEventListener('change', onInputValueRead);

function onInputValueRead(event) {
  const amount = Number(event.currentTarget.value);
  createBoxes(amount);
}

refs.renderBtn.addEventListener('click', createBoxes);

function createBoxes(amount) {
  let newBoxes = [];
  let width = 20;
  let height = 20;
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');

    height += 10;
    width += 10;
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;
    const r = Math.round(Math.random() * (250 - 1) * 1);
    const g = Math.round(Math.random() * (250 - 1) * 1);
    const b = Math.round(Math.random() * (250 - 1) * 1);
    newDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    newBoxes.push(newDiv);
  }

  return refs.boxes.append(...newBoxes);
}

refs.destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  const divsRef = document.querySelectorAll('#boxes div');
  refs.boxes.remove(divsRef);
}
