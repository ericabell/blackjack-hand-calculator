/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  // hand is a list of strings with values "2", "3", etc.
  console.log('handValue');
  console.log(hand);
  let total = 0; // this will hold our hand total value
  let ace_total = 0;  // keep track of the number of aces, and determine
                      // their value at the END OF THE HAND :-(
  hand.forEach(function(card){
    console.log(card);
    let value = 0; // reset the value of each card to 0
    if(!parseInt(card)) { // check if we have a face card or a number card
      console.log('face card detected');
      // face card
      // J, Q, K,  or A
      if(card==='A') {
        console.log('ace detected'); // increment the ace count
        ace_total +=1;
      } else {
        value = 10;  // otherwise, it must be J, Q, K
      }
    } else {
      value = parseInt(card); // a number card just has it's value
    }
    console.log(value);
    total += value; // add the card to our running total
  });

  // we have processed all the cards, now determine what As are worth
  if(ace_total>0) {
    if(total>21 || total>10){
      // all the aces are 1s
      total += ace_total;
    } else {
      total += ace_total*11;
    }
  }
  console.log(total);
  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
