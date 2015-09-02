
board = {
  score: 0,

  init: function($){
    board.$displayArea = $('#mole-home');
    //creates  8 divs
    for(var i = 1; i <= 8; i++ ){
      board.$displayArea.append('<div class="hole" id="' + i+ '">');
    }
    board.setupListeners();
    board.gameLoop();
  },

  gameLoop: function() {
    var tries = 20;
    for (var i = tries.length - 1; i >= 0; i--) {
      tries[i]
     
      var rand = Math.round(Math.random() * (3000 - 500)) + 500;
     
      setTimeout(function() {
             molePeek();
      }, rand)
    };
  },

  setupListeners: function(){
    board.$displayArea.addEventListener('click', function(){
                            board.selectHole(event)}  );
  },

  molePeek: function(){
    
  },

  selectHole: function(event){
    if(event.target.hasClass('appearing-mole')){
      event.target.removeClass('appearing-mole');
      board.score++;
    }
  }
};







$(document).ready(board.init($));