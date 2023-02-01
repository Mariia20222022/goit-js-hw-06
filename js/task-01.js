const list = document.getElementById(`categories`);

const number = list.children.length;
console.log(`Number of categories:${number}`);

for (let i = 0; i < list.children.length; i += 1) {
  console.log(`Category:${list.children[i].firstElementChild.textContent}`);
  console.log(`Elements:${list.children[i].lastElementChild.children.length}`);
}
