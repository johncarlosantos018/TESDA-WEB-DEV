// document.querySelector('.clear-task').addEventListener('click', function(){
//     console.log('Hello world');
// });

document.querySelector('.clear-task').addEventListener('click', onclick);

function onclick(e){
    // console.log('Clicked');

    let value;
    value = e;


    value = e.target;
    value = e.target.id;
    value = e.target.className;
    value = e.target.classList;


    value = e.type;


    value = e.timeStamp;


    value = e.clientY;
    value = e.clientX;


    value = e.offsetY;
    value = e.offsetX;

    console.log(value);
};