var expected = 3;
var number_1 = 1;
var number_2 = 2;

function sum(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function testEqual (function_call, expected) {
  let actual = function_call
  if (actual === expected) {
    console.log('Pass')
  } else {
    console.log('Fail')
    console.log(`Expected to get ${expected}, but got ${actual}`)
  }
}
