'use strict';
(function(){
  function BasicCard(front,back) {
    if (this instanceof BasicCard) { this.someValue = someValue; } 
    else { return new BasicCard(someValue); }

    this.front = front;
    this.back = back;

  }
  module.exports = BasicCard;
})();