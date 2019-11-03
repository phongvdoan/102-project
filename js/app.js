function askName() {
    var name = '';
    while (name == '') {
        name = window.prompt("Enter your name: ");
    }
    return 'Hello, ' + name + '. I hope you have a battastic day!';
}

function likeBatman() {
    document.getElementById("batman").innerHTML = "You get a whole crispy dollar!";
}

function buyBatman() {
    var items = prompt("How many Batman dolls would you like to order?");
    var total = '';
    while (items === '' || isNaN(items)) {
        items = prompt("How many Batman dolls would you like to order? Please ENTER a number");
    }
    for (var i = 0; i < items; i++) {
        total = total + '<p id="doll"> #' + (i + 1) + ' <img src="/images/batmandoll.jpg" id="image"></p>';
    }
    return total;
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