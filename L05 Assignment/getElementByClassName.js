// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[2]);
// items[2].style.color = 'red';
// items[3].textContent = 'Hello Word';

// const ListItems = document.querySelector('ul').getElementsByClassName('Collection-item');

// console.log(ListItems);


// let lis = document.getElementsByTagName('li');
// console.log(lis);
// // console.log(lis[0]);
// // lis[0].style.color = 'purple';
// // lis[1].textContent = 'purple';


// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index) {
//     console.log(li.className);
//     console.log(li);
//     li.textContent = `${index}: Hi There`;
// });

// console.log(lis);

const items = document.querySelectorAll('ul.collection li.collection-item');

console.log(items);

items.forEach(function(item, index) {
    item.textContent = `${index}: Hello Word`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li) {
    li.style.background = 'purple';
    li.style.color = '#fff';
});

for(let x = 0; x < liEven.length; x++) {
    liEven[x].style.background = '#ccc';
}