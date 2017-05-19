'use strict';
module.exports = function() {

var secretNumber = (function (){
    var secretNumberGenerator = Math.floor(Math.random()*(100000 - 0 )) +0;

    return function (){
        if(secretNumberGenerator === secretNumberGenerator){

            return secretNumberGenerator;

        };

    };
    return secretNumberGenerator ++;

})(); // end of first function
  return secretNumber;  

};