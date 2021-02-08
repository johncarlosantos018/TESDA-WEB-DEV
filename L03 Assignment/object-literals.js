const person = {
    firstName: 'Carlo',
    lastName: 'Santos',
    age: 19,
    email: 'carlo@gmail.com',
    hobbies: ['Music', 'Watching'],
    address: {
        city: 'San Leonardo',
        street: 'Paasa'
    },
    getBirthYear: function() {
        return 2021 - this.age;
    }

};

// let value;

// value = person;

// value = person.firstName;
// value = person.age;
// value = person.hobbies[0];
// value = person.address.city;
// value = person.address.street;
// value = person.getBirthYear();

//console.log(person);
//console.log(value);

const people = [{name: 'Carlo', age: 19}, {name: 'Dave', age: 20}, {name: 'John', age: 21}];

for(let x = 0; x < people.length; x++){
     //console.log(people[x]);
     //console.log(people[x].name);
     console.log(people[x].age);
}