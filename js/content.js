var name = window.prompt("Enter your name: ");
var today = new Date();
var hourNow =  today.getHours();
var minuteNow =  today.getMinutes();
var greeting;

if (hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting ='Welcome!';
}

document.write('<h4>' + greeting + ' ' + name + '</h4>  The time is ' + hourNow + ':' + minuteNow );

