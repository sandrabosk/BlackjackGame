// // Player starts with 0 points
// // Player can ask to play or to stand
// // If a player decides to play, a new card would be given to him
// // If he hits 21, player wins!
// // If the total is above 21, player looses!
// // If the total is below 21, he will be asked again
// // If he stands, the total will reset

// function Blackjack(){
//     this.totalPoints = 0;
//     this.card = 0;

//     this.nextCard= function(){
//         // random card between 1 and 13
//         this.card = parseInt((Math.random()*13) + 1);
//         console.log("Next card is ... " + this.card);
//     };

//     this.play = function(){
//         // If a player decides to play, a new card would be given to him
//         this.nextCard();
//         // add the value of the card to the current totalPoints
//         this.totalPoints += this.card;
//         // see if we have winner (or loser)
//         this.checkResult();
//     };
//     this.stand = function(){
//         // if the player decides to stand, the total will reset
//         this.totalPoints = 0;
//         console.log("Let's start again :) ");
//     };
//     this.checkResult= function() {
//         console.log("The total is: ", this.totalPoints);
//         if(this.totalPoints > 21){
//             console.log("You lost! Try again?");
//             this.totalPoints = 0;
//         } else if (this.totalPoints == 21){
//             console.log("You won! Play again?");
//             this.totalPoints = 0;
//         }
//     }
// }
function BlackjackGame(initCard, initTotal) {
  this.card = initCard;
  this.total = initTotal;
  this.play = function() {
    this.nextCard();
    this.total += this.card;
    this.checkResult();
  };
  this.stand = function() {
    this.total = 0;
    console.log("You coward!");
  };
  this.nextCard = function() {
    this.card = parseInt(Math.random() * 11 + 1);
    console.log("Next card:" + this.card);
  };
  this.checkResult = function() {
    console.log("total:" + this.total);
    if (this.total > 21) {
      console.log("Womp! you lost");
      this.total = 0;
    } else if (this.total === 21) {
      console.log("you won. play again!");
      this.total = 0;
    }
  };
}