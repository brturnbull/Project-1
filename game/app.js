$(() =>{
  var score = 0;
  const $sloth = $('#sloth');
  const $burger = $('.burger');
  // const $burger2 = $('.burger2');
  // const $burger3 = $('.burger3');

  // const $burgerOffset2 = $burger2.offset();
  // const $burgerOffset3 = $burger3.offset();
  setInterval(function(){
    const $slothOffset = $sloth.offset();
    const $burgerOffset = $burger.offset();


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

    if ($burgerOffset.left < $slothOffset.left + $sloth.width() &&
    $burgerOffset.left + $burger.width() > $slothOffset.left &&
    $burgerOffset.top < $slothOffset.top + $sloth.height() &&
    $burger.height() + $burgerOffset.top > $slothOffset.top) {
        score += 1;
        $burger.hide();
      setTimeout(function (){
          $burger.show();
        },1000);
      console.log(score);
    }

}, 10);

});
