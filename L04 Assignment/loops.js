// for(let x = 0; x < 10; x++) {
//     if(x == 2) {
//         console.log('2 is my favorite number');
//         continue;
//     }
//     if(x === 5) {
//         console.log('Stop the loop');
//         break
//     }

//     console.log(`Number ${x}`);
// }

// let x = 0;



// while(x< 10) {
//     console.log(`Number ${x}`);
//     x++;
// }



// do {
//     console.log(`Number ${x}`);
//     x++;
// }

// while(x < 10);



// const computers = ['Acer', 'Apple', 'Sony', 'Gateway'];

// // for(let x = 0; x < computers.length; x++) {
// //     console.log(computers[x]);
// // }


// computers.forEach(function(computers, index, array) {
//     console.log(`${index} : ${computers}`);
//     console.log(`${array}`);
// })



// const users = [{id: 1, name: 'Carlo'}, {id: 2, name: 'Dave'}, {id: 3, name: 'John'}, {id: 4, name: 'Colleen'}];

// const ids = users.map(function(user) {
//     return user.name
// });

// console.log(ids);



const user = {
    firstName: 'Carlo',
    lastName: 'Santos',
    age: 19
};

for(let x in user) {
    console.log(`${x} : ${user[x]}`);
}