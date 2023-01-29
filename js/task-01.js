const number = document.querySelectorAll(`li.item`).length;
console.log(`Number of categories:${number}`);

const list = document.querySelectorAll(`li.item`);

    
list.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}
                 Elements:${element.lastElementChild.children.length}`);
    
});