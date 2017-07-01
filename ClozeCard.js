"use strict";
(function() {
   function ClozeCard(text,cloze) {
    if (this instanceof ClozeCard) { 
      this.fullText = text;
      this.cloze = cloze;
      var starts_at = text.indexOf(cloze);
     
      // throw error when cloze not found
      if( starts_at === -1) {
        return console.log('!!!!! cloze not found within text !!!!!');
      } 
      else {
        this.partial = text.replace(cloze,'...');
        return { 
          front: 'Q: '+ this.partial, 
          back: 'A: '+ this.fullText 
        }
      }
    } 
    // for scope-safe constructor?
    else { return new ClozeCard(text,cloze); }

  }
  module.exports = ClozeCard;
})();
