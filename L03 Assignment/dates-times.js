let val;

const today = new Date();
let birthday = new Date('05-18-2001 2:54:00');
birthday = new Date('May 18 2001');
birthday = new Date('5/18/2001');


val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(1);
birthday.setDate(12);
birthday.setFullYear(1995);
birthday.setHours(5);
birthday.setMinutes(29);
birthday.setSeconds(38);

console.log(birthday);
//console.log(val);