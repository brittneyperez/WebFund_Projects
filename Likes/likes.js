console.log('page is loaded...');

// like button config for users 1, 2, & 3
// onclick="likes(n)"
var likeCount = [9, 12, 9];
var spans = [
    document.querySelector('#likes-1'), 
    document.querySelector('#likes-2'), 
    document.querySelector('#likes-3')
];

function likes(id) {
    likeCount[id]++;
    spans[id].innerHTML = likeCount[id] + ' like(s)';
}  //span #likes-n      = n + like(s)