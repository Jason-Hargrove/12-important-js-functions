// ===== 12 Important JavaScript Functions Every Web Developer Should Know =====


// ===== 1. Shorten the console log. =====
const log = console.log;
// const log = console.log.bind(documet);
log("does it work?");
log("yes");
log(5);


// ===== 2. Merge two arrays into one. =====
const array1 = [ "One", "Two", "Three" ];
const array2 = [ "Four", "Five", "Six" ];
const merge2 = array1.concat(array2);
log(merge2);

const array3 = [ "Chainsaw", 5, "Deadite" ];
const array4 = [ "Ash", 6, "Boomstick!"];
const merge2Again = array3.concat(array4);
log(merge2Again);

const array5 = [ "Kitty", 7, "Cat" ];
const array6 = [ "Doggy", 9, "Dog" ];
const merge2AgainAndAgain = array5.concat(array6);
log(merge2AgainAndAgain);

const array7 = [ "Heavy", "Metal", "Thunder" ];
const array8 = [ "Moving", 6, "Times"];
const mergeAll = array1.concat(array2, array3, array4, array5, array6, array7, array8);
log(mergeAll);


// ===== 3. Merge two objects. =====
const user = {
  name: "Paul Knulst",
  gender: "Male"
};

const article = {
  title: "JavaScript Tips",
  date: "2021-11-19"
};
const summary = {...user, ...article};
log(summary);


const character = {
  name: "Ash",
  ocupation: "Sales Clerk",
  years: 10
};

const villan = {
  title: "Deadite",
  whatYouDo: "Eating People",
  age: 100000
};
const evilDead = {...character, ...villan};
log(evilDead);


// ===== 4. Shorten an array =====
const big_array = [ "One", "Two", "Three", "Four", "Five", "Six", "Seven" ];
big_array.length = 4;
log(big_array);

const big_array1 = [ "One", "Two", "Three", "Four", "Five", "Six", "Seven" ];
big_array1.length = 3;
log(big_array1);

const big_array2 = [ "One", "Two", "Three", "Four", "Five", "Six", "Seven" ];
big_array2.length = 5;
log(big_array2);


// ===== 5. Shuffle an array =====
const big_array3 = [ "One", "Two", "Three", "Four", "Five", "Six", "Seven" ];
big_array3.sort(function(){ return Math.random() - 0.5});
log(big_array3);

const big_array4 = [ "Razors", "Guns", "Knives", "With", "Me" ];
big_array4.sort(function(){ return Math.random() - 0.5});
log(big_array4);


// ===== 6. Use isNum to verify a number =====
function isNum(n) { return !isNaN(parseFloat(n)) && isFinite(n); }

log(isNum(1337));
log(isNum(13.37));
log(isNum("JavaScript"));


// ===== 7. Use isStr to verify a string =====
const isStr = value => typeof value === 'string';

log(isStr('JavaScript'));
log(isStr(345));
log(isStr(true));


// ===== 8. Use isNull =====
const isNull = value => value === null || value === undefined;

log(isNull(null));
log(isNull());
log(isNull(123));
log(isNull("J"));


// ===== 9. Calculate the performance of a function. =====
// Must require from perf_hooks module depending on node.js version.
const {performance} = require('perf_hooks');
const t0 = performance.now();
// some program
function testThis() { return 2 + 2 };
// end some program
const t1 = performance.now();
const total = t0 - t1;
log("function takes " + total + " miliseconds");


// ===== 10. Remove duplicates for an array without a loop. =====
const someArray = [
  "One", "Two", "Three", "Four", "Five", "Six", "Seven", "One", "Two", "Three", "Four", "Five", "Six", "Ten", "Twelve"
];
const delDuplicates = array => [...new Set(array)];
log(delDuplicates(someArray));


// ===== 11. Use logical AND/OR for conditions =====
const input = 2;
input === 5 && log("it is 5");
input === 5 || log("it is not 5");

// or for assigning values

function defaultTo5(arg) {
  arg = arg || 5;
  log(arg);
}
let arg1 = 2;
let arg2 = null;
defaultTo5(arg1) // 2
defaultTo5(arg2) // 5


// ===== 12. Ternary operator =====
function temperature(temp) {
  return (temp > 39 || temp < 35.5) ? "Visit Doctor"
    : (temp < 37.5 && temp > 36.5) ? "Go Out and Play!!"
      : (temp <= 39 && temp >= 35.5) ? "Take Some Rest!" : ''
}

log(temperature(38));
log(temperature(36));
log(temperature(39.1));
log(temperature(35.1));
log(temperature(37));


// To log output: cd into the file. In the terminal enter >node script
