var expected = 3;
var number_1 = 1;
var number_2 = 2;

function sum(a, b) {
  return a + b
}

function testEqual (number_1, number_2, expected) {
  if (sum(number_1, number_2) === expected) {
    console.log('Pass')
  } else {
    console.log('Fail')
  }
}
