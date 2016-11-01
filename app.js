'use strict';

var clicks = 0;


$('#1x1, #1x2, #1x3, #1x4, #1x5, #1x6, #1x7, #2x1, #2x2, #2x3, #2x4, #2x5, #2x6, #2x7, #3x1, #3x2, #3x3, #3x4, #3x5, #3x6, #3x7, #4x1, #4x2, #4x3, #4x4, #4x5, #4x6, #4x7, #5x1, #5x2, #5x3, #5x4, #5x5, #5x6,  #5x7, #6x1, #6x2, #6x3, #6x4, #6x5, #6x6, #6x7').on('click', function() {
  clicks++;
  if (clicks > 1) {
    clicks = 0;
  }
  console.log('The user has clicked ' + clicks + ' times.');
});

var hole6x1Filled = 'white';
var hole5x1Filled = 'white';
var hole4x1Filled = 'white';
var hole3x1Filled = 'white';
var hole2x1Filled = 'white';
var hole1x1Filled = 'white';
var hole6x2Filled = 'white';
var hole5x2Filled = 'white';
var hole4x2Filled = 'white';
var hole3x2Filled = 'white';
var hole2x2Filled = 'white';
var hole1x2Filled = 'white';

$('#1x1, #1x2, #1x3, #1x4, #1x5, #1x6, #1x7, #2x1, #2x2, #2x3, #2x4, #2x5, #2x6, #2x7, #3x1, #3x2, #3x3, #3x4, #3x5, #3x6, #3x7, #4x1, #4x2, #4x3, #4x4, #4x5, #4x6, #4x7, #5x1, #5x2, #5x3, #5x4, #5x5, #5x6,  #5x7, #6x1, #6x2, #6x3, #6x4, #6x5, #6x6, #6x7').mouseover(function() {
  // COLUMN ONE
  if ((clicks === 0) && (hole1x1Filled === 'white')) {
    $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1').mouseover(function() {
      $('#hole1x1').css('background-color', '#ff0000');
    });
    $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').mouseout(function() {
      $('#hole1x1').css('background-color', '#fff');
    });
    if ((hole6x1Filled === 'white') && (clicks === 0)) {
      $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').on('click', function () {
        $('#hole6x1').css('background-color', '#ff0000');
        hole6x1Filled = 'red';
        console.log('Hole 6x1 filled = ' + hole6x1Filled);
      });
    }
    if ((hole5x1Filled === 'white') && (clicks === 0) && (hole6x1Filled !== 'white')) {
      $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').on('click', function () {
        $('#hole5x1').css('background-color', '#ff0000');
        hole5x1Filled = 'red';
        console.log('Hole 5x1 filled = ' + hole5x1Filled);
      });
    }
    if ((hole4x1Filled === 'white') && (clicks === 0) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white')) {
      $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').on('click', function () {
        $('#hole4x1').css('background-color', '#ff0000');
        hole4x1Filled = 'red';
        console.log('Hole 4x1 filled = ' + hole4x1Filled);
      });
    }
    if ((hole3x1Filled === 'white') && (clicks === 0) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white') && (hole4x1Filled !== 'white')) {
      $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').on('click', function () {
        $('#hole3x1').css('background-color', '#ff0000');
        hole3x1Filled = 'red';
        console.log('Hole 3x1 filled = ' + hole3x1Filled);
      });
    }
    if ((hole2x1Filled === 'white') && (clicks === 0) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white') && (hole4x1Filled !== 'white') && (hole3x1Filled !== 'white')) {
      $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').on('click', function () {
        $('#hole2x1').css('background-color', '#ff0000');
        hole2x1Filled = 'red';
        console.log('Hole 2x1 filled = ' + hole2x1Filled);
      });
    }
    if ((hole1x1Filled === 'white') && (clicks === 0) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white') && (hole4x1Filled !== 'white') && (hole3x1Filled !== 'white') && (hole2x1Filled !== 'white')) {
      $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').on('click', function () {
        $('#hole1x1').css('background-color', '#ff0000');
        hole1x1Filled = 'red';
        console.log('Hole 1x1 filled = ' + hole1x1Filled);
        $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').mouseout(function() {
          $('#hole1x1').css('background-color', '#ff0000');
        });
      });
    }
  }
  if ((clicks === 1) && (hole1x1Filled === 'white')) {
    $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').mouseover(function() {
      $('#hole1x1').css('background-color', '#000');
    });
    $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').mouseout(function() {
      $('#hole1x1').css('background-color', '#fff');
    });
    if ((hole6x1Filled === 'white') && (clicks === 1)) {
      $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').on('click', function () {
        $('#hole6x1').css('background-color', '#000');
        hole6x1Filled = 'black';
        console.log('Hole 6x1 filled = ' + hole6x1Filled);
      });
    }
    if ((hole5x1Filled === 'white') && (clicks === 1) && (hole6x1Filled !== 'white')) {
      $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').on('click', function () {
        $('#hole5x1').css('background-color', '#000');
        hole5x1Filled = 'black';
        console.log('Hole 5x1 filled = ' + hole5x1Filled);
      });
    }
    if ((hole4x1Filled === 'white') && (clicks === 1) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white')) {
      $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').on('click', function () {
        $('#hole4x1').css('background-color', '#000');
        hole4x1Filled = 'black';
        console.log('Hole 4x1 filled = ' + hole4x1Filled);
      });
    }
    if ((hole3x1Filled === 'white') && (clicks === 1) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white') && (hole4x1Filled !== 'white')) {
      $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').on('click', function () {
        $('#hole3x1').css('background-color', '#000');
        hole3x1Filled = 'black';
        console.log('Hole 3x1 filled = ' + hole3x1Filled);
      });
    }
    if ((hole2x1Filled === 'white') && (clicks === 1) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white') && (hole4x1Filled !== 'white') && (hole3x1Filled !== 'white')) {
      $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').on('click', function () {
        $('#hole2x1').css('background-color', '#000');
        hole2x1Filled = 'black';
        console.log('Hole 2x1 filled = ' + hole2x1Filled);
      });
    }
    if ((hole1x1Filled === 'white') && (clicks === 1) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white') && (hole4x1Filled !== 'white') && (hole3x1Filled !== 'white') && (hole2x1Filled !== 'white')) {
      $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').on('click', function () {
        $('#hole1x1').css('background-color', '#000');
        hole1x1Filled = 'black';
        console.log('Hole 1x1 filled = ' + hole1x1Filled);
        $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').mouseout(function() {
          $('#hole1x1').css('background-color', '#000');
        });
      });
    }
  }
  // COLUMN TWO
  if ((clicks === 0) && (hole1x2Filled === 'white')) {
    $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').mouseover(function() {
      $('#hole1x2').css('background-color', '#ff0000');
    });
    $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').mouseout(function() {
      $('#hole1x2').css('background-color', '#fff');
    });
    if ((hole6x2Filled === 'white') && (clicks === 0)) {
      $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
        $('#hole6x2').css('background-color', '#ff0000');
        hole6x2Filled = 'red';
        console.log('Hole 6x2 filled = ' + hole6x2Filled);
      });
    }
    if ((hole5x2Filled === 'white') && (clicks === 0) && (hole6x2Filled !== 'white')) {
      $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
        $('#hole5x2').css('background-color', '#ff0000');
        hole5x2Filled = 'red';
        console.log('Hole 5x2 filled = ' + hole5x2Filled);
      });
    }
    if ((hole4x2Filled === 'white') && (clicks === 0) && (hole6x2Filled !== 'white') && (hole5x2Filled !== 'white')) {
      $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
        $('#hole4x2').css('background-color', '#ff0000');
        hole4x2Filled = 'red';
        console.log('Hole 4x2 filled = ' + hole4x2Filled);
      });
    }
    if ((hole3x2Filled === 'white') && (clicks === 0) && (hole6x2Filled !== 'white') && (hole5x2Filled !== 'white') && (hole4x2Filled !== 'white')) {
      $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
        $('#hole3x2').css('background-color', '#ff0000');
        hole3x2Filled = 'red';
        console.log('Hole 3x2 filled = ' + hole3x2Filled);
      });
    }
    if ((hole2x2Filled === 'white') && (clicks === 0) && (hole6x2Filled !== 'white') && (hole5x2Filled !== 'white') && (hole4x2Filled !== 'white') && (hole3x2Filled !== 'white')) {
      $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
        $('#hole2x2').css('background-color', '#ff0000');
        hole2x2Filled = 'red';
        console.log('Hole 2x2 filled = ' + hole2x2Filled);
      });
    }
    if ((hole1x2Filled === 'white') && (clicks === 0) && (hole6x2Filled !== 'white') && (hole5x2Filled !== 'white') && (hole4x2Filled !== 'white') && (hole3x2Filled !== 'white') && (hole2x2Filled !== 'white')) {
      $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
        $('#hole1x2').css('background-color', '#ff0000');
        hole1x2Filled = 'red';
        console.log('Hole 1x2 filled = ' + hole1x2Filled);
        $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').mouseout(function() {
          $('#hole1x2').css('background-color', '#ff0000');
        });
      });
    }
  }
  if ((clicks === 1) && (hole1x2Filled === 'white')) {
    $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').mouseover(function() {
      $('#hole1x2').css('background-color', '#000');
    });
    $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').mouseout(function() {
      $('#hole1x2').css('background-color', '#fff');
    });
    if ((hole6x2Filled === 'white') && (clicks === 1)) {
      $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
        $('#hole6x2').css('background-color', '#000');
        hole6x2Filled = 'black';
        console.log('Hole 6x2 filled = ' + hole6x2Filled);
      });
    }
    if ((hole5x2Filled === 'white') && (clicks === 1) && (hole6x2Filled !== 'white')) {
      $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
        $('#hole5x2').css('background-color', '#000');
        hole5x2Filled = 'black';
        console.log('Hole 5x2 filled = ' + hole5x2Filled);
      });
    }
    if ((hole4x2Filled === 'white') && (clicks === 1) && (hole6x2Filled !== 'white') && (hole5x2Filled !== 'white')) {
      $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
        $('#hole4x2').css('background-color', '#000');
        hole4x2Filled = 'black';
        console.log('Hole 4x2 filled = ' + hole4x2Filled);
      });
    }
    if ((hole3x2Filled === 'white') && (clicks === 1) && (hole6x2Filled !== 'white') && (hole5x2Filled !== 'white') && (hole4x2Filled !== 'white')) {
      $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
        $('#hole3x2').css('background-color', '#000');
        hole3x2Filled = 'black';
        console.log('Hole 3x2 filled = ' + hole3x2Filled);
      });
    }
    if ((hole2x2Filled === 'white') && (clicks === 1) && (hole6x2Filled !== 'white') && (hole5x2Filled !== 'white') && (hole4x2Filled !== 'white') && (hole3x2Filled !== 'white')) {
      $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
        $('#hole2x2').css('background-color', '#000');
        hole2x2Filled = 'black';
        console.log('Hole 2x2 filled = ' + hole2x2Filled);
      });
    }
    if ((hole1x2Filled === 'white') && (clicks === 1) && (hole6x2Filled !== 'white') && (hole5x2Filled !== 'white') && (hole4x2Filled !== 'white') && (hole3x2Filled !== 'white') && (hole2x2Filled !== 'white')) {
      $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').on('click', function () {
        $('#hole1x2').css('background-color', '#000');
        hole1x2Filled = 'black';
        console.log('Hole 1x2 filled = ' + hole1x2Filled);
        $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2').mouseout(function() {
          $('#hole1x2').css('background-color', '#000');
        });
      });
    }
  }
});
//   if ((clicks === 1) && (hole1x2Filled === 'white')) {
//     $('#1x2, #2x2,').mouseover(function() {
//       $('#hole1x1').css('background-color', '#000');
//     });
//     $('#1x2, #2x2,').mouseout(function() {
//       $('#hole1x1').css('background-color', '#fff');
//     });
//     if ((hole6x1Filled === 'white') && (clicks === 1)) {
//       $('#1x2, #2x2,').on('click', function () {
//         $('#hole6x1').css('background-color', '#000');
//         hole6x1Filled = 'black';
//         console.log('Hole 6x1 filled = ' + hole6x1Filled);
//       });
//     }
//     if ((hole5x1Filled === 'white') && (clicks === 1) && (hole6x1Filled !== 'white')) {
//       $('#1x2, #2x2,').on('click', function () {
//         $('#hole5x1').css('background-color', '#000');
//         hole5x1Filled = 'black';
//         console.log('Hole 5x1 filled = ' + hole5x1Filled);
//       });
//     }
//     if ((hole4x1Filled === 'white') && (clicks === 1) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white')) {
//       $('#1x2, #2x2,').on('click', function () {
//         $('#hole4x1').css('background-color', '#000');
//         hole4x1Filled = 'black';
//         console.log('Hole 4x1 filled = ' + hole4x1Filled);
//       });
//     }
//     if ((hole3x1Filled === 'white') && (clicks === 1) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white') && (hole4x1Filled !== 'white')) {
//       $('#1x2, #2x2,').on('click', function () {
//         $('#hole3x1').css('background-color', '#000');
//         hole3x1Filled = 'black';
//         console.log('Hole 3x1 filled = ' + hole3x1Filled);
//       });
//     }
//     if ((hole2x1Filled === 'white') && (clicks === 1) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white') && (hole4x1Filled !== 'white') && (hole3x1Filled !== 'white')) {
//       $('#1x2, #2x2,').on('click', function () {
//         $('#hole2x1').css('background-color', '#000');
//         hole2x1Filled = 'black';
//         console.log('Hole 2x1 filled = ' + hole2x1Filled);
//       });
//     }
//     if ((hole1x2Filled === 'white') && (clicks === 1) && (hole6x1Filled !== 'white') && (hole5x1Filled !== 'white') && (hole4x1Filled !== 'white') && (hole3x1Filled !== 'white') && (hole2x1Filled !== 'white')) {
//       $('#1x2, #2x2,').on('click', function () {
//         $('#hole1x1').css('background-color', '#000');
//         hole1x2Filled = 'black';
//         console.log('Hole 1x1 filled = ' + hole1x2Filled);
//         $('#1x2, #2x2,').mouseout(function() {
//           $('#hole1x1').css('background-color', '#000');
//         });
//       });
//     }
//   }
// });
//   // 1 X 3
//   if (clicks === 0) {
//     $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3, #7x3').mouseover(function() {
//       $('#hole1x3').css('background-color', '#ff0000');
//     });
//     $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3, #7x3').mouseout(function() {
//       $('#hole1x3').css('background-color', '#fff');
//     });
//   }
//   if (clicks === 1) {
//     $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3, #7x3').mouseover(function() {
//       $('#hole1x3').css('background-color', '#000');
//     });
//     $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3, #7x3').mouseout(function() {
//       $('#hole1x3').css('background-color', '#fff');
//     });
//   }
//   if (clicks === 0) {
//     // 1 X 4
//     $('#1x4, #2x4, #3x4, #4x4, #5x4, #6x4, #7x4').mouseover(function() {
//       $('#hole1x4').css('background-color', '#ff0000');
//     });
//     $('#1x4, #2x4, #3x4, #4x4, #5x4, #6x4, #7x4').mouseout(function() {
//       $('#hole1x4').css('background-color', '#fff');
//     });
//   }
//   if (clicks === 1) {
//     $('#1x4, #2x4, #3x4, #4x4, #5x4, #6x4, #7x4').mouseover(function() {
//       $('#hole1x4').css('background-color', '#000');
//     });
//     $('#1x4, #2x4, #3x4, #4x4, #5x4, #6x4, #7x4').mouseout(function() {
//       $('#hole1x4').css('background-color', '#fff');
//     });
//   }if (clicks === 0) {
//     // 1 X 5
//     $('#1x5, #2x5, #3x5, #4x5, #5x5, #6x5, #7x5').mouseover(function() {
//       $('#hole1x5').css('background-color', '#ff0000');
//     });
//     $('#1x5, #2x5, #3x5, #4x5, #5x5, #6x5, #7x5').mouseout(function() {
//       $('#hole1x5').css('background-color', '#fff');
//     });
//   } else {
//     $('#1x5, #2x5, #3x5, #4x5, #5x5, #6x5, #7x5').mouseover(function() {
//       $('#hole1x5').css('background-color', '#000');
//     });
//     $('#1x5, #2x5, #3x5, #4x5, #5x5, #6x5, #7x5').mouseout(function() {
//       $('#hole1x5').css('background-color', '#fff');
//     });
//   }if (clicks === 0) {
//     // 1 X 6
//     $('#1x6, #2x6, #3x6, #4x6, #5x6, #6x6, #7x6').mouseover(function() {
//       $('#hole1x6').css('background-color', '#ff0000');
//     });
//     $('#1x6, #2x6, #3x6, #4x6, #5x6, #6x6, #7x6').mouseout(function() {
//       $('#hole1x6').css('background-color', '#fff');
//     });
//   } else {
//     $('#1x6, #2x6, #3x6, #4x6, #5x6, #6x6, #7x6').mouseover(function() {
//       $('#hole1x6').css('background-color', '#000');
//     });
//     $('#1x6, #2x6, #3x6, #4x6, #5x6, #6x6, #7x6').mouseout(function() {
//       $('#hole1x6').css('background-color', '#fff');
//     });
//   }if (clicks === 0) {
//     // 1 X 7
//     $('#1x7, #2x7, #3x7, #4x7, #5x7, #6x7, #7x7').mouseover(function() {
//       $('#hole1x7').css('background-color', '#ff0000');
//     });
//     $('#1x7, #2x7, #3x7, #4x7, #5x7, #6x7, #7x7').mouseout(function() {
//       $('#hole1x7').css('background-color', '#fff');
//     });
//   } else {
//     $('#1x7, #2x7, #3x7, #4x7, #5x7, #6x7, #7x7').mouseover(function() {
//       $('#hole1x7').css('background-color', '#000');
//     });
//     $('#1x7, #2x7, #3x7, #4x7, #5x7, #6x7, #7x7').mouseout(function() {
//       $('#hole1x7').css('background-color', '#fff');
//     });
//   };
// });
