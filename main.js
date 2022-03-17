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

// I don't get what is happening here
const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    console.log('this is item 1: ' + item1);
    console.log('this is item 2: ' + item2);
    console.log('item1 - item2 = ' + `${item1 - item2}`);
    return item1 - item2;
  }

  console.log('the array is: ' + arr);
  return arr.slice().sort(byNumber);
}

const mySortArr = function(arr){
  console.log('the arr at the beginning of mySortArr Func')
  console.log(arr);
  let lower = arr[0];
  console.log('setting arr[0] to lowest ... ');
  console.log(lower);
  for (let i = 1; i < arr.length; i++){
    console.log('iteration');
    console.log(i);
    console.log('lower =');
    console.log(lower);
    console.log('arr[i] =')
    console.log(arr[i]);
    if (lower > arr[i]){
      console.log('now push VAR lower');
      console.log(lower);
      console.log('to the last item in the array')
      arr.push(lower);
      console.log(arr);
      console.log('now remove lower which is the item at i - 1');
      console.log(arr[i-1]);
      arr.splice(i-1, 1);
      console.log('ok now what does my ARR look like?');
      console.log(arr);
      mySortArr(arr);
    } else {
      lower = arr[i];
    }
  }
  console.log('my Sort Func: ')
  console.log(arr);
  return arr;
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

const getMeanOfArr = function(arr){
  let sum = arr.reduce(function(total, num){
    return total + num;
  });
  let count = arr.length;
  return mean = (sum/count).toFixed(2);
}

const getMedianOfArr = function(arr){
  if (arr.length === 1){
    return arr[0].toFixed(2);
  } else {
    let sortedArr = mySortArr(arr);
    console.log('inside get median function ');
    console.log(sortedArr);
    if (arr.length % 2 !== 0){
      let middleIndex = Math.floor(sortedArr.length/2);
      return sortedArr[middleIndex];
    } else {
      console.log('even array!');
      let middle1 = sortedArr[((sortedArr.length) / 2) - 1];
      console.log(`this is middle1: ` + middle1);
      let middle2 = sortedArr[((sortedArr.length) / 2)];
      console.log(`this is middle2: ` + middle2);
      console.log('the sum is');
      console.log(middle1+middle2);
      console.log('divided by 2 =')
      return median = ((middle1 + middle2) / 2).toFixed(2);
    }
  }
}

/*******************
 * YOUR CODE BELOW *
 *******************/

intialize();





/*******************
 * EVENT LISTENERS *
 *******************/

const rollSixSidedDie = sixSidedDie.addEventListener('click', function(){
  console.log('clicked six sided die')
  let num = getRandomNumber(6)
  console.log(num);
  setSixSidedDieImg(sixSidedDie, num);

  //Math
  sixes.push(num);
  console.log('the six sided die array')
  console.log(sixes);
  sixSidedMean.innerText = getMeanOfArr(sixes);
  sixSidedMedian.innerText = getMedianOfArr(sixes);

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

  doubleSixes.push(sum);
  dblSixMean.innerText = getMeanOfArr(doubleSixes);
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

  doubleSixes.push(sum);
  dblSixMean.innerText = getMeanOfArr(doubleSixes);
});

const rollTwelveSidedDie = twelveSidedDie.addEventListener('click', function(){
  let num = getRandomNumber(12)
  console.log(num);
  setTwelveAndTwentDieImg(twelveSidedDie, num);

  twelves.push(num);
  twelveMean.innerText = getMeanOfArr(twelves);
});

const rollTwentySidedDie = twentySidedDie.addEventListener('click', function(){
  let num = getRandomNumber(20)
  console.log(num);
  setTwelveAndTwentDieImg(twentySidedDie, num);

  twenties.push(num);
  twentyMean.innerText = getMeanOfArr(twenties);
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
  twenties.length = 0;
}

/****************
 * MATH SECTION *
 ****************/
