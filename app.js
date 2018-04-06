$(() =>{

  let score = 0;
  let $currentPlayerName;
  let currentPlayerScore;

  const audio1 = new Audio('./sounds/ding.mp3');
  const audio2 = new Audio('./sounds/lose-life.mp3');
  const audio3 = new Audio('./sounds/sloth-island.mp3');
  const scores = {};
  const $modalGame = $('#modalGame');
  const $sloth = $('#sloth');
  const $burgers = $('.burger'); // all burgers
  const $carrots = $('.carrot'); // all sloths
  const $modalStartContent = $('.modal-start-content');
  const $score = $('.score');
  const $countdown = $('.countdown');
  const $modalStart = $('#modalStart')
  const $input = $('.inputName');

//------------------------------- Pre-Game Setup ------------------------------

  audio3.play();
  $('#modalLeaderboard').show();
  $modalStart.show();
  $score.hide();
  $burgers.hide();
  $carrots.hide();

    // ----------------------------- Start Game Function  --------------------------
    // Show the score, and on 30 second timeout hide burgers/carrots, clear timer
    // and push the score
  function startGame() {
    $score.show();
    setTimeout(function (){
      $modalGame.show();
      $('.playerScore1').text(score);
      currentPlayerScore = score;
      clearInterval();
      $burgers.hide();
      $carrots.hide();
      localStorage.setItem($currentPlayerName, currentPlayerScore);
      scores[$currentPlayerName] = (currentPlayerScore);
    }, 30000);
  }

  // Countdown timer - starts at 4, decreases by 1 every  second and hide when
  // it gets to zero
  let timeIsRunning = false;
  const $startGameBtn = $('.btn-start');
  function startTimer() {

    // retrieve the value from the input button and push into $currentPlayer
    $currentPlayerName = $('.inputName').val();

    let $counter = 4;
    const $interval = setInterval(function() {
      $counter--;
      $countdown.text($counter);
      if ($counter === 0) {
        clearInterval($interval);
        $countdown.hide();
        $burgers.show();
        $carrots.show();
        startGame();
      }
    }, 1000);
  }

  // On start game button click, hide the start modal and start the countdown timer
  $startGameBtn.on('click', function() {
    if ($('.inputName').val() === '') {
      alert('Please enter a valid name');
      return false;
    }
    $modalStart.hide();
    timeIsRunning = true;
    startTimer();
  });

  //-------------------------SLOTH MOVEMENT-------------------------------------

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

    //-------------------------------COLLISIONS---------------------------------

    for (let i = 0; i < $burgers.length; i++) {
      if ($($burgers[i]).offset().left < $slothOffset.left + $sloth.width() &&
      $($burgers[i]).offset().left + $($burgers[i]).width() > $slothOffset.left &&
      $($burgers[i]).offset().top < $slothOffset.top + $sloth.height() &&
      $($burgers[i]).height() + $($burgers[i]).offset().top > $slothOffset.top) {
        score += 10;
        audio1.play();
        $($burgers[i]).hide();
        setTimeout(function (){
          $($burgers[i]).show();
        },1000);
        $('#playerScore').text(score);
      }
    }

    for (let j = 0; j < $carrots.length; j++) {
      if ($($carrots[j]).offset().left < $slothOffset.left + $sloth.width() &&
      $($carrots[j]).offset().left + $($carrots[j]).width() > $slothOffset.left &&
      $($carrots[j]).offset().top < $slothOffset.top + $sloth.height() &&
      $($carrots[j]).height() + $($carrots[j]).offset().top > $slothOffset.top) {
        score-=5;
        audio2.play();
        $($carrots[j]).hide();
        setTimeout(function (){
          $($carrots[j]).show();
        },1000);
        $('#playerScore').text(score);
      }
    }
  }, 10);

  // If player chooses to play again; reload page (so as to refresh leaderboard)
  $('#playAgain').on('click', () => {
    location.reload();
  });

  // If player clicks outside of the modal, close the modal

  // $('body').click(function() {
  //   if (!$(this.target).is($modalStart)) {
  //     $modalStart.hide();
  //   }
  // });

  // -------------------------- Leaderboard -----------------------------------

  // Split local storage object into keys and values to convert scores to numbers
  // due to localStorage only returning strings (NaN)
  var keys = Object.keys(localStorage);
  var values = Object.values(localStorage).map(Number);

  // Declare new object to sort values now that numbers have been converted
  var result = {};

  // creating a new object with the keys and values matches back up
  keys.forEach((key, i) => result[key] = values[i]);

  // creating a two dimensional array for key, value to sort
  var sortable = [];
  for (var players in result) {
    sortable.push([players, result[players]]);
  }

  // sorting the new 2D array by the second value in each array (the score)
  sortable.sort(function(a, b) {
    return b[1] - a[1];
  });

  // INSERT TOP 5 SCORES ON LEADERBOARD - can use a loop
  //
  // for (let i = 0; i < $highScores.length; i++) {
  //   $highScores.text(sortable[i]);
  // }
  $('.hs1').text(sortable[0]);
  $('.hs2').text(sortable[1]);
  $('.hs3').text(sortable[2]);
  $('.hs4').text(sortable[3]);
  $('.hs5').text(sortable[4]);
});
