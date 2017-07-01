'use strict';
(function(){
  function BasicCard(front,back) {
    if (this instanceof BasicCard) { 
      this.front = front;
      this.back = back;
      // console.log('front',front);
      // console.log('back',back);
      return {
        front: 'Q: '+ this.front,
        back: 'A: '+ this.back
      }
    } 
    // for scope-safe constructor?
    else { return new BasicCard(front); }

    // this.front = front;
    // this.back = back;

  }
  module.exports = BasicCard;
})();