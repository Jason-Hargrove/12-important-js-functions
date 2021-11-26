// 12 Important JavaScript Functions Every Web Developer Should Know

// 1. Shorten the console log.

const log = console.log;
// const log = console.log.bind(documet);
log("does it work?");
log("yes");
log(5);


// 2. Merge two arrays into console

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

// To log output: cd into the file. In the terminal enter >node script
