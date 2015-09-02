//practice with revealing modules, returns obj with public methods
var mod = mod || {};

// var otherModule = mod.RevealingModule2;

mod.RevealingModule = (function(otherModule){

  //fn from other module: mod.RevealingModule2.checkLottNumMatch
  var otherChecker = otherModule.checkLottoNumMatch2;
  //private variables
  console.log(otherChecker);
  var _superSecretLottoNumbers = [1,3,5,7,9,11,13];
  var stub = {};

  var totalNumAccepted = _superSecretLottoNumbers.length;
  stub.checkLottoNumMatch = function(picks){
    var matches = 0;
    for (var i=0; i < _superSecretLottoNumbers.length; i++){
      if (picks[i] === _superSecretLottoNumbers[i]){
        matches++;
      }
    }
    if (matches != totalNumAccepted){
      return otherChecker(picks);  //check with other secret numbers
    }; //matches = number allowed per pick
  };

  stub.getTotalNumAccepted = function(){return totalNumAccepted; };
  stub.setTotalNumAccepted = function(val){
      return totalNumAccepted = val; };

  return stub;

})(mod.RevealingModule2);

