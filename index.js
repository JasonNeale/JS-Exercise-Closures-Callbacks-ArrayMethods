function processFirstItem( stringList, callback ) {
  return callback( stringList[0] )
}

function processLength( list, callBack ) {
    return callBack( list.length );
}

function processLastItem( stringList, callBack ) {
    return callBack( stringList[stringList.length - 1] );
}

function processSum( numberList, callBack ) {
  return callBack( numberList.reduce(( a, b ) => a + b, 0) );
}

function processProduct( num1, num2, callBack ) {
    return callBack( num1 * num2 );
}

function processContains( item, list, callBack ) {
    if ( list.includes( item )) {
        return callBack( true );
    } else {
        return callBack( false );
    }
}

function processDuplicateFree(list, callBack) {
    return callBack(Array.from(new Set(list)));
}

function getFullNames(runners) {
    let outputArray = [];
    runners.forEach(element => outputArray.push(`${element.last_name}, ${element.first_name}`));
    return outputArray;
}

function firstNamesAllCaps(runners) {
    let outputArray = [];
    runners.forEach(element => outputArray.push(element.first_name.toUpperCase()));
    return outputArray;
}

function getRunnersByTShirtSize(runners, tShirtSize) {
    let outputArray = [];
    outputArray = runners.filter((runners) => runners.shirt_size === tShirtSize)
    return outputArray;
}

function tallyUpDonations(runners) {
    let sum = runners.reduce(function (a, b) {
        return a + b.donation;
    }, 0);

    return sum;
}

function counterMaker() {
    let i = 0;

    return function count() {
        return i++;
    }
}

/**
 * ### Challenge `counterMakerWithLimit`
 * 
 * @instructions
 * Implement a counter maker that takes a max value for the count.
 * A counter created with it will reset itself after reaching the max value.
 * Usage is as follows:
 * 
 * const counter = counterMakerWithLimit(3)
 * counter() // should return 0
 * counter() // should return 1
 * counter() // should return 2
 * counter() // should return 3
 * counter() // should return 0
 * counter() // should return 1
 * counter() // should return 2
 * counter() // should return 3
 * counter() // should return 0
 * etc
*/
function counterMakerWithLimit(max) {
    let i = 0;
  
    function counter() {
        if(i <= max) {
            return i++;
        } else {
            i = 0;
        }
        return i++;
    }  
    return counter;
}

/////////////// END OF CHALLENGE ///////////////
/////////////// END OF CHALLENGE ///////////////
/////////////// END OF CHALLENGE ///////////////

if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (processFirstItem) { module.exports.processFirstItem = processFirstItem }
  if (processLength) { module.exports.processLength = processLength }
  if (processLastItem) { module.exports.processLastItem = processLastItem }
  if (processSum) { module.exports.processSum = processSum }
  if (processProduct) { module.exports.processProduct = processProduct }
  if (processContains) { module.exports.processContains = processContains }
  if (processDuplicateFree) { module.exports.processDuplicateFree = processDuplicateFree }
  if (getFullNames) { module.exports.getFullNames = getFullNames }
  if (firstNamesAllCaps) { module.exports.firstNamesAllCaps = firstNamesAllCaps }
  if (getRunnersByTShirtSize) { module.exports.getRunnersByTShirtSize = getRunnersByTShirtSize }
  if (tallyUpDonations) { module.exports.tallyUpDonations = tallyUpDonations }
  if (counterMaker) { module.exports.counterMaker = counterMaker }
  if (counterMakerWithLimit) { module.exports.counterMakerWithLimit = counterMakerWithLimit }
}
