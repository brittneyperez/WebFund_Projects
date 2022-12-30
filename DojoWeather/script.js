console.log('page loading...');

// cookie msg
var cookieMsg = document.querySelector('#cookie_msg');

function accept() {
    cookieMsg.remove();
}

// nav_link Locations
function loading() {
    alert('Loading weather report...')
}

// converting celsius/farenheit
function c2f(temp) {
    return Math.round(9/5*temp+32);
}

function f2c(temp) {
    return Math.round(5/9*(temp-32));
}

function convert(e) {
    console.log(e.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector('#temp' + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(e.value == "˚C") {
            tempSpan.innerText = f2c(tempVal);
            // console.log(f2c(tempVal));
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}
