const numConst = 3;
const anotherNumConst = 4;
const stringNumber = '5';
let accumulator;
let stringVar = 'test';
let anotherStringVar = 'me';

let addResult = numConst + anotherNumConst;
console.log('Expecting 7:', addResult);

let substrResult = numConst - anotherNumConst;
console.log('Expecting: -1:', substrResult);

let multResult = numConst * anotherNumConst;
console.log('Expecting: 12', multResult);

let divResult = numConst / anotherNumConst;
console.log('Expecting: 0.75', divResult);

let modResult = anotherNumConst % numConst;
console.log('Expecting: 1', modResult);

let powResult = numConst ** anotherNumConst;
console.log('Expecting: 81', powResult);

// automatic number to string conversion
let stringPlusNumResult = stringNumber + numConst;
console.log('Expecting: 53 (string value)', stringPlusNumResult);

// automatic string to number conversion (implicit, thus better to avoid)
let stringMinusNumResult = stringNumber - numConst;
console.log('Expecting: 2', stringMinusNumResult);

// automatic string to number conversion (implicit, thus better to avoid)
let stringDivNumResult = stringNumber / anotherNumConst;
console.warn('Expecting: 1.25', stringDivNumResult);
