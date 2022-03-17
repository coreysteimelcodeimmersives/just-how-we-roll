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

let sixSidedMean = document.querySelector('#d6-rolls-mean');
let sixSidedMedian = document.querySelector('#d6-rolls-median');
let sixSidedMode = document.querySelector('#d6-rolls-mode');

let dblSixMean = document.querySelector('#double-d6-rolls-mean');
let dblSixMedian = document.querySelector('#double-d6-rolls-median');
let dblSixMode = document.querySelector('#double-d6-rolls-mode');

let twelveMean = document.querySelector('#d12-rolls-mean');
let twelveMedian = document.querySelector('#d12-rolls-median');
let twelveMode = document.querySelector('#d12-rolls-mode');

let twentyMean = document.querySelector('#d20-rolls-mean');
let twentyMedain = document.querySelector('#d20-rolls-median');
let twentyMode = document.querySelector('#d20-rolls-mode');

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

const intialize = function(){

  // Images
  sixSidedDie.src = 'images/start/d6.png';
  dblSixSidedDieOne.src = 'images/start/d6.png';
  dblSixSidedDieTwo.src = 'images/start/d6.png';
  twelveSidedDie.src = 'images/start/d12.jpeg';
  twentySidedDie.src = 'images/start/d20.jpg';

  // Text
  sixSidedMean.innerText = 'N/A';
  sixSidedMedian.innerText = 'N/A';
  sixSidedMode.innerText = 'N/A';

  dblSixMean.innerText = 'N/A';
  dblSixMedian.innerText = 'N/A';
  dblSixMode.innerText = 'N/A';

  twelveMean.innerText = 'N/A';
  twelveMedian.innerText = 'N/A';
  twelveMode.innerText = 'N/A';
  
  twentyMean.innerText = 'N/A';
  twentyMedain.innerText = 'N/A';
  twentyMode.innerText = 'N/A';
}

/*******************
 * YOUR CODE BELOW *
 *******************/

intialize();



/*******************
 * EVENT LISTENERS *
 *******************/

const rollSixSidedDie = sixSidedDie.addEventListener('click', function(){
  let num = getRandomNumber(6)
  console.log(num);
  setSixSidedDieImg(sixSidedDie, num);
});

const rollDblSixSidedDieOne = dblSixSidedDieOne.addEventListener('click', function(){
  //Die One
  let num1 = getRandomNumber(6)
  console.log('Dbl sixes, die one = ' + num1);
  setSixSidedDieImg(dblSixSidedDieOne, num1);

  //Die Two
  let num2 = getRandomNumber(6);
  console.log('Dbl sixes, die two = ' + num2);
  setSixSidedDieImg(dblSixSidedDieTwo, num2);
  let sum = num1+num2;
  console.log(sum);
});

const rollDblSixSidedDieTwo = dblSixSidedDieTwo.addEventListener('click', function(){
  //Die One
  let num1 = getRandomNumber(6)
  console.log('Dbl sixes, die one = ' + num1);
  setSixSidedDieImg(dblSixSidedDieOne, num1);

  //Die Two
  let num2 = getRandomNumber(6);
  console.log('Dbl sixes, die two = ' + num2);
  setSixSidedDieImg(dblSixSidedDieTwo, num2);
  let sum = num1+num2;
  console.log(sum);
});

const rollTwelveSidedDie = twelveSidedDie.addEventListener('click', function(){
  let num = getRandomNumber(12)
  console.log(num);
  setTwelveAndTwentDieImg(twelveSidedDie, num);
});

const rollTwentySidedDie = twentySidedDie.addEventListener('click', function(){
  let num = getRandomNumber(20)
  console.log(num);
  setTwelveAndTwentDieImg(twentySidedDie, num);
});

const hitReset = resetButton.addEventListener('click', function(){
  console.log('reset');
  resetGlobalArr();
  intialize();
});

/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

const setSixSidedDieImg = function(die, num){
  die.src = `images/d6/${num}.png`;
}

const setTwelveAndTwentDieImg = function(die, num){
  die.src = `images/numbers/${num}.png`;
}

const resetGlobalArr = function(){
  sixes.length = 0;
  doubleSixes.length = 0;
  twelves.length = 0;
  twenties.lenghth = 0;
}

/****************
 * MATH SECTION *
 ****************/
