console.log('page is loaded...');

// Instrucitons:
// 1. Clicking the "edit profile" button will change the user's name from Jane Doe to any other name.
var newName = document.querySelector('#user-name');

function nameChange(id) {
    newName.innerText = 'Marily D';
    console.log('Marilyn D');
}

// 2. Clicking either button will remove the user from the requests list.
// 3. Bonus: either button decreases the "Connection Requests" number.
// 4. Bonus: the accept button also increases the "Your Connections" number.
var reqSpan = document.querySelector("#req_num");
var cnxtSpan = document.querySelector("#cnxts");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    reqSpan.innerText--;
    cnxtSpan.innerText++;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    reqSpan.innerText--;
}

