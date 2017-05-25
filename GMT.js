var moment = require('moment');
var dateFormat = require('dateformat');

//var gmdate = moment.utc().format("ddd, DD MMM YYYY HH:MM:ss [GMT]");
var gmdate = moment.utc().format("ddd, DD MMM YYYY hh:mm:ss [GMT]");
var gmdate2 = moment.utc().format("ddd, DD MMM YYYY hh:mm:ss ZZ [GMT]");
var date = dateFormat(new Date().getTime(),"GMT:ddd, dd mmm yyyy hh:MM:ss") + " GMT";

console.log('dateFormat is '+ date);
console.log('moment is ' + gmdate);

console.log(gmdate2);
