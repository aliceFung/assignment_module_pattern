
board = {
  score: 0,
  moles: {},

  init: function($){
    console.log('start game');
    board.$displayArea = $('#mole-home');
    //creates  8 divs
    for(var i = 1; i <= 8; i++ ){
      board.$displayArea.append('<div class="hole" id="' + i+ '">');
    }
    board.setupListeners();
    board.molesCreate();
    board.gameLoop();
  },

  rand: function(){
    return Math.round(Math.random() * (3000)) + 1000;
  },

  gameLoop: function() {
    console.log('start game loop');
    var tries = 20;
    for (var i = tries- 1; i >= 0; i--) {
      var rand = board.rand();
      console.log('loop# ' + i + "rand: "+ rand);

      (function() { setTimeout(board.molePeek, rand);} )();
    } // end for loop
  },

  setupListeners: function(){
    console.log('set listeners');
    board.$displayArea.click(function(){
                            board.selectHole(event)}  );
  },

  molesCreate: function(){
    console.log('create moles');
    for (var i = 1; i <= 8; i++){
      board.moles[i] = board.moleModule;
      board.moles[i].slot = i;
    }
  },

  //forcing mole constructor into mole module
  moleModule: (function(){
    mole ={};
    mole.slot = 0;
    var str = "something private";
    mole.peek = false;
    return mole;
  })(),


  molePeek: function(){
    //refactor if already mole peeking delay
    //select mole
    var num = Math.floor(Math.random() * 8) + 1;
    $("#"+num).addClass('appearing-mole');
    console.log('a mole is peeking in #' + num);
    setTimeout(function() { board.moleHide($("#"+num));
      }, board.rand());
  },

  moleHide: function(div){
    console.log('a mole went back into hiding');
    div.removeClass('appearing-mole');
  },

  selectHole: function(event){
    $mole = $(event.target);
    if($mole.hasClass('appearing-mole')){
      $mole.removeClass('appearing-mole');
      board.score++;
      board.updateScore();
    }
  },

  updateScore: function(){
    $('#score').text(board.score);
  }
};


$(document).ready(board.init($));


