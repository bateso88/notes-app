var expected = 3;
var notExpected = 3;
var number_1 = 1;
var number_2 = 2;
var instance = [];


function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}


// clearForTakeOff(plane) {
//     if (this.isStormy()) {
//       throw new Error("cannot takeoff during storm");
//     }
//     this._hangar = [];
//   }

function returnsError() {
  throw new Error("This is an error")
}


function testName(string) {
  console.log(string);
}

function testEqual(function_call, expected) {
  let actual = function_call;
  if (actual === expected) {
    console.log("Pass");
  } else {
    console.log("Fail");
    console.log(`Expected to get ${expected}, but got ${actual}`);
  }
}

function testNotEqual(function_call, notExpected) {
  let actual = function_call;
  if (actual != notExpected) {
    console.log("Pass");
  } else {
    console.log("Fail");
    console.log(`Expected not to get ${notExpected}, but got ${actual}`);
  }
}

function testArrayContains(array, item) {
  if (array.includes(item)) {
    console.log("Pass");
  } else {
    console.log("Fail");
    console.log(`Expected ${array} to include ${item} but it didn't`);
  }
}


//  This one doesn't work
function testHasMethod(instance, method) {
  if (instance.method != undefined) {
    console.log("Pass");
  } else {
    console.log("Fail");
    console.log(`Expected ${instance} to respond to ${method}`);
  }
}

//  This one doesn't work
function testRaisesError(function_call) {
  let thereWasAnError;
  try {
    function_call();
  } catch (error) {
    thereWasAnError = true
    console.log(error)
  }
  if (thereWasAnError) {
    console.log("Pass");
  } else {
    console.log("Fail");
    console.log("Expected to raise an error but nothing was raised");
  }
}


