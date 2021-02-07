const numbers = [18, 10, 7, 29, 23, 56, 43];
const numbers2 = new Array(47, 6, 23, 20, 14);
const drinks = ['Water', 'Cola', 'Juice', 'Beer'];
const mixed = [99, 'Hey', true, undefined, null, {a:3, b:7}];
//const name = 'John Carlo';


// let value;


// value = numbers.length;

// //value = Array.isArray(name);
// value = Array.isArray(numbers);

// value = numbers[3];
// value = numbers[0];

// numbers[2] = 100;

// value = numbers.indexOf(23);


// numbers.push(250);

// numbers.unshift(120);

// numbers.pop();

// numbers.shift();

// numbers.splice(2, 3);

// numbers.reverse();

// value = numbers.concat(numbers2);

value = drinks.sort();
value = numbers.sort();

value = numbers.sort(function (x, y) {
    return x - y;
});
//reverse
value = numbers.sort(function (x, y) {
    return y - x;
});

function over50(num) {
    return num > 50;
}

// function over50(num) {
//     return num < 50;
// }

value = numbers.find(over50);

//console.log(numbers);
console.log(value);
