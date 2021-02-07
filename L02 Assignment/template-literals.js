const name = 'Carlo';
const age = '19';
const job = 'TigaLuto';
const city = 'San Leonardo';
let html;

// html = '<ul><li>Name: ' +
//        name +
//        '</li><li>Age: ' +
//        age +
//        '</li><li>Job: ' +
//        job +
//        '</li><li>city: ' +
//        city +
//        ' </li> </ul>';

function hello() {
    return 'Hello world';
}
html = `
       <ul>
       <li>Name: ${name}</li>
       <li>Age: ${name}</li>
       <li>Job: ${name}</li>
       <li>City: ${name}</li>
       <li>${2 + 2}</li>
       <li>${hello()}</li>
       <li>${age > 16 ?'Over 16' : ' Under 16'}</li>
       </ul>

       `;


       document.body.innerHTML = html;

    //    if{age > 16} {
    //      'Over 16'
    //    } else {
    //        'Under 16'
    //    }