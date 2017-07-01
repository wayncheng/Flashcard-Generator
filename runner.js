'use strict';
(function(){
  var BasicCard = require('./BasicCard.js');
  var ClozeCard = require('./ClozeCard.js');
  var stdin = process.openStdin();
  

  var card1 = new BasicCard( 'Who was first president of USA?', 'George Washington' );
  var card2 = new ClozeCard( 'Steve Jobs is the founder of Apple.', 'Jobs' );
  var card3 = new ClozeCard( 'Milk comes from cows.', 'cows' );

  // Example of error
  var qBad = new ClozeCard( 'The tallest mountain in the world is Mount Everest', 'Rainier' );


  console.log('-----------------------------');
  console.log('Press enter to begin the quiz');

  var quiz = [ card1, card2, card3 ];
  var num = 0;
  var side = 'front';

  stdin.addListener('data',quizzer);
  function quizzer(uI){

    // Stop if out of questions
    if (num >= quiz.length){
      return console.log(`You have completed all ${quiz.length} cards!`); }
    
  // Both constructors return an object with front and back defined
  // In quiz array...
  // - finds card based on index
  // - gets the content based on which side
  // - logs out that content
    console.log(quiz[num][side]);  
    
    
  // Change state & cycle questions to prepare for next card and/or side
    if (side == 'front'){
      side = 'back';
    }
    else {
      side = 'front';
      num++; // next card
      setTimeout(quizzer, 1500); // Continues to next question after quick delay
    }
  }

})();