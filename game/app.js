$(() =>{

  $('#modalStart').show();

  let score = 0;
  let $scores = [];
  let $currentPlayerScore;
  let $currentPlayer;

  const $sloth = $('#sloth');
  const $burgers = $('.burger'); // all burgers
  const $carrots = $('.carrot'); // all sloths

  $burgers.hide();
  $carrots.hide();

  $('#startGame').on('click', (e) => {
    // retrieve the value from the input button and push into $currentPlayer
    //  

  });

  function startGame() {
    setTimeout(function (){
      $('#modalGame').show();
      $('.playerScore1').text(score);
      $scores.push(score);
      $burgers.hide();
      $carrots.hide();
      clearInterval()
    }, 30000);
  }
// Countdown timer - starts at 4, decreases by 1 every  second and hide when
// it gets to zero

  let $timeIsRunning = false;
  const $startGameBtn = $('.btn-start');
  function startTimer() {
    let $counter = 4;
    let $interval = setInterval(function() {
      $counter--;
      $('.countdown').text($counter);
      if ($counter === 0) {
        clearInterval($interval);
        $('.countdown').hide();
        $burgers.show();
        $carrots.show();
        startGame();
      }
    }, 1000);
  }

// On start game button click, hide the start modal and start the countdown timer

  $startGameBtn.on('click', function() {
    $('#modalStart').hide();
    timeIsRunning = true;
    startTimer();
  });

  // SLOTH MOVING ON KEY DOWN

  setInterval(function(){
    const $slothOffset = $sloth.offset();

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

    // CARROTS COLLISION

    for (let i = 0; i < $burgers.length; i++) {
      if ($($burgers).offset().left < $slothOffset.left + $sloth.width() &&
      $($burgers[i]).offset().left + $($burgers[i]).width() > $slothOffset.left &&
      $($burgers[i]).offset().top < $slothOffset.top + $sloth.height() &&
      $($burgers[i]).height() + $($burgers[i]).offset().top > $slothOffset.top) {
        score += 10;
        $($burgers[i]).hide();
        setTimeout(function (){
          $($burgers[i]).show();
        },1000);
        $('#playerScore').text(score);
      }
    }

    // CARROTS COLLISION

    for (let j = 0; j < $carrots.length; j++) {
      if ($($carrots).offset().left < $slothOffset.left + $sloth.width() &&
      $($carrots[j]).offset().left + $($carrots[j]).width() > $slothOffset.left &&
      $($carrots[j]).offset().top < $slothOffset.top + $sloth.height() &&
      $($carrots[j]).height() + $($carrots[j]).offset().top > $slothOffset.top) {
        score-=5;
        $($carrots[j]).hide();
        setTimeout(function (){
          $($carrots[j]).show();
        },1000);
        $('#playerScore').text(score);
      }
    }
  }, 10);

  // If player chooses to play again; push their score to the array for leaderboard and refresh values

  $('#playAgain').on('click', (e) => {
    $('#modalGame').hide();
    $scores.push($('#playerScore'));
    console.log($scores);
    score=0;
    $('#playerScore').text(score);
    timeIsRunning = true;
    startGame();
  });

// If player chooses leaderboard, close score modal and show the leaderboard **with music**
});
