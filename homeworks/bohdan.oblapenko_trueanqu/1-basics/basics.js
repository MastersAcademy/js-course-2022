const numConst = 3;
const anotherNumConst = 4;
const stringNumber = '5';
const stringVar = 'test';
const anotherStringVar = 'me';
const boolTrue = true;
const boolFalse = false;

const addResult = numConst + anotherNumConst;
console.log('Expecting 7:', addResult);

const substrResult = numConst - anotherNumConst;
console.log('Expecting: -1:', substrResult);

const multResult = numConst * anotherNumConst;
console.log('Expecting: 12', multResult);

const divResult = numConst / anotherNumConst;
console.log('Expecting: 0.75', divResult);

const modResult = anotherNumConst % numConst;
console.log('Expecting: 1', modResult);

const powResult = numConst ** anotherNumConst;
console.log('Expecting: 81', powResult);

// automatic number to string conversion
const stringPlusNumResult = stringNumber + numConst;
console.log('Expecting: 53 (string value)', stringPlusNumResult);

// automatic string to number conversion (implicit, thus better to avoid)
const stringMinusNumResult = stringNumber - numConst;
console.log('Expecting: 2', stringMinusNumResult);

// automatic string to number conversion (implicit, thus better to avoid)
const stringDivNumResult = stringNumber / anotherNumConst;
console.log('Expecting: 1.25', stringDivNumResult);

// invalid operation
const stringDivStringResult = stringVar / anotherStringVar;
console.log('Expecting: NaN', stringDivStringResult);

// invalid operation
const stringMultStringResult = stringVar * anotherStringVar;
console.log('Expecting: NaN', stringMultStringResult);

// implicit bool to number conversion. Is also the case for multiplication, division, power, modulus
const boolFalseMinusNumResult = boolFalse - numConst;
console.log('Expecting: -3', boolFalseMinusNumResult);

// implicit bool to string conversion
const boolTruePlusStringResult = boolTrue + stringVar;
console.log('Expecting: truetest', boolTruePlusStringResult);

// intetional string concatenation using + operator
// eslint-disable-next-line
const stringConcatStringResult = stringVar + ' ' + anotherStringVar;
console.log('Expecting: test me (string value):', stringConcatStringResult);
