function askName() {
    var name = window.prompt("Enter your name: ");
    return 'Hello, ' + name + '. I hope you have a battastic day!';
}
function likeBatman() {
    document.getElementById("batman").innerHTML = "You get a whole crispy dollar!";
}

function greeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var minuteNow = today.getMinutes();
    var greeting;


    if (hourNow > 18) {
        greeting = 'Good Evening!';
    } else if (hourNow > 12) {
        greeting = 'Good Afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good Morning!';
    } else {
        greeting = 'Welcome!';
    }

    return '<h4>' + greeting + '</h4>  The time is ' + hourNow + ':' + minuteNow;


}

