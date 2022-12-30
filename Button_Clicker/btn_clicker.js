console.log('page is loaded...');

function access(e) {
    if (e.innerText == 'Login') {
        e.innerText = 'Logout';
    } else {
        e.innerText = 'Login';
    }
}

function like() {
    alert('Ninja was liked!');
}

function hide(e) {
    e.remove();
}