const counterValueRef = document.querySelector('#value');
let counter = 0;

const increment = function () {
  counter += 1;
  counterValueRef.textContent = counter;
};

const decrement = function () {
  counter -= 1;
  counterValueRef.textContent = counter;
};

const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]',
);

const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]',
);

const onIncrementBtnClick = incrementBtnRef.addEventListener(
  'click',
  increment,
);

const onDecrementBtnClick = decrementBtnRef.addEventListener(
  'click',
  decrement,
);
