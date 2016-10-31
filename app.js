'use strict';

var clicks = 0;


$('#1x1, #1x2, #1x3, #1x4, #1x5, #1x6, #1x7, #2x1, #2x2, #2x3, #2x4, #2x5, #2x6, #2x7, #3x1, #3x2, #3x3, #3x4, #3x5, #3x6, #3x7, #4x1, #4x2, #4x3, #4x4, #4x5, #4x6, #4x7, #5x1, #5x2, #5x3, #5x4, #5x5, #5x6,  #5x7, #6x1, #6x2, #6x3, #6x4, #6x5, #6x6, #6x7').on('click', function() {
  clicks++;
  if (clicks > 1) {
    clicks = 0;
  }
  console.log('The user has clicked ' + clicks + ' times.');
});

$('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').on('click', function() {
  $('#hole1x1').css('background-color', 'red');
});

$('#1x1, #1x2, #1x3, #1x4, #1x5, #1x6, #1x7, #2x1, #2x2, #2x3, #2x4, #2x5, #2x6, #2x7, #3x1, #3x2, #3x3, #3x4, #3x5, #3x6, #3x7, #4x1, #4x2, #4x3, #4x4, #4x5, #4x6, #4x7, #5x1, #5x2, #5x3, #5x4, #5x5, #5x6,  #5x7, #6x1, #6x2, #6x3, #6x4, #6x5, #6x6, #6x7').mouseover(function() {
  if (clicks === 0) {
    // 1 X 1
    $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').mouseover(function() {
      $('#hole1x1').css('background-color', 'red');
    });
    $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').mouseout(function() {
      $('#hole1x1').css('background-color', 'white');
    });
  } if (clicks === 1) {
    $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').mouseover(function() {
      $('#hole1x1').css('background-color', 'black');
    });
    $('#1x1, #2x1, #3x1, #4x1, #5x1, #6x1, #7x1').mouseout(function() {
      $('#hole1x1').css('background-color', 'white');
    });
  }
  if (clicks === 0) {
    // 1 X 2
    $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2, #7x2').mouseover(function() {
      $('#hole1x2').css('background-color', 'red');
    });
    $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2, #7x2').mouseout(function() {
      $('#hole1x2').css('background-color', 'white');
    });
  } if (clicks === 1) {
    $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2, #7x2').mouseover(function() {
      $('#hole1x2').css('background-color', 'black');
    });
    $('#1x2, #2x2, #3x2, #4x2, #5x2, #6x2, #7x2').mouseout(function() {
      $('#hole1x2').css('background-color', 'white');
    });
  }
  // 1 X 3
  if (clicks === 0) {
    $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3, #7x3').mouseover(function() {
      $('#hole1x3').css('background-color', 'red');
    });
    $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3, #7x3').mouseout(function() {
      $('#hole1x3').css('background-color', 'white');
    });
  } if (clicks === 1) {
    $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3, #7x3').mouseover(function() {
      $('#hole1x3').css('background-color', 'black');
    });
    $('#1x3, #2x3, #3x3, #4x3, #5x3, #6x3, #7x3').mouseout(function() {
      $('#hole1x3').css('background-color', 'white');
    });
  }
  if (clicks === 0) {
    // 1 X 4
    $('#1x4, #2x4, #3x4, #4x4, #5x4, #6x4, #7x4').mouseover(function() {
      $('#hole1x4').css('background-color', 'red');
    });
    $('#1x4, #2x4, #3x4, #4x4, #5x4, #6x4, #7x4').mouseout(function() {
      $('#hole1x4').css('background-color', 'white');
    });
  } else {
    $('#1x4, #2x4, #3x4, #4x4, #5x4, #6x4, #7x4').mouseover(function() {
      $('#hole1x4').css('background-color', 'black');
    });
    $('#1x4, #2x4, #3x4, #4x4, #5x4, #6x4, #7x4').mouseout(function() {
      $('#hole1x4').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 1 X 5
    $('#1x5, #2x5, #3x5, #4x5, #5x5, #6x5, #7x5').mouseover(function() {
      $('#hole1x5').css('background-color', 'red');
    });
    $('#1x5, #2x5, #3x5, #4x5, #5x5, #6x5, #7x5').mouseout(function() {
      $('#hole1x5').css('background-color', 'white');
    });
  } else {
    $('#1x5, #2x5, #3x5, #4x5, #5x5, #6x5, #7x5').mouseover(function() {
      $('#hole1x5').css('background-color', 'black');
    });
    $('#1x5, #2x5, #3x5, #4x5, #5x5, #6x5, #7x5').mouseout(function() {
      $('#hole1x5').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 1 X 6
    $('#1x6, #2x6, #3x6, #4x6, #5x6, #6x6, #7x6').mouseover(function() {
      $('#hole1x6').css('background-color', 'red');
    });
    $('#1x6, #2x6, #3x6, #4x6, #5x6, #6x6, #7x6').mouseout(function() {
      $('#hole1x6').css('background-color', 'white');
    });
  } else {
    $('#1x6, #2x6, #3x6, #4x6, #5x6, #6x6, #7x6').mouseover(function() {
      $('#hole1x6').css('background-color', 'black');
    });
    $('#1x6, #2x6, #3x6, #4x6, #5x6, #6x6, #7x6').mouseout(function() {
      $('#hole1x6').css('background-color', 'white');
    });
  }if (clicks === 0) {
    // 1 X 7
    $('#1x7, #2x7, #3x7, #4x7, #5x7, #6x7, #7x7').mouseover(function() {
      $('#hole1x7').css('background-color', 'red');
    });
    $('#1x7, #2x7, #3x7, #4x7, #5x7, #6x7, #7x7').mouseout(function() {
      $('#hole1x7').css('background-color', 'white');
    });
  } else {
    $('#1x7, #2x7, #3x7, #4x7, #5x7, #6x7, #7x7').mouseover(function() {
      $('#hole1x7').css('background-color', 'black');
    });
    $('#1x7, #2x7, #3x7, #4x7, #5x7, #6x7, #7x7').mouseout(function() {
      $('#hole1x7').css('background-color', 'white');
    });
  };
});
