let value;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.colllection-item:first-child');

value = listItem;
value = list;

value = list.childNodes;
value = list.childNodes[0];
value = list.childNodes[0].nodeName;
value = list.childNodes[0].nodeType;

value =list.children;
value =list.children[0];
list.children[0].textContent = 'Hello Word';

// console.log(list);
console.log(value);