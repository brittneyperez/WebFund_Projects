console.log('page loaded...');

var likeCount = 3;
var likeSpan1 = document.querySelector('#post-1');

function like() {
    likeCount++;
    likeSpan1.innerText = likeCount + ' like(s)';
}

// var count = 1;
// var countElement = document.querySelector('.count');

// console.log(countElement);

// function add1() {
//     count++;
//     countElement.innerText = count + 'Like(s)';
//     console.log(count);
// }