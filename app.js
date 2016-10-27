'use strict';

var clicks = 0;


$('#1x1, #1x2, #1x3, #1x4, #1x5, #1x6, #1x7, #2x1, #2x2, #2x3, #2x4, #2x5, #2x6, #2x7, #3x1, #3x2, #3x3, #3x4, #3x5, #3x6, #3x7, #4x1, #4x2, #4x3, #4x4, #4x5, #4x6, #4x7, #5x1, #5x2, #5x3, #5x4, #5x5, #5x6,  #5x7, #6x1, #6x2, #6x3, #6x4, #6x5, #6x6, #6x7').on('click', function() {
  clicks++;
  if (clicks > 1) {
    clicks = 0;
  }
  console.log('The user has clicked ' + clicks + ' times.');
});

$('#1x1, #1x2, #1x3, #1x4, #1x5, #1x6, #1x7, #2x1, #2x2, #2x3, #2x4, #2x5, #2x6, #2x7, #3x1, #3x2, #3x3, #3x4, #3x5, #3x6, #3x7, #4x1, #4x2, #4x3, #4x4, #4x5, #4x6, #4x7, #5x1, #5x2, #5x3, #5x4, #5x5, #5x6,  #5x7, #6x1, #6x2, #6x3, #6x4, #6x5, #6x6, #6x7').mouseover(function() {
  if (clicks === 0) {
    // 1 X 1
    $('#1x1').mouseover(function() {
      $('#hole1x1').css('background-color', 'red');
    });
    $('#1x1').mouseout(function() {
      $('#hole1x1').css('background-color', 'white');
    });
  } else {
    $('#1x1').mouseover(function() {
      $('#hole1x1').css('background-color', 'black');
    });
    $('#1x1').mouseout(function() {
      $('#hole1x1').css('background-color', 'white');
    });
  }
  if (clicks === 0) {
    // 1 X 2
    $('#1x2').mouseover(function() {
      $('#hole1x2').css('background-color', 'red');
    });
    $('#1x2').mouseout(function() {
      $('#hole1x2').css('background-color', 'white');
    });
  } else {
    $('#1x2').mouseover(function() {
      $('#hole1x2').css('background-color', 'black');
    });
    $('#1x2').mouseout(function() {
      $('#hole1x2').css('background-color', 'white');
    });
  }
  if (clicks === 0) {
    // 1 X 3
    $('#1x3').mouseover(function() {
      $('#hole1x3').css('background-color', 'red');
    });
    $('#1x3').mouseout(function() {
      $('#hole1x3').css('background-color', 'white');
    });
  } else {
    $('#1x3').mouseover(function() {
      $('#hole1x3').css('background-color', 'black');
    });
    $('#1x3').mouseout(function() {
      $('#hole1x3').css('background-color', 'white');
    });
  }
  if (clicks === 0) {
    // 1 X 4
    $('#1x4').mouseover(function() {
      $('#hole1x4').css('background-color', 'red');
    });
    $('#1x4').mouseout(function() {
      $('#hole1x4').css('background-color', 'white');
    });
  } else {
    $('#1x4').mouseover(function() {
      $('#hole1x4').css('background-color', 'black');
    });
    $('#1x4').mouseout(function() {
      $('#hole1x4').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 1 X 5
    $('#1x5').mouseover(function() {
      $('#hole1x5').css('background-color', 'red');
    });
    $('#1x5').mouseout(function() {
      $('#hole1x5').css('background-color', 'white');
    });
  } else {
    $('#1x5').mouseover(function() {
      $('#hole1x5').css('background-color', 'black');
    });
    $('#1x5').mouseout(function() {
      $('#hole1x5').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 1 X 6
    $('#1x6').mouseover(function() {
      $('#hole1x6').css('background-color', 'red');
    });
    $('#1x6').mouseout(function() {
      $('#hole1x6').css('background-color', 'white');
    });
  } else {
    $('#1x6').mouseover(function() {
      $('#hole1x6').css('background-color', 'black');
    });
    $('#1x6').mouseout(function() {
      $('#hole1x6').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 1 X 7
    $('#1x7').mouseover(function() {
      $('#hole1x7').css('background-color', 'red');
    });
    $('#1x7').mouseout(function() {
      $('#hole1x7').css('background-color', 'white');
    });
  } else {
    $('#1x7').mouseover(function() {
      $('#hole1x7').css('background-color', 'black');
    });
    $('#1x7').mouseout(function() {
      $('#hole1x7').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 2 X 1
    $('#2x1').mouseover(function() {
      $('#hole2x1').css('background-color', 'red');
    });
    $('#2x1').mouseout(function() {
      $('#hole2x1').css('background-color', 'white');
    });
  } else {
    $('#2x1').mouseover(function() {
      $('#hole2x1').css('background-color', 'black');
    });
    $('#2x1').mouseout(function() {
      $('#hole2x1').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 2 X 2
    $('#2x2').mouseover(function() {
      $('#hole2x2').css('background-color', 'red');
    });
    $('#2x2').mouseout(function() {
      $('#hole2x2').css('background-color', 'white');
    });
  } else {
    $('#2x2').mouseover(function() {
      $('#hole2x2').css('background-color', 'black');
    });
    $('#2x2').mouseout(function() {
      $('#hole2x2').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 2 X 3
    $('#2x3').mouseover(function() {
      $('#hole2x3').css('background-color', 'red');
    });
    $('#2x3').mouseout(function() {
      $('#hole2x3').css('background-color', 'white');
    });
  } else {
    $('#2x3').mouseover(function() {
      $('#hole2x3').css('background-color', 'black');
    });
    $('#2x3').mouseout(function() {
      $('#hole2x3').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 2 X 4
    $('#2x4').mouseover(function() {
      $('#hole2x4').css('background-color', 'red');
    });
    $('#2x4').mouseout(function() {
      $('#hole2x4').css('background-color', 'white');
    });
  } else {
    $('#2x4').mouseover(function() {
      $('#hole2x4').css('background-color', 'black');
    });
    $('#2x4').mouseout(function() {
      $('#hole2x4').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 2 X 5
    $('#2x5').mouseover(function() {
      $('#hole2x5').css('background-color', 'red');
    });
    $('#2x5').mouseout(function() {
      $('#hole2x5').css('background-color', 'white');
    });
  } else {
    $('#2x5').mouseover(function() {
      $('#hole2x5').css('background-color', 'black');
    });
    $('#2x5').mouseout(function() {
      $('#hole2x5').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 2 X 6
    $('#2x6').mouseover(function() {
      $('#hole2x6').css('background-color', 'red');
    });
    $('#2x6').mouseout(function() {
      $('#hole2x6').css('background-color', 'white');
    });
  } else {
    $('#2x6').mouseover(function() {
      $('#hole2x6').css('background-color', 'black');
    });
    $('#2x6').mouseout(function() {
      $('#hole2x6').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 2 X 7
    $('#2x7').mouseover(function() {
      $('#hole2x7').css('background-color', 'red');
    });
    $('#2x7').mouseout(function() {
      $('#hole2x7').css('background-color', 'white');
    });
  } else {
    $('#2x7').mouseover(function() {
      $('#hole2x7').css('background-color', 'black');
    });
    $('#2x7').mouseout(function() {
      $('#hole2x7').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 3 X 1
    $('#3x1').mouseover(function() {
      $('#hole3x1').css('background-color', 'red');
    });
    $('#3x1').mouseout(function() {
      $('#hole3x1').css('background-color', 'white');
    });
  } else {
    $('#3x1').mouseover(function() {
      $('#hole3x1').css('background-color', 'black');
    });
    $('#3x1').mouseout(function() {
      $('#hole3x1').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 3 X 2
    $('#3x2').mouseover(function() {
      $('#hole3x2').css('background-color', 'red');
    });
    $('#3x2').mouseout(function() {
      $('#hole3x2').css('background-color', 'white');
    });
  } else {
    $('#3x2').mouseover(function() {
      $('#hole3x2').css('background-color', 'black');
    });
    $('#3x2').mouseout(function() {
      $('#hole3x2').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 3 X 3
    $('#3x3').mouseover(function() {
      $('#hole3x3').css('background-color', 'red');
    });
    $('#3x3').mouseout(function() {
      $('#hole3x3').css('background-color', 'white');
    });
  } else {
    $('#3x3').mouseover(function() {
      $('#hole3x3').css('background-color', 'black');
    });
    $('#3x3').mouseout(function() {
      $('#hole3x3').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 3 X 4
    $('#3x4').mouseover(function() {
      $('#hole3x4').css('background-color', 'red');
    });
    $('#3x4').mouseout(function() {
      $('#hole3x4').css('background-color', 'white');
    });
  } else {
    $('#3x4').mouseover(function() {
      $('#hole3x4').css('background-color', 'black');
    });
    $('#3x4').mouseout(function() {
      $('#hole3x4').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 3 X 5
    $('#3x5').mouseover(function() {
      $('#hole3x5').css('background-color', 'red');
    });
    $('#3x5').mouseout(function() {
      $('#hole3x5').css('background-color', 'white');
    });
  } else {
    $('#3x5').mouseover(function() {
      $('#hole3x5').css('background-color', 'black');
    });
    $('#3x5').mouseout(function() {
      $('#hole3x5').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 3 X 6
    $('#3x6').mouseover(function() {
      $('#hole3x6').css('background-color', 'red');
    });
    $('#3x6').mouseout(function() {
      $('#hole3x6').css('background-color', 'white');
    });
  } else {
    $('#3x6').mouseover(function() {
      $('#hole3x6').css('background-color', 'black');
    });
    $('#3x6').mouseout(function() {
      $('#hole3x6').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 3 X 7
    $('#3x7').mouseover(function() {
      $('#hole3x7').css('background-color', 'red');
    });
    $('#3x7').mouseout(function() {
      $('#hole3x7').css('background-color', 'white');
    });
  } else {
    $('#3x7').mouseover(function() {
      $('#hole3x7').css('background-color', 'black');
    });
    $('#3x7').mouseout(function() {
      $('#hole3x7').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 4 X 1
    $('#4x1').mouseover(function() {
      $('#hole4x1').css('background-color', 'red');
    });
    $('#4x1').mouseout(function() {
      $('#hole4x1').css('background-color', 'white');
    });
  } else {
    $('#4x1').mouseover(function() {
      $('#hole4x1').css('background-color', 'black');
    });
    $('#4x1').mouseout(function() {
      $('#hole4x1').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 4 X 2
    $('#4x2').mouseover(function() {
      $('#hole4x2').css('background-color', 'red');
    });
    $('#4x2').mouseout(function() {
      $('#hole4x2').css('background-color', 'white');
    });
  } else {
    $('#4x2').mouseover(function() {
      $('#hole4x2').css('background-color', 'black');
    });
    $('#4x2').mouseout(function() {
      $('#hole4x2').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 4 X 3
    $('#4x3').mouseover(function() {
      $('#hole4x3').css('background-color', 'red');
    });
    $('#4x3').mouseout(function() {
      $('#hole4x3').css('background-color', 'white');
    });
  } else {
    $('#4x3').mouseover(function() {
      $('#hole4x3').css('background-color', 'black');
    });
    $('#4x3').mouseout(function() {
      $('#hole4x3').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 4 X 4
    $('#4x4').mouseover(function() {
      $('#hole4x4').css('background-color', 'red');
    });
    $('#4x4').mouseout(function() {
      $('#hole4x4').css('background-color', 'white');
    });
  } else {
    $('#4x4').mouseover(function() {
      $('#hole4x4').css('background-color', 'black');
    });
    $('#4x4').mouseout(function() {
      $('#hole4x4').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 4 X 5
    $('#4x5').mouseover(function() {
      $('#hole4x5').css('background-color', 'red');
    });
    $('#4x5').mouseout(function() {
      $('#hole4x5').css('background-color', 'white');
    });
  } else {
    $('#4x5').mouseover(function() {
      $('#hole4x5').css('background-color', 'black');
    });
    $('#4x5').mouseout(function() {
      $('#hole4x5').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 4 X 6
    $('#4x6').mouseover(function() {
      $('#hole4x6').css('background-color', 'red');
    });
    $('#4x6').mouseout(function() {
      $('#hole4x6').css('background-color', 'white');
    });
  } else {
    $('#4x6').mouseover(function() {
      $('#hole4x6').css('background-color', 'black');
    });
    $('#4x6').mouseout(function() {
      $('#hole4x6').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 4 X 7
    $('#4x7').mouseover(function() {
      $('#hole4x7').css('background-color', 'red');
    });
    $('#4x7').mouseout(function() {
      $('#hole4x7').css('background-color', 'white');
    });
  } else {
    $('#4x7').mouseover(function() {
      $('#hole4x7').css('background-color', 'black');
    });
    $('#4x7').mouseout(function() {
      $('#hole4x7').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 5 X 1
    $('#5x1').mouseover(function() {
      $('#hole5x1').css('background-color', 'red');
    });
    $('#5x1').mouseout(function() {
      $('#hole5x1').css('background-color', 'white');
    });
  } else {
    $('#5x1').mouseover(function() {
      $('#hole5x1').css('background-color', 'black');
    });
    $('#5x1').mouseout(function() {
      $('#hole5x1').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 5 X 2
    $('#5x2').mouseover(function() {
      $('#hole5x2').css('background-color', 'red');
    });
    $('#5x2').mouseout(function() {
      $('#hole5x2').css('background-color', 'white');
    });
  } else {
    $('#5x2').mouseover(function() {
      $('#hole5x2').css('background-color', 'black');
    });
    $('#5x2').mouseout(function() {
      $('#hole5x2').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 5 X 3
    $('#5x3').mouseover(function() {
      $('#hole5x3').css('background-color', 'red');
    });
    $('#5x3').mouseout(function() {
      $('#hole5x3').css('background-color', 'white');
    });
  } else {
    $('#5x3').mouseover(function() {
      $('#hole5x3').css('background-color', 'black');
    });
    $('#5x3').mouseout(function() {
      $('#hole5x3').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 5 X 4
    $('#5x4').mouseover(function() {
      $('#hole5x4').css('background-color', 'red');
    });
    $('#5x4').mouseout(function() {
      $('#hole5x4').css('background-color', 'white');
    });
  } else {
    $('#5x4').mouseover(function() {
      $('#hole5x4').css('background-color', 'black');
    });
    $('#5x4').mouseout(function() {
      $('#hole5x4').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 5 X 5
    $('#5x5').mouseover(function() {
      $('#hole5x5').css('background-color', 'red');
    });
    $('#5x5').mouseout(function() {
      $('#hole5x5').css('background-color', 'white');
    });
  } else {
    $('#5x5').mouseover(function() {
      $('#hole5x5').css('background-color', 'black');
    });
    $('#5x5').mouseout(function() {
      $('#hole5x5').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 5 X 6
    $('#5x6').mouseover(function() {
      $('#hole5x6').css('background-color', 'red');
    });
    $('#5x6').mouseout(function() {
      $('#hole5x6').css('background-color', 'white');
    });
  } else {
    $('#5x6').mouseover(function() {
      $('#hole5x6').css('background-color', 'black');
    });
    $('#5x6').mouseout(function() {
      $('#hole5x6').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 5 X 7
    $('#5x7').mouseover(function() {
      $('#hole5x7').css('background-color', 'red');
    });
    $('#5x7').mouseout(function() {
      $('#hole5x7').css('background-color', 'white');
    });
  } else {
    $('#5x7').mouseover(function() {
      $('#hole5x7').css('background-color', 'black');
    });
    $('#5x7').mouseout(function() {
      $('#hole5x7').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 6 X 1
    $('#6x1').mouseover(function() {
      $('#hole6x1').css('background-color', 'red');
    });
    $('#6x1').mouseout(function() {
      $('#hole6x1').css('background-color', 'white');
    });
  } else {
    $('#6x1').mouseover(function() {
      $('#hole6x1').css('background-color', 'black');
    });
    $('#6x1').mouseout(function() {
      $('#hole6x1').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 6 X 2
    $('#6x2').mouseover(function() {
      $('#hole6x2').css('background-color', 'red');
    });
    $('#6x2').mouseout(function() {
      $('#hole6x2').css('background-color', 'white');
    });
  } else {
    $('#6x2').mouseover(function() {
      $('#hole6x2').css('background-color', 'black');
    });
    $('#6x2').mouseout(function() {
      $('#hole6x2').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 6 X 3
    $('#6x3').mouseover(function() {
      $('#hole6x3').css('background-color', 'red');
    });
    $('#6x3').mouseout(function() {
      $('#hole6x3').css('background-color', 'white');
    });
  } else {
    $('#6x3').mouseover(function() {
      $('#hole6x3').css('background-color', 'black');
    });
    $('#6x3').mouseout(function() {
      $('#hole6x3').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 6 X 4
    $('#6x4').mouseover(function() {
      $('#hole6x4').css('background-color', 'red');
    });
    $('#6x4').mouseout(function() {
      $('#hole6x4').css('background-color', 'white');
    });
  } else {
    $('#6x4').mouseover(function() {
      $('#hole6x4').css('background-color', 'black');
    });
    $('#6x4').mouseout(function() {
      $('#hole6x4').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 6 X 5
    $('#6x5').mouseover(function() {
      $('#hole6x5').css('background-color', 'red');
    });
    $('#6x5').mouseout(function() {
      $('#hole6x5').css('background-color', 'white');
    });
  } else {
    $('#6x5').mouseover(function() {
      $('#hole6x5').css('background-color', 'black');
    });
    $('#6x5').mouseout(function() {
      $('#hole6x5').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 6 X 6
    $('#6x6').mouseover(function() {
      $('#hole6x6').css('background-color', 'red');
    });
    $('#6x6').mouseout(function() {
      $('#hole6x6').css('background-color', 'white');
    });
  } else {
    $('#6x6').mouseover(function() {
      $('#hole6x6').css('background-color', 'black');
    });
    $('#6x6').mouseout(function() {
      $('#hole6x6').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 6 X 7
    $('#6x7').mouseover(function() {
      $('#hole6x7').css('background-color', 'red');
    });
    $('#6x7').mouseout(function() {
      $('#hole6x7').css('background-color', 'white');
    });
  } else {
    $('#6x7').mouseover(function() {
      $('#hole6x7').css('background-color', 'black');
    });
    $('#6x7').mouseout(function() {
      $('#hole6x7').css('background-color', 'white');
    });
  }
});
