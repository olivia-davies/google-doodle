// YOUR SCRIPTS GO HERE
var img0 = '../img/200.jpg';
var img1 = '../img/300.jpg';
var img2 = '../img/400.jpg';

// Get Random Number
var max = 3;
var numRand = Math.floor(Math.random() * max);
console.log(numRand);

// Change class on body element
$('body').addClass('bg' + numRand);

// Display Randomized Message 
var tmp = $('img').attr('src', eval('img' + numRand));
