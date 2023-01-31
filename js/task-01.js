const list = document.getElementById(`categories`);

const number = list.children.length;
console.log(`Number of categories:${number}`);
const items = document.querySelectorAll(".item");
Array.prototype.forEach.call(items, (element) => {
  const title = element.querySelector("h2").textContent;
  const itemsLength = element.querySelectorAll("li").length;
  console.log(`Категория: ${title} : Количество элементов: ${itemsLength}`);
});
