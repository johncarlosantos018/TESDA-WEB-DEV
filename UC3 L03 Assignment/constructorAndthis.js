//Object literal
// const person = {
//     name: 'Carlo'
// };

// console.log(person);


//Person constructor
// function Person(){
//     this.name = 'Nicole'
// };

// const kicks = new Person();

// console.log(nicole);

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// };

// const Dave = new Person('Dave', 28);
// const John = new Person('John', 25);

// console.log(Dave);
// console.log(John);


//Constructor and This Keyword
//Person constructor
function Person(name, dob){
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
};

const nicko = new Person('Carlo', '05/18/01');
const kicks = new Person('Nicole', '05/19/01');

console.log(carlo);
console.log(nicole);
console.log(carlo.calculateAge());
console.log(nicole.calculateAge());