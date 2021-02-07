const firstName = 'John Carlo';
const lastName = 'Santos';
const age = '19';
const str = 'What up guys my name is John Carlo';
const tags = 'Web Dev, Web Design, Programming';


let val;

val = firstName + lastName;

val = firstName + ' ' + lastName;


val = 'Carlo ';
val += 'Santos';

val = 'Hi ako si ' + firstName + ' and I am ' + age;

//val = 'That's awesome, I can't wait';
val = "That's awesome, i can't wait";


val = firstName.length;

val = firstName.concat(' ', lastName);

val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[4];

val = firstName.indexOf('o');
val = firstName.lastIndexOf('o');

val = firstName.charAt('5');

val = firstName.substring(0, 6);


val = firstName.slice(0, 6);
val = firstName.slice(-3);

val = str.split(' ');
val + str.split(',');

val = str.replace('John Carlo', 'John Dave');

val = str.includes('What up');
//val = str.includes('Hello');

console.log(val);