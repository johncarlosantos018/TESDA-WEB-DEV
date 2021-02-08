function greet(firstName = 'Carlo', lastName = 'Santos') {
 if(typeof firstName === 'undefined') {
     firstName = 'Carlo';
 }
 if(typeof lastName === 'undefined') {
     firstName = 'Santos';
 }

 console.log('Hi');
 return `Hi ${firstName} ${lastName}`;
}

console.log(greet());


const square = function(x){
    return x * x;
}

console.log(square(20));


(function(name) {
    console.log(`Name ${name}`)
})('Carlo');



const todo = {
    add: function() {
        console.log('Add todo');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function () {
    console.log('Delete todo...');
}

//todo.add();
//todo.edit(100);
todo.delete();