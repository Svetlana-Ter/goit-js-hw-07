const categoryRef = document.querySelectorAll('#categories .item');
console.log(`В списке ${categoryRef.length} категории`);

const categoryTitleRef = document.querySelectorAll('#categories .item h2');
const listRef = document.querySelectorAll('#categories .item ul');

for (let i = 0; i < categoryRef.length; i += 1) {
  console.log(
    `Категория: ${categoryTitleRef[i].textContent}; Количество элементов: ${listRef[i].children.length}`,
  );
}
