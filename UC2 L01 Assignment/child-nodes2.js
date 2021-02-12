let value;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

//PART 2


value = list.children;
list.children[3].children[0].id = 'test-link';
value = list.children[3].children[0];


value = list.firstChild;
value = list.firstElementChild;

value = list.lastChild;
value = list.lastElementChild;


value = list.childElementCount;
value = list.children[0].childElementCount;


value = listItem.parentNode;
value = listItem.parentElement;
value = listItem.parentElement.parentElement;


value = listItem.nextSibling;
value = listItem.nextElementSibling;
value = listItem.nextElementSibling.nextElementSibling;
previousElementSibling;

value = listItem.previousSibling;
value = listItem.previousElementSibling;

console.log(value);