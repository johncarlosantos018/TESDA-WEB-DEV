const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');


taskInput.value = '';

form.addEventListener('submit', runEvent);


taskInput.addEventListener('keydown', runEvent);

taskInput.addEventListener('keyup', runEvent);

taskInput.addEventListener('keypress', runEvent);

taskInput.addEventListener('focus', runEvent);

taskInput.addEventListener('blur', runEvent);

taskInput.addEventListener('cut', runEvent);

taskInput.addEventListener('paste', runEvent);

select.addEventListener('change', runEvent);

function runEvent(e){
    console.log(`Event: ${e.type}`);

    console.log(e.target.value);

    heading.innerText = e.target.value;

    console.log(taskInput.value);
};