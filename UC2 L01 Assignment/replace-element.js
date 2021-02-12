const newHeading = document.createElement('h2');


newHeading.id = 'task-title';


newHeading.appendChild(document.createTextNode('Jobs'));


const oldHeading = document.querySelector('#task-title');


const cardAction = document.querySelector('.card-action');


cardAction.replaceChild(newHeading, oldHeading);


const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');


lis[0].remove();


list.removeChild(lis[1]);


const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let value;


value = link.className;
value = link.classList;
value = link.classList[1];
link.classList.add('testing');
link.classList.remove('testing');


value = link.getAttribute('href');
value = link.setAttribute('href', 'https://github.com/johncarlosantos018/TESDA-Web-Dev/');
link.setAttribute('title', 'Github');
value = link.hasAttribute('title');
value = link;



// console.log(list);
// console.log(cardAction);
// console.log(newHeading);
// console.log(oldHeading);
console.log(value);