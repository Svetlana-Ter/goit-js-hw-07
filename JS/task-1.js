const categoryRef = document.querySelectorAll('#categories .item');
console.log(`В списке ${categoryRef.length} категории`);

const categoryTitleRef = document.querySelectorAll('#categories .item h2');
const listRef = document.querySelectorAll('#categories .item ul');

categoryTitleRef.forEach((categoryTitleRef, i) =>
  console.log(
    `Категория: ${categoryTitleRef.textContent}; Количество элементов: ${listRef[i].children.length}`,
  ),
);
