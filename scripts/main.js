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
  let total = 0;
  let ace_total = 0;
  hand.forEach(function(card){
    console.log(card);
    let value = 0;
    if(!parseInt(card)) {
      console.log('face card detected');
      // face card
      // J, Q, K,  or A
      if(card==='A') {
        console.log('ace detected');
        ace_total +=1;
      } else {
        value = 10;
      }
    } else {
      value = parseInt(card);
    }
    console.log(value);
    total += value;
  });
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
