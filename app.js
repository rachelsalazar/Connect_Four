'use strict';

var clicks = 0;
var notLocation =["1", "2", "3", "4", "5", "6", "7"];
var mouseLocation = 0;
var column = [];



// TRACKING WHICH PLAYERS TURN IT IS

$("body").on("click", function() {
  clicks++;
  if (clicks > 1) {
    clicks = 0;
  }
});

// PIECE HOVERS OVER MOUSE LOCATION

$(".hole").mouseover(function(){
  mouseLocation = $(this).attr("class")[5];

  	if (clicks === 0) {
  		$("#drop-hole" + mouseLocation).addClass("black-background");
  	} else {
		$("#drop-hole" + mouseLocation).addClass("red-background");
	};

  	for (var i = 0; i <= notLocation.length - 1; i++) {
  		if (notLocation[i] !== mouseLocation) {
  			$("#drop-hole" + notLocation[i]).removeClass("black-background");
  			$("#drop-hole" + notLocation[i]).removeClass("red-background");
  		};
  	};
});

// ON CLICK REMOVING PIECE FROM DROPHOLE

$("body").on("click", function(){
	$("#drop-hole" + mouseLocation).removeClass("black-background");
	$("#drop-hole" + mouseLocation).removeClass("red-background");
});

// FILL HOLE ON CLICK OF COLUMN
$(".hole").on("click", function(){
	column.push(mouseLocation);
	console.log(column);
});


// var hole6x1Filled = 'white';
// var hole5x1Filled = 'white';
// var hole4x1Filled = 'white';
// var hole3x1Filled = 'white';
// var hole2x1Filled = 'white';
// var hole1x1Filled = 'white';
// var hole6x2Filled = 'white';
// var hole5x2Filled = 'white';
// var hole4x2Filled = 'white';
// var hole3x2Filled = 'white';
// var hole2x2Filled = 'white';
// var hole1x2Filled = 'white';
// var hole6x3Filled = 'white';
// var hole5x3Filled = 'white';
// var hole4x3Filled = 'white';
// var hole3x3Filled = 'white';
// var hole2x3Filled = 'white';
// var hole1x3Filled = 'white';

// $('.hole').mouseover(function() {

//   // COLUMN 1 COLUMN 1 COLUMN 1 COLUMN 1
//   if ((clicks === 0) && (hole1x1Filled === 'white')) {
//     $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').mouseover(function() {
//       $('#drop-hole1').css('background-color', '#ff0000');
//     });
//     $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').mouseout(function() {
//       $('#drop-hole1').css('background-color', '#fff');
//     });
//     if ((hole6x1Filled === 'white') && (clicks === 0)) {
//       $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').on('click', function () {
//         $('#hole6x1').css('background-color', '#ff0000');
//         hole6x1Filled = 'red';
//         console.log('Hole 6x1 filled = ' + hole6x1Filled);
//       });
//     }
//     if ((hole5x1Filled === 'white') && (clicks === 0) && (hole6x1Filled !== 'white')) {
//       $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').on('click', function () {
//         $('#hole5x1').css('background-color', '#ff0000');
//         hole5x1Filled = 'red';
//         console.log('Hole 5x1 filled = ' + hole5x1Filled);
//       });
//     }
//     if ((hole4x1Filled === 'white') && (clicks === 0) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white')) {
//       $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').on('click', function () {
//         $('#hole4x1').css('background-color', '#ff0000');
//         hole4x1Filled = 'red';
//         console.log('Hole 4x1 filled = ' + hole4x1Filled);
//       });
//     }
//     if ((hole3x1Filled === 'white') && (clicks === 0) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white') && (hole4x1Filled !== 'white')) {
//       $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').on('click', function () {
//         $('#hole3x1').css('background-color', '#ff0000');
//         hole3x1Filled = 'red';
//         console.log('Hole 3x1 filled = ' + hole3x1Filled);
//       });
//     }
//     if ((hole2x1Filled === 'white') && (clicks === 0) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white') && (hole4x1Filled !== 'white') && (hole3x1Filled !== 'white')) {
//       $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').on('click', function () {
//         $('#hole2x1').css('background-color', '#ff0000');
//         hole2x1Filled = 'red';
//         console.log('Hole 2x1 filled = ' + hole2x1Filled);
//       });
//     }
//     if ((hole1x1Filled === 'white') && (clicks === 0) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white') && (hole4x1Filled !== 'white') && (hole3x1Filled !== 'white') && (hole2x1Filled !== 'white')) {
//       $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').on('click', function () {
//         $('#hole1x1').css('background-color', '#ff0000');
//         hole1x1Filled = 'red';
//         console.log('Hole 1x1 filled = ' + hole1x1Filled);
//         $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').mouseover(function() {
//           $('#drop-hole1').css('background-color', '#fff');
//         });
//       });
//     }
//   }
//   if ((clicks === 1) && (hole1x1Filled === 'white')) {
//     $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').mouseover(function() {
//       $('#drop-hole1').css('background-color', '#000');
//     });
//     $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').mouseout(function() {
//       $('#drop-hole1').css('background-color', '#fff');
//     });
//     if ((hole6x1Filled === 'white') && (clicks === 1)) {
//       $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').on('click', function () {
//         $('#hole6x1').css('background-color', '#000');
//         hole6x1Filled = 'black';
//         console.log('Hole 6x1 filled = ' + hole6x1Filled);
//       });
//     }
//     if ((hole5x1Filled === 'white') && (clicks === 1) && (hole6x1Filled !== 'white')) {
//       $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').on('click', function () {
//         $('#hole5x1').css('background-color', '#000');
//         hole5x1Filled = 'black';
//         console.log('Hole 5x1 filled = ' + hole5x1Filled);
//       });
//     }
//     if ((hole4x1Filled === 'white') && (clicks === 1) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white')) {
//       $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').on('click', function () {
//         $('#hole4x1').css('background-color', '#000');
//         hole4x1Filled = 'black';
//         console.log('Hole 4x1 filled = ' + hole4x1Filled);
//       });
//     }
//     if ((hole3x1Filled === 'white') && (clicks === 1) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white') && (hole4x1Filled !== 'white')) {
//       $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').on('click', function () {
//         $('#hole3x1').css('background-color', '#000');
//         hole3x1Filled = 'black';
//         console.log('Hole 3x1 filled = ' + hole3x1Filled);
//       });
//     }
//     if ((hole2x1Filled === 'white') && (clicks === 1) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white') && (hole4x1Filled !== 'white') && (hole3x1Filled !== 'white')) {
//       $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').on('click', function () {
//         $('#hole2x1').css('background-color', '#000');
//         hole2x1Filled = 'black';
//         console.log('Hole 2x1 filled = ' + hole2x1Filled);
//       });
//     }
//     if ((hole1x1Filled === 'white') && (clicks === 1) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white') && (hole4x1Filled !== 'white') && (hole3x1Filled !== 'white') && (hole2x1Filled !== 'white')) {
//       $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').on('click', function () {
//         $('#hole1x1').css('background-color', '#000');
//         hole1x1Filled = 'black';
//         console.log('Hole 1x1 filled = ' + hole1x1Filled);
//         $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').mouseover(function() {
//           $('#drop-hole1').css('background-color', '#fff');
//         });
//       });
//     }
//   }

//   // COLUMN 2 COLUMN 2 COLUMN 2 COLUMN 2
//   if ((clicks === 0) && (hole1x2Filled === 'white')) {
//     $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').mouseover(function() {
//       $('#drop-hole2').css('background-color', '#ff0000');
//     });
//     $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').mouseout(function() {
//       $('#drop-hole2').css('background-color', '#fff');
//     });
//     if ((hole6x2Filled === 'white') && (clicks === 0)) {
//       $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
//         $('#hole6x2').css('background-color', '#ff0000');
//         hole6x2Filled = 'red';
//         console.log('Hole 6x2 filled = ' + hole6x2Filled);
//       });
//     }
//     if ((hole5x2Filled === 'white') && (clicks === 0) && (hole6x2Filled !== 'white')) {
//       $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
//         $('#hole5x2').css('background-color', '#ff0000');
//         hole5x2Filled = 'red';
//         console.log('Hole 5x2 filled = ' + hole5x2Filled);
//       });
//     }
//     if ((hole4x2Filled === 'white') && (clicks === 0) && (hole6x2Filled !== 'white') && (hole5x2Filled !== 'white')) {
//       $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
//         $('#hole4x2').css('background-color', '#ff0000');
//         hole4x2Filled = 'red';
//         console.log('Hole 4x2 filled = ' + hole4x2Filled);
//       });
//     }
//     if ((hole3x2Filled === 'white') && (clicks === 0) && (hole6x2Filled !== 'white') && (hole5x2Filled !== 'white') && (hole4x2Filled !== 'white')) {
//       $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
//         $('#hole3x2').css('background-color', '#ff0000');
//         hole3x2Filled = 'red';
//         console.log('Hole 3x2 filled = ' + hole3x2Filled);
//       });
//     }
//     if ((hole2x2Filled === 'white') && (clicks === 0) && (hole6x2Filled !== 'white') && (hole5x2Filled !== 'white') && (hole4x2Filled !== 'white') && (hole3x2Filled !== 'white')) {
//       $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
//         $('#hole2x2').css('background-color', '#ff0000');
//         hole2x2Filled = 'red';
//         console.log('Hole 2x2 filled = ' + hole2x2Filled);
//       });
//     }
//     if ((hole1x2Filled === 'white') && (clicks === 0) && (hole6x2Filled !== 'white') && (hole5x2Filled !== 'white') && (hole4x2Filled !== 'white') && (hole3x2Filled !== 'white') && (hole2x2Filled !== 'white')) {
//       $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
//         $('#hole1x2').css('background-color', '#ff0000');
//         hole1x2Filled = 'red';
//         console.log('Hole 1x2 filled = ' + hole1x2Filled);
//         $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').mouseover(function() {
//           $('#drop-hole2').css('background-color', '#fff');
//         });
//       });
//     }
//   }
//   if ((clicks === 1) && (hole1x2Filled === 'white')) {
//     $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').mouseover(function() {
//       $('#drop-hole2').css('background-color', '#000');
//     });
//     $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').mouseout(function() {
//       $('#drop-hole2').css('background-color', '#fff');
//     });
//     if ((hole6x2Filled === 'white') && (clicks === 1)) {
//       $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
//         $('#hole6x2').css('background-color', '#000');
//         hole6x2Filled = 'black';
//         console.log('Hole 6x2 filled = ' + hole6x2Filled);
//       });
//     }
//     if ((hole5x2Filled === 'white') && (clicks === 1) && (hole6x2Filled !== 'white')) {
//       $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
//         $('#hole5x2').css('background-color', '#000');
//         hole5x2Filled = 'black';
//         console.log('Hole 5x2 filled = ' + hole5x2Filled);
//       });
//     }
//     if ((hole4x2Filled === 'white') && (clicks === 1) && (hole6x2Filled !== 'white') && (hole5x2Filled !== 'white')) {
//       $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
//         $('#hole4x2').css('background-color', '#000');
//         hole4x2Filled = 'black';
//         console.log('Hole 4x2 filled = ' + hole4x2Filled);
//       });
//     }
//     if ((hole3x2Filled === 'white') && (clicks === 1) && (hole6x2Filled !== 'white') && (hole5x2Filled !== 'white') && (hole4x2Filled !== 'white')) {
//       $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
//         $('#hole3x2').css('background-color', '#000');
//         hole3x2Filled = 'black';
//         console.log('Hole 3x2 filled = ' + hole3x2Filled);
//       });
//     }
//     if ((hole2x2Filled === 'white') && (clicks === 1) && (hole6x2Filled !== 'white') && (hole5x2Filled !== 'white') && (hole4x2Filled !== 'white') && (hole3x2Filled !== 'white')) {
//       $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
//         $('#hole2x2').css('background-color', '#000');
//         hole2x2Filled = 'black';
//         console.log('Hole 2x2 filled = ' + hole2x2Filled);
//       });
//     }
//     if ((hole1x2Filled === 'white') && (clicks === 1) && (hole6x2Filled !== 'white') && (hole5x2Filled !== 'white') && (hole4x2Filled !== 'white') && (hole3x2Filled !== 'white') && (hole2x2Filled !== 'white')) {
//       $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
//         $('#hole1x2').css('background-color', '#000');
//         hole1x2Filled = 'black';
//         console.log('Hole 1x2 filled = ' + hole1x2Filled);
//         $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').mouseover(function() {
//           $('#drop-hole2').css('background-color', '#fff');
//         });
//       });
//     }
//   }

//   // COLUMN 3 COLUMN 3 COLUMN 3 COLUMN 3
//   if ((clicks === 0) && (hole1x3Filled === 'white')) {
//     $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').mouseover(function() {
//       $('#drop-hole3').css('background-color', '#ff0000');
//     });
//     $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').mouseout(function() {
//       $('#drop-hole3').css('background-color', '#fff');
//     });
//     if ((hole6x3Filled === 'white') && (clicks === 0)) {
//       $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').on('click', function () {
//         $('#hole6x3').css('background-color', '#ff0000');
//         hole6x3Filled = 'red';
//         console.log('Hole 6x3 filled = ' + hole6x3Filled);
//       });
//     }
//     if ((hole5x3Filled === 'white') && (clicks === 0) && (hole6x3Filled !== 'white')) {
//       $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').on('click', function () {
//         $('#hole5x3').css('background-color', '#ff0000');
//         hole5x3Filled = 'red';
//         console.log('Hole 5x3 filled = ' + hole5x3Filled);
//       });
//     }
//     if ((hole4x3Filled === 'white') && (clicks === 0) && (hole6x3Filled !== 'white') && (hole5x3Filled !== 'white')) {
//       $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').on('click', function () {
//         $('#hole4x3').css('background-color', '#ff0000');
//         hole4x3Filled = 'red';
//         console.log('Hole 4x3 filled = ' + hole4x3Filled);
//       });
//     }
//     if ((hole3x3Filled === 'white') && (clicks === 0) && (hole6x3Filled !== 'white') && (hole5x3Filled !== 'white') && (hole4x3Filled !== 'white')) {
//       $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').on('click', function () {
//         $('#hole3x3').css('background-color', '#ff0000');
//         hole3x3Filled = 'red';
//         console.log('Hole 3x3 filled = ' + hole3x3Filled);
//       });
//     }
//     if ((hole2x3Filled === 'white') && (clicks === 0) && (hole6x3Filled !== 'white') && (hole5x3Filled !== 'white') && (hole4x3Filled !== 'white') && (hole3x3Filled !== 'white')) {
//       $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').on('click', function () {
//         $('#hole2x3').css('background-color', '#ff0000');
//         hole2x3Filled = 'red';
//         console.log('Hole 2x3 filled = ' + hole2x3Filled);
//       });
//     }
//     if ((hole1x3Filled === 'white') && (clicks === 0) && (hole6x3Filled !== 'white') && (hole5x3Filled !== 'white') && (hole4x3Filled !== 'white') && (hole3x3Filled !== 'white') && (hole2x3Filled !== 'white')) {
//       $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').on('click', function () {
//         $('#hole1x3').css('background-color', '#ff0000');
//         hole1x3Filled = 'red';
//         console.log('Hole 1x3 filled = ' + hole1x3Filled);
//         $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').mouseover(function() {
//           $('#drop-hole3').css('background-color', '#fff');
//         });
//       });
//     }
//   }
//   if ((clicks === 1) && (hole1x3Filled === 'white')) {
//     $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').mouseover(function() {
//       $('#drop-hole3').css('background-color', '#000');
//     });
//     $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').mouseout(function() {
//       $('#drop-hole3').css('background-color', '#fff');
//     });
//     if ((hole6x3Filled === 'white') && (clicks === 1)) {
//       $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').on('click', function () {
//         $('#hole6x3').css('background-color', '#000');
//         hole6x3Filled = 'black';
//         console.log('Hole 6x3 filled = ' + hole6x3Filled);
//       });
//     }
//     if ((hole5x3Filled === 'white') && (clicks === 1) && (hole6x3Filled !== 'white')) {
//       $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').on('click', function () {
//         $('#hole5x3').css('background-color', '#000');
//         hole5x3Filled = 'black';
//         console.log('Hole 5x3 filled = ' + hole5x3Filled);
//       });
//     }
//     if ((hole4x3Filled === 'white') && (clicks === 1) && (hole6x3Filled !== 'white') && (hole5x3Filled !== 'white')) {
//       $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').on('click', function () {
//         $('#hole4x3').css('background-color', '#000');
//         hole4x3Filled = 'black';
//         console.log('Hole 4x3 filled = ' + hole4x3Filled);
//       });
//     }
//     if ((hole3x3Filled === 'white') && (clicks === 1) && (hole6x3Filled !== 'white') && (hole5x3Filled !== 'white') && (hole4x3Filled !== 'white')) {
//       $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').on('click', function () {
//         $('#hole3x3').css('background-color', '#000');
//         hole3x3Filled = 'black';
//         console.log('Hole 3x3 filled = ' + hole3x3Filled);
//       });
//     }
//     if ((hole2x3Filled === 'white') && (clicks === 1) && (hole6x3Filled !== 'white') && (hole5x3Filled !== 'white') && (hole4x3Filled !== 'white') && (hole3x3Filled !== 'white')) {
//       $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').on('click', function () {
//         $('#hole2x3').css('background-color', '#000');
//         hole2x3Filled = 'black';
//         console.log('Hole 2x3 filled = ' + hole2x3Filled);
//       });
//     }
//     if ((hole1x3Filled === 'white') && (clicks === 1) && (hole6x3Filled !== 'white') && (hole5x3Filled !== 'white') && (hole4x3Filled !== 'white') && (hole3x3Filled !== 'white') && (hole2x3Filled !== 'white')) {
//       $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').on('click', function () {
//         $('#hole1x3').css('background-color', '#000');
//         hole1x3Filled = 'black';
//         console.log('Hole 1x3 filled = ' + hole1x3Filled);
//         $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3').mouseover(function() {
//           $('#drop-hole3').css('background-color', '#fff');
//         });
//       });
//     }
//   }
// });
