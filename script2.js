//practice with revealing modules, returns obj with public methods
var mod = mod || {}

mod.RevealingModule2 = (function(){

  //private variables
  var _superSecretLottoNumbers = [2,4,6,8,10,12,15];
  var stub = {};

  var totalNumAccepted = _superSecretLottoNumbers.length;
  stub.checkLottoNumMatch2 = function(picks){
    var matches = 0;
    for (var i=0; i < _superSecretLottoNumbers.length; i++){
      if (picks[i] === _superSecretLottoNumbers[i]){
        matches++;
      }
    }
    return matches == totalNumAccepted; //matches = number allowed per pick
  };

  stub.getTotalNumAccepted = function(){return totalNumAccepted; };
  stub.setTotalNumAccepted = function(val){
      return totalNumAccepted = val; };

  return stub;

})();