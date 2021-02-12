localStorage.setItem('name', 'John Carlo');
localStorage.setItem('age', 19);


// // sessionStorage.setItem('name', 'Dave');

// // localStorage.removeItem('age');
// // localStorage.removeItem('name');

const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// // localStorage.clear();
console.log(name, age);


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const task = document.querySelector('#task').value;
    
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Task Saved');

    tasks.forEach(function(task){
        console.log(task);
    });
});