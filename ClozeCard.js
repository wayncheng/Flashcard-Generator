"use strict";
(function() {
  
  function ClozeCard(text,cloze) {
    if (this instanceof ClozeCard) { this.someValue = someValue; } 
    else { return new ClozeCard(someValue); }

    this.fullText = text;
    this.cloze = cloze;
    this.partial = text - cloze;


  }
  module.exports = ClozeCard;
})();
