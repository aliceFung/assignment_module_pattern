
board = {
  score: 0,

  init: function($){
    board.$displayArea = $('#mole-home');
    //creates  8 divs
    for(var i = 1; i <= 8; i++ ){
      board.$displayArea.append('<div class="hole" id="' + i+ '">');
    }
    board.setupListeners();
    board.moleIntervals();
  },

  setupListeners: function(){
    board.$displayArea.addEventListener('click', function(){
                            board.selectHole(event)}  );
  },

  moleIntervals: function(){

  },

  selectHole: function(event){
    if(event.target.hasClass('appearing-mole')){
      event.target.removeClass('appearing-mole');
      board.score++;
    }
  }
};

// function doSomething() {}

// (function loop() {
//    var rand = Math.round(Math.random() * (3000 - 500)) + 500;
//    setTimeout(function() {
//            doSomething();
//            loop();
//    }, rand);
// }());





$(document).ready(board.init($));