
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
    Math.round(Math.random() * (3000 - 500)) + 500;
  },

  gameLoop: function() {
    console.log('start game loop');
    var tries = 20;
    for (var i = tries.length - 1; i >= 0; i--) {
      console.log('loop# ' + i);
      var rand = board.rand();

      setTimeout(function() {
             molePeek();
      }, rand)
    }
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
    }
  },

  //forcing mole constructor into mole module
  moleModule: (function(slot){
    mole ={};
    mole.slot = slot;
    mole.peek = false;
    return mole;
  })(slot),


  molePeek: function(){
    console.log('a mole is peeking');
    //select mole
    var num = Math.floor(Math.random() * 8) + 1;
    $("#"+num).addClass('appearing-mole');
    setTimeout(function() {
             $("#"+num).removeClass('appearing-mole');
      }, board.rand());
  },

  // moleHide: function(){

  // },

  selectHole: function(event){
    if(event.target.hasClass('appearing-mole')){
      event.target.removeClass('appearing-mole');
      board.score++;
    }
  }
};


$(document).ready(board.init($));


