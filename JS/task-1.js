const categoryRef = document.querySelectorAll('#categories .item');
console.log(`В списке ${categoryRef.length} категории`);

const categoryTitleRef = document.querySelectorAll('#categories .item h2');
const listRef = document.querySelectorAll('#categories .item ul');

const info = i =>
  `Категория: ${categoryTitleRef[i].textContent}; Количество элементов: ${listRef[i].children.length}`;

console.log(info(0));
console.log(info(1));
console.log(info(2));
