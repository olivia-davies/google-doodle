// YOUR SCRIPTS GO HERE//

//DRAW SVG

var mySVG = $('svg').drawsvg();

mySVG.drawsvg('animate');







// Store & Generate Number
var maxRand = 6;
var numRand = Math.floor(Math.random() * maxRand);
//console.log(numRand);

// Store images
var img0 = 'img/cheetocat.png';
var img1 = 'img/eyebrows.png';
var img2 = 'img/gangnamstyle.png';
var img3 = 'img/harrykitty.png';
var img4 = 'img/ramencat.png';
var img5 = 'img/sherlockcat.png';

// Show Images
$('img').attr('src', eval('img' + numRand));