/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

let sixSidedDie = document.querySelector('#d6-roll');
let dblSixSidedDieOne = document.querySelector('#double-d6-roll-1');
let dblSixSidedDieTwo = document.querySelector('#double-d6-roll-2');
let twelveSidedDie = document.querySelector('#d12-roll');
let twentySidedDie = document.querySelector('#d20-roll');
let resetButton = document.querySelector('#reset-button');

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/




/*******************
 * EVENT LISTENERS *
 *******************/

const rollSixSidedDie = sixSidedDie.addEventListener('click', function(){
  console.log(getRandomNumber(6));
});

const rollDblSixSidedDieOne = dblSixSidedDieOne.addEventListener('click', function(){
  console.log(getRandomNumber(6));
});

const rollDblSixSidedDieTwo = dblSixSidedDieTwo.addEventListener('click', function(){
  console.log(getRandomNumber(6));
});

const rollTwelveSidedDie = twelveSidedDie.addEventListener('click', function(){
  console.log(getRandomNumber(12));
});

const rollTwentySidedDie = twentySidedDie.addEventListener('click', function(){
  console.log(getRandomNumber(20));
});

const hitReset = resetButton.addEventListener('click', function(){
  console.log('reset');
  sixes = [];
  doubleSixes = [];
  twelves = [];
  twenties = [];
});

/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
