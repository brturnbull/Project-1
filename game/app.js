$(() =>{
  var score = 0;
  const $sloth = $('#sloth');
  const $burger1 = $('#b1');
  const $burger2 = $('#b2');
  const $burger3 = $('#b3');

  const $carrot1 = $('#c1');
  const $carrot2 = $('#c2');

  const $burgers = $('.burger');
  const $carrots = $('.carrot');

  var $scores = [];

  setInterval(function(){
    const $slothOffset = $sloth.offset();
    const $burgerOffset1 = $burger1.offset();
    const $burgerOffset2 = $burger2.offset();
    const $burgerOffset3 = $burger3.offset();

    const $carrotOffset1 = $carrot1.offset();
    const $carrotOffset2 = $carrot2.offset();

    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37:
          $sloth.css({ 'left': '-=50px' });
          break;
        case 39:
          $sloth.css({ 'left': '+=50px' });
          break;
      }
    };

// BURGER COLLISION - needs a sh**load of refactoring -- LOOP meeeee

    if ($burgerOffset1.left < $slothOffset.left + $sloth.width() &&
    $burgerOffset1.left + $burger1.width() > $slothOffset.left &&
    $burgerOffset1.top < $slothOffset.top + $sloth.height() &&
    $burger1.height() + $burgerOffset1.top > $slothOffset.top) {
      score += 10;
      $burger1.hide();
      setTimeout(function (){
        $burger1.show();
      },1000);
      $('#playerScore').text(score);
    }

    if ($burgerOffset2.left < $slothOffset.left + $sloth.width() &&
    $burgerOffset2.left + $burger2.width() > $slothOffset.left &&
    $burgerOffset2.top < $slothOffset.top + $sloth.height() &&
    $burger2.height() + $burgerOffset2.top > $slothOffset.top) {
      score += 10;
      $burger2.hide();
      setTimeout(function (){
        $burger2.show();
      },1000);
      $('#playerScore').text(score);
    }

    if ($burgerOffset3.left < $slothOffset.left + $sloth.width() &&
    $burgerOffset3.left + $burger3.width() > $slothOffset.left &&
    $burgerOffset3.top < $slothOffset.top + $sloth.height() &&
    $burger3.height() + $burgerOffset3.top > $slothOffset.top) {
      score += 10;
      $burger3.hide();
      setTimeout(function (){
        $burger3.show();
      },1000);
      $('#playerScore').text(score);
    }

    // CARROT COLLISION - needs a sh**load of refactoring -- LOOP

    if ($carrotOffset1.left < $slothOffset.left + $sloth.width() &&
    $carrotOffset1.left + $carrot1.width() > $slothOffset.left &&
    $carrotOffset1.top < $slothOffset.top + $sloth.height() &&
    $carrot1.height() + $carrotOffset1.top > $slothOffset.top) {
      score -= 5;
      $carrot1.hide();
      setTimeout(function (){
        $carrot1.show();
      },1000);
      $('#playerScore').text(score);
    }

    if ($carrotOffset2.left < $slothOffset.left + $sloth.width() &&
    $carrotOffset2.left + $carrot2.width() > $slothOffset.left &&
    $carrotOffset2.top < $slothOffset.top + $sloth.height() &&
    $carrot2.height() + $carrotOffset2.top > $slothOffset.top) {
      score -= 5;
      $carrot2.hide();
      setTimeout(function (){
        $carrot2.show();
      },1000);
      $('#playerScore').text(score);
    }

}, 10);

// GAME TIMER: After 30 seconds, hide carrots/burgers and show score

  setTimeout(function (){
    $('#modalGame').show();
    $('.playerScore1').text(score);
    $scores.push(score);
    $burgers.hide();
    $carrots.hide();
  }, 30000);

// If player chooses to play again; push their score to the array for leaderboard and refresh values
  $('#playAgain').on('click', (e) => {
    $('#modalGame').hide();
    $scores.push($('#playerScore'));
    console.log($scores);
    score = 0;
    $('#playerScore').text(score);
    $burgers.show();
    $carrots.show();
    setTimeout(function (){
      $('#modalGame').show();
      $('.playerScore1').text(score);
      $scores.push(score);
      $burgers.hide();
      $carrots.hide();
    }, 30000);
  });


// If player chooses leaderboard, close score modal and show the leaderboard **with music**

});
